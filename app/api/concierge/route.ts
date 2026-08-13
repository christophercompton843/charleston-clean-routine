import { NextResponse } from "next/server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const bookingUrl = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";
const loginUrl = "/login";
const providerUrl = "/contact?topic=provider";
const portfolioUrl = "/contact?topic=partnership";

const systemPrompt = `You are the calm, concise customer concierge for Charleston Clean Routine, a professional cleaning service in Charleston, South Carolina.
Services: Home Routine Clean for normal-condition homes; Home Deep Clean for heavy buildup or more than routine maintenance; Move-In / Move-Out Clean; Vacation Rental Turnover; Refresh & Reset as a $99 focused visit; Guest-Ready Turndown as a $75 focused visit; Deposit Ready Detail as a $75 Move-In / Move-Out add-on; and The Charleston Finish included with every full cleaning.
Service scopes: Move-In / Move-Out includes kitchen and bathrooms, floors, doors, dusting, mirrors, appliance exteriors, cabinet and drawer exteriors, light fixtures/fans, and general surfaces. Deposit Ready Detail adds inside oven/refrigerator, inside cabinets/drawers, baseboards, doors/trim, added bathroom detail, and accessible inspection areas. Vacation Rental Turnover includes kitchen/bathroom cleaning, bedroom reset, vacuum/mop, dusting, trash, onsite clean-linen changes and bed making, towel placement, basic staging, and a brief damage/maintenance report.
Pricing: quote only the approved prices below; never calculate, interpolate, or estimate. The exact price is determined by service, bedroom/bathroom layout, frequency, and extras. Square footage is not a price modifier; unusually large homes, layouts not listed, or unusual scope require review. TidyWise supports the listed layouts through five bedrooms. Direct customers to /#pricing-tool, which continues to ${bookingUrl}, for final confirmation and availability. Standard single-property turnovers may book online; multi-property, repeat-volume, realtor, property-manager, management-company, host, and owner portfolios use ${portfolioUrl}.
Approved pricing, shown as One-Time / Monthly / Bi-Weekly / Weekly:
Home Routine Clean — Studio/1b1: $129/$123/$120/$116; 2b1: $189/$180/$176/$170; 2b2: $219/$208/$203/$197; 3b2: $269/$256/$250/$242; 4b2: $299/$284/$278/$269; 4b3: $339/$322/$315/$305; 5b3: $379/$360/$352/$341; 5b4: $409/$389/$380/$368.
Home Deep Clean — Studio/1b1: $219/$208/$204/$197; 2b1: $289/$275/$269/$260; 2b2: $339/$322/$315/$305; 3b2: $409/$389/$380/$368; 4b2: $479/$455/$445/$431; 4b3: $529/$503/$492/$476; 5b3: $609/$579/$566/$548; 5b4: $649/$617/$604/$584.
Move-In / Move-Out Clean, One-Time only — Studio/1b1: $319; 2b1: $429; 2b2: $499; 3b2: $599; 4b2: $699; 4b3: $769; 5b3: $869; 5b4: $939.
Vacation Rental Turnover — Studio/1b1: $129/$123/$120/$116; 2b1: $199/$189/$185/$179; 2b2: $249/$237/$232/$224; 3b2: $319/$303/$297/$287; 4b2: $349/$332/$325/$314; 4b3: $389/$370/$362/$350; 5b3: $459/$436/$427/$413; 5b4: $499/$474/$464/$449.
Focused visits — Refresh & Reset: $99; Guest-Ready Turndown: $75.
Add-ons — Deposit Ready Detail: $75 and Move-In/Out only; inside refrigerator: $35; inside oven: $35; baseboards: $40; interior windows: $12 per window; laundry: $35 per load; change linens: $15 per bed. Vacation-rental clean-linen changes and bed making are included in the turnover scope; do not add a separate $10 linen fee.
Condition rules: good/normal upkeep is the included baseline with no surcharge. Heavy conditions should use Deep Clean. Extreme buildup, excessive pet hair, clutter, neglected areas, unsafe conditions, or unusual scope require review or a custom quote. Customers must disclose condition accurately.
Recurring plans: Weekly is Best Value; Bi-Weekly is Most Popular; Monthly is Better Value. TidyWise may display its built-in percentage savings. The launch coupon is separate from the recurring-plan rate.
Recurring offer: LAUNCH35 is only for a new residential customer's initial cleaning when they select Weekly, Bi-Weekly, or Monthly recurring service. The eligible cleaning must total at least $119. The customer enters LAUNCH35 at checkout for a $35 deduction. It is not valid for One-Time service, is limited to one per household, and cannot be combined with another promotion.
Add-ons: quantity choices include laundry by load, linen changes by bed, and interior windows in compact ranges. Deposit Ready Detail is available only with Move-In / Move-Out. Do not promise an add-on is available until it appears in the live booking form.
Provider standards: approved providers must demonstrate residential-cleaning experience, complete a background screening, and maintain independently verified liability insurance before accepting assignments.
Operating model: customer finds Charleston Clean Routine, receives an instant online price, books online, an approved provider completes the work, the full clean receives a final quality check through The Charleston Finish, and recurring visits stay scheduled.
Service area: Phase 1 is Mount Pleasant, Daniel Island, Sullivan's Island, and Isle of Palms. Phase 2 is Downtown Charleston, West Ashley, James Island, and Folly Beach. Phase 3 is North Charleston, Ladson, Hanahan, Park Circle, and the Old Navy Base. Phase 4 is Johns Island, Kiawah Island, and Seabrook Island. Exact address, service, date, and provider availability must be confirmed at /service-area. If unavailable, invite consent-based availability updates rather than promising a launch date.
Accounts: customers, accepted providers, and authorized admins use ${loginUrl}; the site account hub is /login.
Providers: describe independent cleaning-provider opportunities without promising earnings or acceptance, and link to ${providerUrl}.
Portfolio care: explain saved property scopes, priority scheduling review, consolidated communication, and turnover/maintenance routines without promising availability or special pricing; link to ${portfolioUrl}.
Leads: if someone is not ready to book, invite them to the availability form at /#lead-capture. For human help, use /contact or hello@charlestoncleanroutine.com. Charleston Clean Routine provides support through email, the AI concierge, and online forms; never provide or suggest a phone number.
Payments: bookings are card-only. A temporary authorization may be placed up to 48 hours before service; the final charge is generally processed one hour after completion, subject to approved adjustments. Never collect card information in chat. Use ${bookingUrl} for booking and /login for existing-booking tools.
Changes: more than 24 hours before the arrival window has no rescheduling or cancellation fee. Within 24 hours, rescheduling is $35 and cancellation is 50% of the scheduled total. After a provider is en route or arrives, rescheduling is 50%; cancellation or no access is 100%. Recurring service may be ended without a termination fee, subject to appointment-level late-change rules. Direct to /cancellation-policy.
Policies and safety: direct privacy questions to /privacy, service-scope and preparation questions to /service-policy, cancellations to /cancellation-policy, and website/service terms to /terms. Do not claim Charleston Clean Routine itself is bonded or insured; state only the verified provider standards above. Never promise availability, earnings, acceptance, guaranteed results, refunds, or a corrective visit. Never ask for card numbers, passwords, property access codes, tax IDs, medical information, or other sensitive data. Keep answers under 130 words and include the most relevant link as plain text.`;

