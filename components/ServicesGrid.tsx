import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "ระบบฐานข้อมูล",
    subtitle: "Database Solutions",
    description:
      "ออกแบบ วางแผน และบริหารระบบฐานข้อมูลระดับองค์กร รองรับ Oracle, MS SQL, PostgreSQL และ MySQL พร้อม Performance Tuning และ High Availability",
    features: ["Database Design & Architecture", "Performance Optimization", "High Availability Clustering", "24/7 DBA Support"],
    color: "from-blue-500 to-blue-700",
    light: "bg-blue-50",
    border: "border-blue-100",
    accent: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "โครงสร้างพื้นฐานเซิร์ฟเวอร์",
    subtitle: "Server Infrastructure",
    description:
      "ให้บริการจัดหา ติดตั้ง และบริหารจัดการเซิร์ฟเวอร์ทุกประเภท ทั้ง Rack, Blade และ Tower Server จาก Dell, HP และ IBM พร้อมระบบ Virtualization",
    features: ["Server Procurement & Setup", "VMware / Hyper-V Virtualization", "Storage Area Network (SAN)", "Preventive Maintenance"],
    color: "from-violet-500 to-violet-700",
    light: "bg-violet-50",
    border: "border-violet-100",
    accent: "text-violet-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "บริการคลาวด์",
    subtitle: "Cloud Services",
    description:
      "วางแผนและดำเนินการย้ายระบบสู่คลาวด์อย่างราบรื่น รองรับ AWS, Azure และ Google Cloud พร้อมบริการ Hybrid Cloud และ Multi-Cloud Strategy",
    features: ["Cloud Migration Strategy", "AWS / Azure / GCP", "Hybrid Cloud Architecture", "Cost Optimization"],
    color: "from-cyan-500 to-[#0096B7]",
    light: "bg-cyan-50",
    border: "border-cyan-100",
    accent: "text-cyan-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "ระบบกู้คืนภัยพิบัติ",
    subtitle: "Disaster Recovery",
    description:
      "ออกแบบและติดตั้งระบบ DR ที่ครอบคลุม รับประกัน RTO และ RPO ตามความต้องการของธุรกิจ พร้อม DR Drill และ Business Continuity Planning",
    features: ["DR Site Design & Setup", "Backup & Replication", "RTO/RPO Management", "DR Drill & Testing"],
    color: "from-emerald-500 to-emerald-700",
    light: "bg-emerald-50",
    border: "border-emerald-100",
    accent: "text-emerald-600",
  },
];

interface ServicesGridProps {
  compact?: boolean;
}

export default function ServicesGrid({ compact = false }: ServicesGridProps) {
  return (
    <section className={`${compact ? "py-16" : "py-24"} gradient-section`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center mb-16">
            <span className="inline-block bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 border border-[#00B4D8]/20">
              บริการของเรา
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2463] mb-4">
              โซลูชันไอทีครบวงจร
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              ครอบคลุมทุกความต้องการด้านโครงสร้างพื้นฐานไอทีสำหรับองค์กรธุรกิจทุกขนาด
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.subtitle}
              className={`card-hover bg-white rounded-2xl border ${service.border} p-6 flex flex-col shadow-sm`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0A2463] font-bold text-lg mb-0.5">{service.title}</h3>
              <p className={`${service.accent} text-xs font-semibold mb-3`}>{service.subtitle}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className={`mt-0.5 ${service.accent}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className={`text-sm font-semibold ${service.accent} flex items-center gap-1 group`}
              >
                ดูรายละเอียด
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
