import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allProjects } from "contentlayer/generated"

import { Mdx } from "@/components/structure/mdx-components"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allProjects.find((proj) => proj.slugAsParams === slug);

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allProjects.map((proj) => ({
    slug: proj.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="flex flex-col justify-start items-center">
      <div className="py-6 prose dark:prose-invert">
        <h1>{page.title}</h1>
        {page.description && <h3 className="text-xl">{page.description}</h3>}
        <hr />
        <Image alt="Modelo" src={page.imgSrc} width={1920} height={1080} />
        <Mdx code={page.body.code} />
      </div>
    </article>
  );
}
