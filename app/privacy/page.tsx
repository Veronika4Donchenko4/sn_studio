import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy: Niksar",
  description:
    "How Niksar handles data: cookieless analytics, a contact form used only to reply, and no third-party tracking cookies.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
