import { TaxonomyPage } from "@/components/theme-pages";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TaxonomyPage type="Author" name={slug.replaceAll("-", " ")} />;
}
