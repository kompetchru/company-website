import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LineButton from "@/components/LineButton";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อทีมผู้เชี่ยวชาญของโปรเทค ไอที โซลูชันส์ โทร 02-600-0000 หรือส่งอีเมล info@protech-it.co.th",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "โทรศัพท์",
    value: "02-600-0000",
    sub: "จันทร์ – ศุกร์ 08:00 – 18:00 น.",
    href: "tel:026000000",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "อีเมล",
    value: "info@protech-it.co.th",
    sub: "ตอบกลับภายใน 24 ชั่วโมง",
    href: "mailto:info@protech-it.co.th",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    title: "LINE Official",
    value: "@protechit",
    sub: "แชทได้ตลอด 24 ชั่วโมง",
    href: "https://line.me/ti/p/~@protech_it",
    color: "from-green-500 to-green-700",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "ที่อยู่",
    value: "88/8 อาคารไอที ทาวเวอร์",
    sub: "ถนนสุขุมวิท แขวงคลองเตย กรุงเทพฯ 10110",
    href: null,
    color: "from-cyan-500 to-[#0096B7]",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-contact" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-contact)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-[#00B4D8]/20 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/30">
              ติดต่อเรา
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              พร้อมช่วยเหลือคุณเสมอ
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              ติดต่อทีมผู้เชี่ยวชาญของเราผ่านช่องทางที่สะดวกสำหรับคุณ
            </p>
          </div>
        </section>

        {/* Contact cards + form */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#00B4D8]/30 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#0A2463] text-sm mb-1">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#00B4D8] font-semibold text-sm hover:underline block mb-1"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#0A2463] font-semibold text-sm mb-1">{item.value}</p>
                  )}
                  <p className="text-gray-400 text-xs">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Form + map placeholder */}
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0A2463] mb-2">ส่งข้อความถึงเรา</h2>
                <p className="text-gray-500 text-sm mb-8">
                  กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
                </p>
                <ContactForm />
              </div>

              <div className="lg:col-span-2 space-y-6">
                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-gradient-to-br from-[#0A2463]/5 to-[#00B4D8]/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📍</div>
                    <p className="text-[#0A2463] font-semibold text-sm">88/8 อาคารไอที ทาวเวอร์</p>
                    <p className="text-gray-500 text-xs">ถนนสุขุมวิท กรุงเทพฯ</p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0A2463] mb-4 flex items-center gap-2">
                    <span className="text-[#00B4D8]">🕐</span>
                    เวลาทำการ
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { day: "จันทร์ – ศุกร์", time: "08:00 – 18:00 น." },
                      { day: "เสาร์", time: "09:00 – 13:00 น." },
                      { day: "อาทิตย์ และวันหยุดนักขัตฤกษ์", time: "ปิดทำการ" },
                    ].map((h) => (
                      <li key={h.day} className="flex justify-between text-sm">
                        <span className="text-gray-500">{h.day}</span>
                        <span className={`font-medium ${h.time === "ปิดทำการ" ? "text-red-400" : "text-[#0A2463]"}`}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-400">
                      * สำหรับลูกค้าที่มี SLA Support สามารถติดต่อ Helpdesk 24/7 ได้ที่ LINE: @protechit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LineButton />
    </>
  );
}
