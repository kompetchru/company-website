"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would connect to backend/email service here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0A2463] mb-3">ส่งข้อความสำเร็จ!</h3>
        <p className="text-gray-500 max-w-sm">
          ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
            ชื่อ - นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="กรุณากรอกชื่อ-นามสกุล"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all placeholder:text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
            บริษัท / องค์กร
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="ชื่อบริษัทหรือองค์กร"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
            อีเมล <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@company.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all placeholder:text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
            เบอร์โทรศัพท์ <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="08X-XXX-XXXX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all placeholder:text-gray-300"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
          บริการที่สนใจ
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all text-gray-600 bg-white"
        >
          <option value="">-- เลือกบริการ --</option>
          <option value="database">ระบบฐานข้อมูล (Database Solutions)</option>
          <option value="server">โครงสร้างพื้นฐานเซิร์ฟเวอร์ (Server Infrastructure)</option>
          <option value="cloud">บริการคลาวด์ (Cloud Services)</option>
          <option value="dr">ระบบกู้คืนภัยพิบัติ (Disaster Recovery)</option>
          <option value="other">บริการอื่นๆ</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A2463] mb-1.5">
          รายละเอียดเพิ่มเติม <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="กรุณาอธิบายความต้องการหรือปัญหาของคุณ..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/40 focus:border-[#00B4D8] transition-all resize-none placeholder:text-gray-300"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-[#0A2463] to-[#1E3A5F] text-white rounded-xl font-semibold text-base hover:from-[#00B4D8] hover:to-[#0096B7] transition-all duration-300 shadow-lg hover:shadow-[#00B4D8]/30 hover:-translate-y-0.5"
      >
        ส่งข้อความถึงเรา
      </button>

      <p className="text-xs text-gray-400 text-center">
        ข้อมูลของคุณจะถูกเก็บรักษาอย่างเป็นความลับและปลอดภัย
      </p>
    </form>
  );
}
