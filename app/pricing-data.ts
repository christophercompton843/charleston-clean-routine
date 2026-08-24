export type PricingZone = "Premium" | "Standard" | "Value";
export type Frequency = "Single" | "Monthly" | "Bi-Weekly" | "Weekly";
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

type FrequencyPrices = Record<Frequency, number | null>;

export const PLATFORM_PRICING: Record<ResidentialService, Record<PropertySize, FrequencyPrices>> = {
  "Home Routine Clean": {
    "Studio / 1 bed, 1 bath": { Single: 166, Monthly: 157.7, "Bi-Weekly": 154.38, Weekly: 150 },
    "2 bed, 1 bath": { Single: 208, Monthly: 197.6, "Bi-Weekly": 193.44, Weekly: 187.2 },
    "2 bed, 2 bath": { Single: 249, Monthly: 236.55, "Bi-Weekly": 231.57, Weekly: 224.1 },
    "3 bed, 2 bath": { Single: 332, Monthly: 315.4, "Bi-Weekly": 308.76, Weekly: 298.8 },
    "4 bed, 2 bath": { Single: 414, Monthly: 393.3, "Bi-Weekly": 385.02, Weekly: 373 },
    "4 bed, 3 bath": { Single: 455, Monthly: 432.25, "Bi-Weekly": 423.15, Weekly: 410 },
    "5 bed, 3 bath": { Single: 497, Monthly: 472.15, "Bi-Weekly": 462.21, Weekly: 447.3 },
    "5 bed, 4 bath": { Single: 559, Monthly: 531.05, "Bi-Weekly": 519.87, Weekly: 503.1 },
  },
  "Home Deep Clean": {
    "Studio / 1 bed, 1 bath": { Single: 314, Monthly: 298.3, "Bi-Weekly": 298, Weekly: 298 },
    "2 bed, 1 bath": { Single: 373, Monthly: 354.35, "Bi-Weekly": 346.89, Weekly: 336 },
    "2 bed, 2 bath": { Single: 414, Monthly: 393.3, "Bi-Weekly": 385.02, Weekly: 373 },
    "3 bed, 2 bath": { Single: 497, Monthly: 472.15, "Bi-Weekly": 462.21, Weekly: 447.3 },
    "4 bed, 2 bath": { Single: 621, Monthly: 589.95, "Bi-Weekly": 577.53, Weekly: 558.9 },
    "4 bed, 3 bath": { Single: 662, Monthly: 628.9, "Bi-Weekly": 615.66, Weekly: 596 },
    "5 bed, 3 bath": { Single: 749, Monthly: 726, "Bi-Weekly": 726, Weekly: 726 },
    "5 bed, 4 bath": { Single: 799, Monthly: 781, "Bi-Weekly": 781, Weekly: 781 },
  },
  "Move-In / Move-Out Clean": {
    "Studio / 1 bed, 1 bath": { Single: 389, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "2 bed, 1 bath": { Single: 449, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "2 bed, 2 bath": { Single: 529, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "3 bed, 2 bath": { Single: 614, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "4 bed, 2 bath": { Single: 689, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "4 bed, 3 bath": { Single: 749, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "5 bed, 3 bath": { Single: 849, Monthly: null, "Bi-Weekly": null, Weekly: null },
    "5 bed, 4 bath": { Single: 899, Monthly: null, "Bi-Weekly": null, Weekly: null },
  },
};

export const ADD_ON_PRICING = {
  depositReady: { label: "Deposit Ready Detail", price: 75, unit: "Move-In/Out service only" },
  refrigerator: { label: "Inside refrigerator", price: 38, unit: "per item" },
  oven: { label: "Inside oven", price: 38, unit: "per item" },
  baseboards: { label: "Baseboards", price: 57, unit: "per service" },
  windows: { label: "Interior windows", price: 16, unit: "per window" },
  laundry: { label: "Laundry — wash & fold", price: 38, unit: "per load" },
  linens: { label: "Change linens — additional bed", price: 20, unit: "per additional bed" },
} as const;

export const LAUNCH_DISCOUNT = 35;

export const PROPERTY_SIZES = Object.keys(PLATFORM_PRICING["Home Routine Clean"]) as PropertySize[];

export const ZONE_OPTIONS: Array<{ zone: PricingZone; title: string; places: string }> = [
  { zone: "Premium", title: "Premium service area", places: "Mount Pleasant · Isle of Palms · Sullivan’s Island · Downtown Charleston · Johns Island · Kiawah · Seabrook · Daniel Island" },
  { zone: "Standard", title: "Standard service area", places: "West Ashley · James Island · Park Circle · Hanahan · Summerville · Goose Creek" },
  { zone: "Value", title: "Extended service area", places: "North Charleston · Ladson · Moncks Corner · Ridgeville · Hollywood · Ravenel" },
];
