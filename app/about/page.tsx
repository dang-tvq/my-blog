export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Giới thiệu 👤</h1>
        <p className="text-gray-500 text-lg">Một ít về tôi và blog này.</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Avatar + Name */}
        <div className="sm:col-span-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl shrink-0">
            🧑‍💻
          </div>
          <div>
            <h2 className="text-2xl font-bold">Tên của bạn</h2>
            <p className="opacity-80 mt-1">Nhà phát triển · Người yêu thích viết lách</p>
          </div>
        </div>

        {/* Về tôi */}
        <div className="sm:col-span-2 rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Về tôi</h3>
          <p className="text-gray-600 leading-relaxed">
            Xin chào! Tôi là một người đam mê công nghệ và viết lách. Blog này là nơi tôi chia sẻ
            những kiến thức, kinh nghiệm và suy nghĩ của mình về lập trình, cuộc sống và những điều
            thú vị khác.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Hãy thay đổi nội dung này thành thông tin của bạn nhé! ✏️
          </p>
        </div>

        {/* Kỹ năng */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
          <h3 className="font-semibold text-emerald-800 mb-3">Kỹ năng</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX'].map((skill) => (
              <span key={skill} className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Liên hệ */}
        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
          <h3 className="font-semibold text-amber-800 mb-3">Liên hệ</h3>
          <ul className="space-y-2 text-sm text-amber-700">
            <li>📧 email@example.com</li>
            <li>🐙 github.com/username</li>
            <li>🐦 twitter.com/username</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
