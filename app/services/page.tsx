import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import LineButton from "@/components/LineButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "บริการของเรา",
  description:
    "บริการไอทีครบวงจร ระบบฐานข้อมูล เซิร์ฟเวอร์ คลาวด์ และ Disaster Recovery สำหรับองค์กรธุรกิจ",
};

const process = [
  {
    step: "01",
    title: "วิเคราะห์ความต้องการ",
    desc: "ทีมผู้เชี่ยวชาญเข้าพบเพื่อศึกษาและวิเคราะห์ความต้องการของธุรกิจอย่างละเอียด",
  },
  {
    step: "02",
    title: "ออกแบบโซลูชัน",
    desc: "นำเสนอแผนและสถาปัตยกรรมระบบที่เหมาะสมกับงบประมาณและเป้าหมายองค์กร",
  },
  {
    step: "03",
    title: "ติดตั้งและทดสอบ",
    desc: "ดำเนินการติดตั้งและทดสอบระบบอย่างเป็นระบบ พร้อมรายงานผลในทุกขั้นตอน",
  },
  {
    step: "04",
    title: "ฝึกอบรมและส่งมอบ",
    desc: "ฝึกอบรมทีมงานของคุณและส่งมอบระบบพร้อมเอกสารครบถ้วน",
  },
  {
    step: "05",
    title: "บริการหลังการขาย",
    desc: "สนับสนุนทางเทคนิคตลอด 24/7 และบริการ Managed Services ตามที่ตกลง",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-svc" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-svc)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-[#00B4D8]/20 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/30">
              บริการของเรา
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              โซลูชันไอทีครบวงจร
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              ครอบคลุมทุกความต้องการด้านโครงสร้างพื้นฐานไอที ตั้งแต่ Database, Server, Cloud ไปจนถึง Disaster Recovery
            </p>
          </div>
        </section>

        {/* Services grid */}
        <ServicesGrid compact />

        {/* Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/20">
                กระบวนการทำงาน
              </span>
              <h2 className="text-3xl font-bold text-[#0A2463]">วิธีที่เราทำงานร่วมกับคุณ</h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#00B4D8]/20 via-[#00B4D8]/60 to-[#00B4D8]/20 z-0" />

              {process.map((step) => (
                <div key={step.step} className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A2463] to-[#00B4D8] mx-auto mb-5 flex items-center justify-center shadow-lg shadow-[#0A2463]/20">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="font-bold text-[#0A2463] text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA section */}
        <section className="py-20 gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0A2463] to-[#1E3A5F] rounded-3xl p-10 md:p-14 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">SLA ที่เราการันตี</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                {[
                  { value: "99.9%", label: "Uptime Guarantee" },
                  { value: "< 4h", label: "Response Time" },
                  { value: "24/7", label: "Support Coverage" },
                  { value: "< 2h", label: "Critical Fix Time" },
                ].map((sla) => (
                  <div key={sla.label}>
                    <p className="text-4xl font-bold text-[#00B4D8] mb-2">{sla.value}</p>
                    <p className="text-white/70 text-sm">{sla.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00B4D8] text-white rounded-xl font-semibold hover:bg-[#0096B7] transition-all shadow-lg"
              >
                ขอรับข้อเสนอพิเศษ
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LineButton />
    </>
  );
}
