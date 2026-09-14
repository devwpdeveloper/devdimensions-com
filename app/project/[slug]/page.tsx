import type { Metadata } from "next";
import { ProjectDetailPage } from "@/components/theme-pages";

const projectTitles: Record<string, string> = {
  "literal-co": "Literal Co",
  emd: "EMD",
  "vanrock-holdings": "Vanrock Holdings",
  "performance-tours": "Performance Tours",
  "express-flooring": "Express Flooring",
  "soy-kitty": "Soy Kitty",
  "walter-on-wire": "Walter On Wine",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = projectTitles[slug] ?? "Case Study";
  return { title: `${name} – DevDimensions` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
