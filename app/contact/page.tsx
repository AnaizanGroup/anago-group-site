import { Metadata } from "next"
import { ContactPage } from "@/components/pages/ContactPage"

export const metadata: Metadata = {
  title: "Contact Us | Anago Group",
  description: "Get in touch with Anago Group. Reach out to our corporate headquarters, regional offices, and dedicated sector teams for partnership inquiries and industrial services.",
  keywords: ["Contact Anago Group", "African industrial partnership", "Anago Group headquarters", "contact corporate Africa"],
}

export default function Contact() {
    return <ContactPage />
}