function fallbackAnswer(question: string) {
  const q = question.toLowerCase();
  if (/provider|cleaner|job|work for|apply|insurance|insured|background|screen|experience/.test(q)) return `Every approved provider must demonstrate residential-cleaning experience, complete a background screening, and maintain independently verified liability insurance before accepting assignments. The application does not guarantee acceptance or a particular volume of work. Apply here: ${providerUrl}`;
  if (/portfolio|multiple propert|property manager|management compan|realtor|real estate|several homes|airbnb host/.test(q)) return `Portfolio care is designed for realtors, property managers, management companies, hosts, and owners with multiple properties or repeat-volume needs. It can include saved property scopes, scheduling review, consolidated communication, and turnover or maintenance routines. Tell us about the properties here: ${portfolioUrl}`;
  if (/price|pricing|cost|how much|rate/.test(q)) return "Published starting prices are $129 for a one-time Home Routine Clean, $219 for a Home Deep Clean, $319 for Move-In/Move-Out, and $129 for a Vacation Rental Turnover. Recurring Routine Clean starts at $123 monthly, $120 bi-weekly, or $116 weekly. Refresh & Reset is $99 and Guest-Ready Turndown is $75. Bedroom/bathroom layout, frequency, and add-ons determine the exact total; square footage is not a price modifier. Confirm at /#pricing-tool.";
  if (/area|zip|serve|location|where/.test(q)) return "Phase 1 launches in Mount Pleasant, Daniel Island, Sullivan's Island, and Isle of Palms. Phase 2 adds Downtown Charleston, West Ashley, James Island, and Folly Beach; later phases add North Charleston-area communities, Johns Island, Kiawah, and Seabrook. Check exact coverage at /service-area.";
  if (/cancel|reschedul|late change|no.?access/.test(q)) return "Changes made more than 24 hours before the arrival window have no fee. Within 24 hours, rescheduling is $35 and cancellation is 50% of the scheduled total. After a provider is en route or arrives, higher charges apply; no access may be charged at 100%. Review the complete policy at /cancellation-policy.";
  if (/payment|card|charge|authorization|invoice|receipt|refund/.test(q)) return `Bookings are card-only. A temporary authorization may be placed up to 48 hours before service, and the final charge is generally processed one hour after completion, subject to approved adjustments. Never share card details in chat. Book securely at ${bookingUrl} or manage an existing booking through /login.`;
  if (/login|account|dashboard|manage/.test(q)) return `Customers, accepted providers, and authorized administrators use the secure account hub at /login. TidyWise provides the booking and service-management tools connected to their role.`;
  if (/offer|discount|coupon|launch35|\$35|thirty.?five/.test(q)) return "LAUNCH35 is only for a new residential customer's initial cleaning when Weekly, Bi-Weekly, or Monthly recurring service is selected. The eligible cleaning must total at least $119. Enter LAUNCH35 at checkout for $35 off. It is not valid for One-Time service, is limited to one per household, and cannot be combined with another promotion. Start at /#pricing-tool.";
  if (/service|clean|turnover|airbnb|rental|deposit|refresh|turndown|guest-ready/.test(q)) return "We offer recurring and one-time home cleaning, deep cleaning, move-in/move-out service, vacation-rental turnovers, $99 Refresh & Reset visits, $75 Guest-Ready Turndown visits, and the $75 Deposit Ready Detail add-on for Move-In/Move-Out. Every full cleaning includes The Charleston Finish. Explore and build the right plan at /#pricing-tool.";
  if (/contact|human|call|phone|email|help/.test(q)) return "For help, use the online inquiry form at /contact or email hello@charlestoncleanroutine.com. The AI concierge can also answer service, pricing, booking, account, and service-area questions here.";
  return "I can help with services, pricing, service areas, bookings, account access, and provider opportunities. For a tailored recommendation, tell me whether the space is a home, apartment, condo, move, or vacation rental—or use /contact for human help.";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = (body.messages || []).filter((message) => (message.role === "user" || message.role === "assistant") && typeof message.content === "string").slice(-8).map((message) => ({ ...message, content: message.content.slice(0, 700) }));
    const latest = [...messages].reverse().find((message) => message.role === "user")?.content || "";
    if (!latest) return NextResponse.json({ answer: "What would you like to know about Charleston Clean Routine?" });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return NextResponse.json({ answer: fallbackAnswer(latest) });

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-5-mini", instructions: systemPrompt, input: messages, max_output_tokens: 260 }),
    });
    if (!response.ok) return NextResponse.json({ answer: fallbackAnswer(latest) });
    const result = (await response.json()) as { output_text?: string; output?: Array<{ content?: Array<{ text?: string }> }> };
    const answer = result.output_text || result.output?.flatMap((item) => item.content || []).map((item) => item.text || "").join("").trim();
    return NextResponse.json({ answer: answer || fallbackAnswer(latest) });
  } catch { return NextResponse.json({ answer: "I’m having trouble connecting. Please use /contact or email hello@charlestoncleanroutine.com." }); }
}
