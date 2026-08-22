export type BrandIconName =
  | "app"
  | "book-schedule"
  | "client-account"
  | "deep-clean"
  | "discount"
  | "email"
  | "estimate"
  | "guest-ready"
  | "move-in-out"
  | "pricing"
  | "provider-network"
  | "recurring-service"
  | "routine-clean"
  | "secure-verified"
  | "service-area"
  | "services"
  | "text-message"
  | "vacation-rental"
  | "waitlist-coming-soon";

export default function BrandIcon({
  name,
  className = "",
}: {
  name: BrandIconName;
  className?: string;
}) {
  return (
    <span className={`brand-concept-icon ${className}`.trim()} aria-hidden="true">
      <img src={`/icons/${name}.png`} alt="" />
    </span>
  );
}
