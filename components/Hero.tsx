import Link from "next/link";

export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#00B4D8]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#00B4D8]/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#00B4D8]/20 text-[#00B4D8] border border-[#00B4D8]/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
              IT Solutions ครบวงจรสำหรับองค์กร
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              เราสร้าง
              <span className="text-[#00B4D8]"> โครงสร้างพื้นฐาน</span>
              <br />ไอทีที่แข็งแกร่ง
              <br />สำหรับธุรกิจคุณ
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              โปรเทค ไอที โซลูชันส์ ให้บริการด้านไอทีระดับองค์กรครบวงจร ตั้งแต่ระบบฐานข้อมูล
              เซิร์ฟเวอร์ คลาวด์ ไปจนถึงระบบ Disaster Recovery ด้วยทีมผู้เชี่ยวชาญกว่า 15 ปี
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#00B4D8] text-white rounded-xl font-semibold text-base hover:bg-[#0096B7] transition-all duration-200 shadow-lg hover:shadow-[#00B4D8]/40 hover:-translate-y-0.5"
              >
                ติดต่อเราเลย
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                ดูบริการทั้งหมด
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "15+", label: "ปีประสบการณ์" },
                { value: "300+", label: "ลูกค้าองค์กร" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[#00B4D8]">{stat.value}</p>
                  <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-white/10 rounded-md h-6 mx-2" />
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "🗄️", label: "Database Cluster", status: "Active", color: "green" },
                    { icon: "🖥️", label: "Server Farm", status: "Online", color: "green" },
                    { icon: "☁️", label: "Cloud Backup", status: "Synced", color: "blue" },
                    { icon: "🔄", label: "DR System", status: "Ready", color: "green" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-white text-sm font-medium">{item.label}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.color === "green"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-blue-500/20 text-blue-300"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/60 text-xs mb-2">System Health</p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#00B4D8] to-green-400 h-2 rounded-full w-[98%]" />
                  </div>
                  <p className="text-white/80 text-xs mt-2 text-right">98% Healthy</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-[#0A2463] font-semibold text-sm">ISO 27001 Certified</p>
                  <p className="text-gray-500 text-xs">มาตรฐานความปลอดภัย</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
