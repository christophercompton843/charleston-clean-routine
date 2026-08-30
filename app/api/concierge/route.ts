import { NextResponse } from "next/server";

type ChatMessage = { role: "user" | "assistant"; content: string };

const bookingUrl = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";
const loginUrl = "/login";
const providerUrl = "/provider-application";
const portfolioUrl = "/portfolio";
const phoneNumber = "(843) 633-8648";

const systemPrompt = `You are the calm, concise customer concierge for Charleston Clean Routine, a professional cleaning service in Charleston, South Carolina.
Services: Home Routine Clean for normal-condition homes; Home Deep Clean for heavy buildup or more than routine maintenance; Move-In / Move-Out Clean; Vacation Rental Turnover; Refresh & Reset as a $99 focused visit; Guest-Ready Turndown as a $75 focused visit; Deposit Ready Detail as a $75 Move-In / Move-Out add-on; and The Charleston Finish included with every full cleaning.
Service scopes: Move-In / Move-Out includes kitchen and bathrooms, floors, doors, dusting, mirrors, appliance exteriors, cabinet and drawer exteriors, light fixtures/fans, and general surfaces. Deposit Ready Detail adds inside oven/refrigerator, inside cabinets/drawers, baseboards, doors/trim, added bathroom detail, and accessible inspection areas. Vacation Rental Turnover includes kitchen/bathroom cleaning, bedroom reset, vacuum/mop, dusting, trash, onsite clean-linen changes and bed making, towel placement, basic staging, and a brief damage/maintenance report.
Pricing: quote only approved published prices; never calculate, interpolate, or invent a price. Direct residential customers to /#pricing-tool for current pricing and then to ${bookingUrl} for final confirmation and live availability. Vacation-rental, Airbnb, multi-property, repeat-volume, realtor, property-manager, management-company, host, and owner portfolios use ${portfolioUrl}.
Condition rules: good/normal upkeep is the included baseline with no surcharge. Heavy conditions should use Deep Clean. Extreme buildup, excessive pet hair, clutter, neglected areas, unsafe conditions, or unusual scope require review or a custom quote. Customers must disclose condition accurately.
Recurring plans: Weekly, Bi-Weekly, Monthly, and One-Time are shown in the pricing tool when applicable. Do not invent, advertise, or provide any retired launch coupon or $35-off promotion.
Provider standards: approved providers must demonstrate residential-cleaning experience, complete a background screening, and maintain independently verified liability insurance before accepting assignments.
Operating model: customer finds Charleston Clean Routine, receives an online price when available, books online, an approved provider completes the work, the full clean receives a final quality check through The Charleston Finish, and recurring visits stay scheduled.
Service area: direct customers to /service-area for current coverage and availability. If unavailable, provide the next available online option rather than promising a date.
Accounts: customers, accepted providers, and authorized admins use ${loginUrl}; the site account hub is /login.
Providers: describe independent cleaning-provider opportunities without promising earnings or acceptance, and link to ${providerUrl}.
Portfolio care: explain property-specific scopes, scheduling coordination, consolidated communication, and turnover/maintenance routines without promising availability or special pricing; link to ${portfolioUrl}.
Contact strategy: the website, Client Portal, AI concierge, FAQ, and online forms are the primary service channels. Do not volunteer a phone number for ordinary pricing, booking, service selection, account access, or routine questions. If a customer explicitly asks for the phone number, asks to call, says they need phone support, or the digital paths have not resolved the issue, provide Charleston Clean Routine at ${phoneNumber}. Explain that online tools remain the fastest route for pricing, booking, and account management. For written human help use /contact or hello@charlestoncleanroutine.com.
Payments: bookings are card-only. Never collect card information in chat. Use ${bookingUrl} for booking and /login for existing-booking tools.
Changes: direct customers to /cancellation-policy for current cancellation and rescheduling rules rather than inventing terms.
Policies and safety: direct privacy questions to /privacy, service-scope and preparation questions to /service-policy, cancellations to /cancellation-policy, and website/service terms to /terms. Do not claim Charleston Clean Routine itself is bonded or insured; state only verified provider standards. Never promise availability, earnings, acceptance, guaranteed results, refunds, or a corrective visit. Never ask for card numbers, passwords, property access codes, tax IDs, medical information, or other sensitive data. Keep answers concise and give the most useful next step.`;

function fallbackAnswer(question: string) {
  const q = question.toLowerCase();
  if (/phone|telephone|number|call you|call charleston|speak.*phone|phone support/.test(q)) return `Charleston Clean Routine can be reached at ${phoneNumber}. For pricing, booking, service-area checks, and account management, the online tools are usually the fastest route. If you need written help instead, use /contact.`;
  if (/provider|cleaner|job|work for|apply|insurance|insured|background|screen|experience/.test(q)) return `Approved providers must meet Charleston Clean Routine screening and compliance requirements before accepting assignments. Applying does not guarantee acceptance or a particular volume of work. Apply here: ${providerUrl}`;
  if (/portfolio|multiple propert|property manager|management compan|realtor|real estate|several homes|airbnb host/.test(q)) return `Portfolio care is for clients with multiple properties or repeat-volume needs. It organizes property-specific scopes, scheduling, communication, and recurring requirements into one operating plan. Start here: ${portfolioUrl}`;
  if (/price|pricing|cost|how much|rate/.test(q)) return "Residential pricing is available through Build Your Routine, where the current approved price is shown from the service, home layout, condition, frequency, and selected options. Start at /#pricing-tool.";
  if (/area|zip|serve|location|where/.test(q)) return "Check your exact Charleston-area coverage at /service-area. The site will give you the current service-area path without requiring a phone call.";
  if (/cancel|reschedul|late change|no.?access/.test(q)) return "Current cancellation and rescheduling rules are available at /cancellation-policy. For an existing booking, use /login for the account tools connected to your service.";
  if (/payment|card|charge|authorization|invoice|receipt|refund/.test(q)) return `Never share card details in chat. Book securely at ${bookingUrl} or manage an existing booking through /login. For a payment issue the account tools do not resolve, use /contact.`;
  if (/login|account|dashboard|manage/.test(q)) return `Customers, accepted providers, and authorized administrators use the secure account hub at /login. It routes each role to the appropriate account tools.`;
  if (/discount|coupon|launch35|\$35|thirty.?five|offer/.test(q)) return "There is no current $35-off launch coupon being advertised. Use /#pricing-tool for the current residential price and any active customer-facing options.";
  if (/service|clean|turnover|airbnb|rental|deposit|refresh|turndown|guest-ready/.test(q)) return "Charleston Clean Routine offers home cleaning, deep cleaning, move-in/move-out service, vacation-rental and Airbnb care, focused visits, and portfolio care. Start at /services to choose the path that matches the property.";
  if (/contact|human|email|help/.test(q)) return "For written human help, use /contact or email hello@charlestoncleanroutine.com. The AI concierge can also resolve service, pricing, booking, account, and service-area questions here. If you specifically need the phone number, ask me for it.";
  return "I can help with services, pricing, service areas, bookings, account access, contact options, and provider opportunities. Tell me what you are trying to accomplish and I’ll give you the shortest useful path.";
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
