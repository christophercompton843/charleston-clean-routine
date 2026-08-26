import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Provider Application | Charleston Clean Routine",
  description: "Apply to join the Charleston Clean Routine provider network.",
};

const providerApplicationUrl = "https://form.jotform.com/262283439241053";

export default function ProviderApplicationPage() {
  redirect(providerApplicationUrl);
}
