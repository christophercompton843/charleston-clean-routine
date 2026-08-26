import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Provider Access | Charleston Clean Routine",
  description: "Access the Charleston Clean Routine provider portal.",
};

const providerPortalUrl = "https://charlestoncleanroutine.com/login";

export default function ProviderApplicationPage() {
  redirect(providerPortalUrl);
}
