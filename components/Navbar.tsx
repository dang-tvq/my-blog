import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
          ✍️ My Blog
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Trang chủ
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            Giới thiệu
          </Link>
        </div>
      </div>
    </nav>
  )
}
