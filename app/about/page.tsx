import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import LineButton from "@/components/LineButton";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "บริษัท Xyber Tech Solution จำกัด ก่อตั้งปี 2552 ให้บริการด้านไอทีครบวงจรกว่า 15 ปี ด้วยทีมผู้เชี่ยวชาญกว่า 120 คน",
};

const team = [
  { name: "คุณสมชาย วงศ์เจริญ", role: "ประธานกรรมการบริหาร (CEO)", exp: "20+ ปี" },
  { name: "คุณสุภาพร แสงทอง", role: "ผู้อำนวยการฝ่ายเทคนิค (CTO)", exp: "18+ ปี" },
  { name: "คุณวิชัย นาคประเสริฐ", role: "ผู้จัดการโครงการอาวุโส", exp: "15+ ปี" },
  { name: "คุณปิยะ รัตนมณี", role: "สถาปนิกระบบคลาวด์", exp: "12+ ปี" },
];

const certifications = [
  { name: "ISO 27001:2022", desc: "มาตรฐานการจัดการความปลอดภัยสารสนเทศ" },
  { name: "VMware Partner", desc: "พันธมิตรด้าน Virtualization จาก VMware" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-about" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-about)" />
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-[#00B4D8]/20 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/30">
              เกี่ยวกับเรา
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              รู้จัก Xyber Tech Solution
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              มากกว่า 15 ปีในการสร้างโครงสร้างพื้นฐานไอทีที่แข็งแกร่งให้กับองค์กรชั้นนำในประเทศไทย
            </p>
          </div>
        </section>

        {/* Main about content */}
        <AboutSection />

        {/* Team */}
        <section className="py-24 gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/20">
                ทีมผู้นำ
              </span>
              <h2 className="text-3xl font-bold text-[#0A2463]">ผู้เชี่ยวชาญของเรา</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="card-hover bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0A2463] to-[#00B4D8] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(2)}
                  </div>
                  <h3 className="font-bold text-[#0A2463] text-sm mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{member.role}</p>
                  <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-semibold px-3 py-1 rounded-full border border-[#00B4D8]/20">
                    ประสบการณ์ {member.exp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">การรับรองและพันธมิตร</h2>
              <p className="text-gray-500">เรามุ่งมั่นรักษามาตรฐานระดับสากลในทุกบริการ</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-[#00B4D8]/30 hover:bg-[#00B4D8]/5 transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A2463] to-[#1E3A5F] mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0A2463] text-sm mb-2">{cert.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LineButton />
    </>
  );
}
