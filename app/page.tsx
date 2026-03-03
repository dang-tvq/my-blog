import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Xin chào! 👋</h1>
        <p className="text-base md:text-lg text-gray-500">Đây là nơi tôi chia sẻ suy nghĩ, kiến thức và những điều thú vị.</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-gray-200 p-16 text-center">
          <p className="text-4xl mb-4">📝</p>
          <p className="text-gray-500 text-lg">Chưa có bài viết nào.</p>
          <p className="text-gray-400 text-sm mt-2">Tạo file <code className="bg-gray-100 px-1 rounded">.md</code> trong thư mục <code className="bg-gray-100 px-1 rounded">posts/</code> để bắt đầu.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bento: Bài viết nổi bật — chiếm 2 cột */}
          {featuredPost && (
            <Link
              href={`/posts/${featuredPost.slug}`}
              className="md:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-[240px] text-white transition-transform hover:scale-[1.01] hover:shadow-xl"
              style={{ backgroundColor: featuredPost.coverColor }}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-3 block">Bài mới nhất</span>
                <h2 className="text-xl md:text-2xl font-bold leading-snug mb-3">{featuredPost.title}</h2>
                <p className="opacity-80 text-sm line-clamp-2">{featuredPost.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2 flex-wrap">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs opacity-70">{featuredPost.date}</span>
              </div>
            </Link>
          )}

          {/* Bento: Stats box */}
          <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col justify-between">
            <p className="text-indigo-400 text-sm font-medium">Tổng bài viết</p>
            <p className="text-6xl font-bold text-indigo-600 mt-2">{posts.length}</p>
            <p className="text-indigo-400 text-xs mt-4">bài đã được viết ✨</p>
          </div>

          {/* Bento: Các bài còn lại */}
          {otherPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[180px] text-white transition-transform hover:scale-[1.01] hover:shadow-lg ${
                i === 0 ? '' : ''
              }`}
              style={{ backgroundColor: post.coverColor }}
            >
              <div>
                <h3 className="text-lg font-bold leading-snug mb-2">{post.title}</h3>
                <p className="opacity-75 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-1 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs opacity-70">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
