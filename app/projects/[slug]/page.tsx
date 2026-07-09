import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, hasCaseStudy } from "@/lib/content";
import CaseStudy from "@/components/CaseStudy";

// Only projects with a published case study get a page; placeholder projects
// are excluded so their filler pages are never reachable.
export function generateStaticParams() {
  return PROJECTS.filter((p) => hasCaseStudy(p.id)).map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project || !hasCaseStudy(project.id)) return {};
  return {
    title: `${project.name}: Niksar Case Study`,
    description: `How Niksar designed and built ${project.name}.`,
  };
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project || !hasCaseStudy(project.id)) notFound();

  return <CaseStudy project={project} />;
}
