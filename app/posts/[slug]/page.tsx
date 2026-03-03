import { getPostBySlug, getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-600 transition-colors mb-8">
        ← Quay lại trang chủ
      </Link>

      {/* Header */}
      <div
        className="rounded-2xl p-8 mb-8 text-white"
        style={{ backgroundColor: post.coverColor }}
      >
        <div className="flex gap-2 mb-4 flex-wrap">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-snug mb-3">{post.title}</h1>
        <p className="opacity-80">{post.date}</p>
      </div>

      {/* Content */}
      <article
        className="prose prose-gray max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  )
}
