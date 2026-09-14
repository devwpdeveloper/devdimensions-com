import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/theme-pages";

export const metadata: Metadata = {
  title: "Case Studies – DevDimensions",
  description:
    "Explore the digital products and experiences DevDimensions creates with ambitious teams.",
};

export default function Page() {
  return <CaseStudiesPage />;
}
