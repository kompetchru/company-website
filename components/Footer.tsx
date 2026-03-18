import Link from "next/link";

const services = [
  "ระบบฐานข้อมูล",
  "โครงสร้างพื้นฐานเซิร์ฟเวอร์",
  "บริการคลาวด์",
  "ระบบกู้คืนภัยพิบัติ",
];

const quickLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/services", label: "บริการ" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06112E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#0A2463] flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <p className="font-bold text-base text-white">Xyber Tech</p>
                <p className="text-[#00B4D8] text-xs">IT Solutions</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              พันธมิตรด้านไอทีครบวงจรที่คุณไว้วางใจได้ สำหรับองค์กรธุรกิจทุกขนาด ด้วยประสบการณ์กว่า 15 ปี
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "LINE", icon: "💬", href: "https://line.me/ti/p/~@xybertechsolution" },
                { label: "Facebook", icon: "📘", href: "#" },
                { label: "LinkedIn", icon: "🔗", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sm hover:bg-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-[#00B4D8] uppercase tracking-wider mb-5">บริการ</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00B4D8]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-[#00B4D8] uppercase tracking-wider mb-5">ลิงก์ด่วน</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00B4D8]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm text-[#00B4D8] uppercase tracking-wider mb-5">ติดต่อ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#00B4D8] mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p className="text-white/60 text-sm">
                  88/8 อาคารไอที ทาวเวอร์ ถนนสุขุมวิท<br />แขวงคลองเตย กรุงเทพฯ 10110
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#00B4D8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:026000000" className="text-white/60 text-sm hover:text-white transition-colors">02-600-0000</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#00B4D8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:info@xybertech.co.th" className="text-white/60 text-sm hover:text-white transition-colors">info@xybertech.co.th</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#00B4D8] text-sm">LINE:</span>
                <a
                  href="https://line.me/ti/p/~@xybertechsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  @xybertechsolution
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} บริษัท Xyber Tech Solution จำกัด. สงวนลิขสิทธิ์
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-white/70 transition-colors">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors">เงื่อนไขการให้บริการ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
