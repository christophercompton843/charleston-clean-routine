export type PricingZone = "Premium" | "Standard" | "Value";
export type PricingFrequency = "Single" | "Monthly" | "Bi-Weekly" | "Weekly";
export type PricingService =
  | "Home Routine Clean"
  | "Home Deep Clean"
  | "Move-In / Move-Out Clean"
  | "Vacation Rental Turnover";

export const TARGET_CONTRIBUTION_MARGIN = 0.5;
export const PAYMENT_PROCESSING_RATE = 0.03;
export const PAYMENT_PROCESSING_FIXED = 0.3;
export const FULL_SERVICE_SUPPLIES = 8;
export const FULL_SERVICE_COORDINATION = 10;
export const LAUNCH35 = 35;
export const PRICE_ROUNDING = 5;

export const ZONE_PROVIDER_RATE: Record<PricingZone, number> = {
  Premium: 35,
  Standard: 30,
  Value: 25,
};

export const PROPERTY_TIERS = [
  "Studio / 1 bed, 1 bath",
  "2 bed, 1 bath",
  "2 bed, 2 bath",
  "3 bed, 2 bath",
  "4 bed, 2 bath",
  "4 bed, 3 bath",
  "5 bed, 3 bath",
  "5 bed, 4 bath",
] as const;

export type PropertyTier = (typeof PROPERTY_TIERS)[number];

const LABOR_HOURS: Record<PricingService, Record<PropertyTier, number>> = {
  "Home Routine Clean": {
    "Studio / 1 bed, 1 bath": 2,
    "2 bed, 1 bath": 2.25,
    "2 bed, 2 bath": 2.5,
    "3 bed, 2 bath": 6,
    "4 bed, 2 bath": 6.5,
    "4 bed, 3 bath": 7,
    "5 bed, 3 bath": 12,
    "5 bed, 4 bath": 12.75,
  },
  "Home Deep Clean": {
    "Studio / 1 bed, 1 bath": 7,
    "2 bed, 1 bath": 8,
    "2 bed, 2 bath": 9,
    "3 bed, 2 bath": 10.5,
    "4 bed, 2 bath": 17.25,
    "4 bed, 3 bath": 18.75,
    "5 bed, 3 bath": 20.25,
    "5 bed, 4 bath": 21.75,
  },
  "Move-In / Move-Out Clean": {
    "Studio / 1 bed, 1 bath": 6.5,
    "2 bed, 1 bath": 7.5,
    "2 bed, 2 bath": 8.5,
    "3 bed, 2 bath": 9.5,
    "4 bed, 2 bath": 15.75,
    "4 bed, 3 bath": 17.25,
    "5 bed, 3 bath": 18.75,
    "5 bed, 4 bath": 20.25,
  },
  "Vacation Rental Turnover": {
    "Studio / 1 bed, 1 bath": 4,
    "2 bed, 1 bath": 5,
    "2 bed, 2 bath": 5.5,
    "3 bed, 2 bath": 6.5,
    "4 bed, 2 bath": 7.5,
    "4 bed, 3 bath": 8,
    "5 bed, 3 bath": 13.5,
    "5 bed, 4 bath": 14.25,
  },
};

const PREMIUM_ZIPS = new Set(["29451", "29455", "29464", "29466", "29482", "29492"]);
const STANDARD_ZIPS = new Set(["29401", "29403", "29407", "29412", "29414", "29425", "29439"]);
const VALUE_ZIPS = new Set(["29405", "29406", "29410", "29418", "29420"]);

function roundUp(value: number) {
  return Math.ceil(value / PRICE_ROUNDING) * PRICE_ROUNDING;
}

export function pricingZoneForZip(zip: string): PricingZone | null {
  if (PREMIUM_ZIPS.has(zip)) return "Premium";
  if (STANDARD_ZIPS.has(zip)) return "Standard";
  if (VALUE_ZIPS.has(zip)) return "Value";
  return null;
}

export function propertyTierFor(bedrooms: number, bathrooms: number): PropertyTier | null {
  if (bedrooms <= 1 && bathrooms === 1) return "Studio / 1 bed, 1 bath";
  if (bedrooms === 2 && bathrooms === 1) return "2 bed, 1 bath";
  if (bedrooms === 2 && bathrooms === 2) return "2 bed, 2 bath";
  if (bedrooms === 3 && bathrooms === 2) return "3 bed, 2 bath";
  if (bedrooms === 4 && bathrooms === 2) return "4 bed, 2 bath";
  if (bedrooms === 4 && bathrooms === 3) return "4 bed, 3 bath";
  if (bedrooms === 5 && bathrooms === 3) return "5 bed, 3 bath";
  if (bedrooms === 5 && bathrooms === 4) return "5 bed, 4 bath";
  return null;
}

export function isLaunch35Eligible(service: PricingService, frequency: PricingFrequency) {
  return (service === "Home Routine Clean" || service === "Home Deep Clean") && frequency !== "Single";
}

export function getPlatformPrice(service: PricingService, tier: PropertyTier, zone: PricingZone) {
  const baseDirectCost = LABOR_HOURS[service][tier] * ZONE_PROVIDER_RATE[zone]
    + FULL_SERVICE_SUPPLIES
    + FULL_SERVICE_COORDINATION;
  const marginFloor = roundUp(
    (baseDirectCost + PAYMENT_PROCESSING_FIXED)
      / (1 - PAYMENT_PROCESSING_RATE - TARGET_CONTRIBUTION_MARGIN),
  );
  const promoProtection = service === "Home Routine Clean" || service === "Home Deep Clean" ? LAUNCH35 : 0;
  return roundUp(marginFloor + promoProtection);
}

export function contributionMargin(args: {
  service: PricingService;
  tier: PropertyTier;
  zone: PricingZone;
  frequency: PricingFrequency;
}) {
  const listPrice = getPlatformPrice(args.service, args.tier, args.zone);
  const chargedPrice = isLaunch35Eligible(args.service, args.frequency) ? listPrice - LAUNCH35 : listPrice;
  const directCost = LABOR_HOURS[args.service][args.tier] * ZONE_PROVIDER_RATE[args.zone]
    + FULL_SERVICE_SUPPLIES
    + FULL_SERVICE_COORDINATION
    + chargedPrice * PAYMENT_PROCESSING_RATE
    + PAYMENT_PROCESSING_FIXED;
  return (chargedPrice - directCost) / chargedPrice;
}

export const ADD_ON_PRICES = {
  "Deposit Ready Detail": 90,
  "Inside refrigerator": 50,
  "Inside oven": 50,
  Baseboards: 65,
  "Interior windows": 20,
  "Laundry — wash & fold": 50,
  "Change linens": 25,
  "Laundry service — Vacation Rental Only": 50,
  "Linen change — Vacation Rental Only": 25,
} as const;

export function startingPrice(service: PricingService, zone: PricingZone) {
  return getPlatformPrice(service, "Studio / 1 bed, 1 bath", zone);
}
