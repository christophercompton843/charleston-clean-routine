export type PricingZone = "Premium" | "Standard" | "Value";
export type ResidentialService = "Home Routine Clean" | "Home Deep Clean" | "Move-In / Move-Out Clean";
export type PropertySize =
  | "Studio / 1 bed, 1 bath"
  | "2 bed, 1 bath"
  | "2 bed, 2 bath"
  | "3 bed, 2 bath"
  | "4 bed, 2 bath"
  | "4 bed, 3 bath"
  | "5 bed, 3 bath"
  | "5 bed, 4 bath";

export const PLATFORM_PRICING: Record<ResidentialService, Record<PropertySize, Record<PricingZone, number>>> = {
  "Home Routine Clean": {
    "Studio / 1 bed, 1 bath": { Premium: 225, Standard: 205, Value: 185 },
    "2 bed, 1 bath": { Premium: 245, Standard: 220, Value: 195 },
    "2 bed, 2 bath": { Premium: 265, Standard: 235, Value: 210 },
    "3 bed, 2 bath": { Premium: 525, Standard: 460, Value: 395 },
    "4 bed, 2 bath": { Premium: 560, Standard: 490, Value: 420 },
    "4 bed, 3 bath": { Premium: 600, Standard: 525, Value: 450 },
    "5 bed, 3 bath": { Premium: 970, Standard: 840, Value: 715 },
    "5 bed, 4 bath": { Premium: 1025, Standard: 890, Value: 755 },
  },
  "Home Deep Clean": {
    "Studio / 1 bed, 1 bath": { Premium: 600, Standard: 525, Value: 450 },
    "2 bed, 1 bath": { Premium: 670, Standard: 585, Value: 500 },
    "2 bed, 2 bath": { Premium: 745, Standard: 650, Value: 555 },
    "3 bed, 2 bath": { Premium: 860, Standard: 745, Value: 635 },
    "4 bed, 2 bath": { Premium: 1360, Standard: 1175, Value: 995 },
    "4 bed, 3 bath": { Premium: 1475, Standard: 1275, Value: 1075 },
    "5 bed, 3 bath": { Premium: 1585, Standard: 1370, Value: 1155 },
    "5 bed, 4 bath": { Premium: 1695, Standard: 1465, Value: 1235 },
  },
  "Move-In / Move-Out Clean": {
    "Studio / 1 bed, 1 bath": { Premium: 525, Standard: 455, Value: 385 },
    "2 bed, 1 bath": { Premium: 600, Standard: 520, Value: 440 },
    "2 bed, 2 bath": { Premium: 675, Standard: 585, Value: 495 },
    "3 bed, 2 bath": { Premium: 750, Standard: 650, Value: 545 },
    "4 bed, 2 bath": { Premium: 1215, Standard: 1045, Value: 880 },
    "4 bed, 3 bath": { Premium: 1325, Standard: 1140, Value: 960 },
    "5 bed, 3 bath": { Premium: 1440, Standard: 1240, Value: 1040 },
    "5 bed, 4 bath": { Premium: 1550, Standard: 1335, Value: 1120 },
  },
};

export const ADD_ON_PRICING = {
  depositReady: { label: "Deposit Ready Detail", price: 90, unit: "per service" },
  refrigerator: { label: "Inside refrigerator", price: 50, unit: "per item" },
  oven: { label: "Inside oven", price: 50, unit: "per item" },
  baseboards: { label: "Baseboards", price: 65, unit: "per service" },
  windows: { label: "Interior windows", price: 20, unit: "per window" },
  laundry: { label: "Laundry — wash & fold", price: 50, unit: "per load" },
  linens: { label: "Change linens", price: 25, unit: "per bed" },
} as const;

export const LAUNCH_DISCOUNT = 35;

export const PROPERTY_SIZES = Object.keys(PLATFORM_PRICING["Home Routine Clean"]) as PropertySize[];

export const ZONE_OPTIONS: Array<{ zone: PricingZone; title: string; places: string }> = [
  { zone: "Premium", title: "East Cooper + premium coastal", places: "Mount Pleasant · Daniel Island · Sullivan’s Island · Isle of Palms · Kiawah · Seabrook" },
  { zone: "Standard", title: "Charleston core + islands", places: "Downtown Charleston · West Ashley · James Island · Johns Island · Folly Beach" },
  { zone: "Value", title: "North Charleston corridor", places: "North Charleston · Hanahan · Park Circle · Ladson · Old Navy Base" },
];
