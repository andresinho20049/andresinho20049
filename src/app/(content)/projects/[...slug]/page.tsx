import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdsenseArticleAds } from "@/components/google/AdsenseComponent";
import { BreadcrumbComponent } from "@/components/iteraction/breadcrumb";
import { Mdx } from "@/components/structure/mdx-components";
import Image from "next/image";
import { RecommendedProjects } from "@/components/cards/cardProject";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allProjects.find((proj) => proj.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allProjects.map((proj) => ({
    slug: proj.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article>
      <BreadcrumbComponent text={page.title} />
      <div className="flex flex-col justify-start items-center">
        <div className="w-4/5 prose dark:prose-invert">
          <h1>{page.title}</h1>
          {page.description && (
            <h3 className="text-lg md:text-xl">{page.description}</h3>
          )}
          <hr />
          <Image alt="Modelo" src={page.imgSrc} width={1080} height={1920} />
          <Mdx code={page.body.code} />
        </div>
        <div className="w-full">
          <AdsenseArticleAds />
        </div>
        <div className="w-5/6">
          <RecommendedProjects exclusion={page.title} qtde={4} />
        </div>
      </div>
    </article>
  );
}
