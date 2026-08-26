import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Provider Opportunities | Charleston Clean Routine",
  description: "Apply to join Charleston Clean Routine’s selective network of experienced, independently insured cleaning professionals.",
};

const providerApplicationUrl = "https://form.jotform.com/262283439241053";

export default function ProviderApplicationPage() {
  redirect(providerApplicationUrl);
}
