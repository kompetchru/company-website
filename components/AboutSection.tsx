import Link from "next/link";

const values = [
  {
    icon: "🏆",
    title: "ความเป็นเลิศ",
    desc: "มุ่งมั่นส่งมอบบริการที่ดีที่สุดในทุกโปรเจกต์",
  },
  {
    icon: "🤝",
    title: "ความน่าเชื่อถือ",
    desc: "ตรงต่อเวลา โปร่งใส และยึดมั่นในคำมั่นสัญญา",
  },
  {
    icon: "🔒",
    title: "ความปลอดภัย",
    desc: "มาตรฐาน ISO 27001 ปกป้องข้อมูลองค์กรของคุณ",
  },
  {
    icon: "🚀",
    title: "นวัตกรรม",
    desc: "ใช้เทคโนโลยีล่าสุดเพื่อสร้างความได้เปรียบแข่งขัน",
  },
];

const milestones = [
  { year: "2009", event: "ก่อตั้งบริษัทในกรุงเทพมหานคร" },
  { year: "2013", event: "ได้รับการรับรอง ISO 27001" },
  { year: "2017", event: "ขยายบริการ Cloud Solutions" },
  { year: "2022", event: "เปิดสาขาใหม่ที่เชียงใหม่และขอนแก่น" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/20">
              เกี่ยวกับเรา
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2463] leading-tight mb-6">
              พันธมิตรด้านไอทีที่คุณ
              <br />
              <span className="text-[#00B4D8]">ไว้วางใจได้</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              บริษัท Xyber Tech Solution จำกัด ก่อตั้งในปี 2552 ด้วยวิสัยทัศน์ที่ชัดเจนในการเป็น
              พันธมิตรด้านไอทีที่ครบวงจรและน่าเชื่อถือสำหรับองค์กรธุรกิจในประเทศไทย
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              ทีมผู้เชี่ยวชาญกว่า 120 คน พร้อมประสบการณ์ในอุตสาหกรรมไอทีมากกว่า 15 ปี
              ทำให้เราสามารถให้คำแนะนำและโซลูชันที่ตอบโจทย์ความต้องการของธุรกิจได้อย่างแม่นยำ
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2463] text-white rounded-xl font-semibold hover:bg-[#1E3A5F] transition-colors shadow-md"
            >
              อ่านเพิ่มเติม
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-[#0A2463] to-[#1E3A5F] rounded-2xl p-8 text-white">
            <h3 className="font-bold text-lg mb-6 text-[#00B4D8]">เส้นทางของเรา</h3>
            <div className="relative pl-6 border-l-2 border-[#00B4D8]/30 space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-[#00B4D8] border-2 border-[#0A2463]" />
                  <p className="text-[#00B4D8] font-bold text-sm">{m.year}</p>
                  <p className="text-white/80 text-sm mt-0.5">{m.event}</p>
                </div>
              ))}
            </div>

            {/* Cert badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
              {["ISO 27001", "VMware Partner"].map((cert) => (
                <span key={cert} className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-white/80">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-[#0A2463] text-center mb-10">คุณค่าที่เรายึดมั่น</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#00B4D8]/30 hover:bg-[#00B4D8]/5 transition-all duration-200 card-hover"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-[#0A2463] mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
