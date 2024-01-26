import { allPosts } from "contentlayer/generated"
import { PreviewArticle } from '@/components/cards/preview-article'
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
          <PreviewArticle
            key={post._id}
            title={post.title}
            resume={post.description || "Summary not available"}
            img_url={post.imgSrc}
            img_alt=""
            slug={post.slug}
          />
      ))}
    </div>
  );
}
