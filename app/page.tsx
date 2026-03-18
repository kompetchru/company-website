import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import LineButton from "@/components/LineButton";
import Footer from "@/components/Footer";
import Link from "next/link";

const clients = ["SCB", "PTT", "KBANK", "TrueMove", "TOT", "CAT Telecom"];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Client logos */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-widest">
              ลูกค้าองค์กรที่ไว้วางใจเรา
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {clients.map((client) => (
                <span
                  key={client}
                  className="text-gray-300 font-bold text-xl tracking-wider hover:text-[#00B4D8] transition-colors cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <ServicesGrid />

        {/* About */}
        <AboutSection />

        {/* CTA Banner */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid2" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid2)" />
            </svg>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              พร้อมพัฒนาระบบไอทีขององค์กรคุณ?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              ปรึกษาผู้เชี่ยวชาญของเราฟรี ไม่มีข้อผูกมัด และรับใบเสนอราคาที่เหมาะสมสำหรับองค์กรของคุณ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#00B4D8] text-white rounded-xl font-semibold hover:bg-[#0096B7] transition-all shadow-lg hover:-translate-y-0.5"
              >
                ขอใบเสนอราคาฟรี
              </Link>
              <a
                href="tel:026000000"
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                โทร 02-600-0000
              </a>
            </div>
          </div>
        </section>

        {/* Contact preview section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/20">
                  ติดต่อเรา
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2463] mb-6">
                  พูดคุยกับผู้เชี่ยวชาญ
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและวางแผนโซลูชันไอทีที่เหมาะกับธุรกิจของคุณ
                </p>

                <div className="space-y-5">
                  {[
                    { icon: "📞", title: "โทรศัพท์", value: "02-600-0000", href: "tel:026000000" },
                    { icon: "📧", title: "อีเมล", value: "info@xybertech.co.th", href: "mailto:info@xybertech.co.th" },
                    { icon: "💬", title: "LINE OA", value: "@xybertechsolution", href: "https://line.me/ti/p/~@xybertechsolution" },
                    { icon: "🕐", title: "เวลาทำการ", value: "จ-ศ 08:00 - 18:00 น.", href: null },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0A2463]/5 flex items-center justify-center text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#0A2463] font-semibold text-sm hover:text-[#00B4D8] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#0A2463] font-semibold text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0A2463] mb-6">ส่งข้อความถึงเรา</h3>
                <ContactForm />
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
