"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Pazartesi", hours: "11:00 – 19:00", open: true },
  { day: "Salı", hours: "11:00 – 19:00", open: true },
  { day: "Çarşamba", hours: "11:00 – 19:00", open: true },
  { day: "Perşembe", hours: "11:00 – 19:00", open: true },
  { day: "Cuma", hours: "11:00 – 19:00", open: true },
  { day: "Cumartesi", hours: "11:00 – 17:00", open: true },
  { day: "Pazar", hours: "Kapalı", open: false },
];

const dayAbbr: Record<string, string> = {
  Pazartesi: "Pzt",
  Salı: "Sal",
  Çarşamba: "Çar",
  Perşembe: "Per",
  Cuma: "Cum",
  Cumartesi: "Cts",
  Pazar: "Paz",
};

export default function WorkingHours() {
  const today = new Date().toLocaleDateString("tr-TR", { weekday: "long" });
  const todayNormalized = today.charAt(0).toUpperCase() + today.slice(1).toLowerCase();

  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7A9C75] mb-3">
            Çalışma Saatleri
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2B1F]">
            Sizi Ne Zaman Karşılayabilirim?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl border border-[#E8DDD0] shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#3D2B1F] px-6 py-5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#C4D9C1]" />
            </div>
            <div>
              <p className="text-white font-semibold">Uzm. Kl. Psk. Hande Turunçkapı</p>
              <p className="text-white/60 text-sm">Afyonkarahisar</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="divide-y divide-[#F0EBE3]">
            {schedule.map((item, i) => {
              const isToday =
                item.day.toLowerCase() === todayNormalized.toLowerCase();

              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    isToday ? "bg-[#E8F0E7]" : "hover:bg-[#FAFAF8]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 text-xs font-bold uppercase tracking-wide ${
                        isToday ? "text-[#5C7A58]" : "text-[#D9CCB9]"
                      }`}
                    >
                      {dayAbbr[item.day]}
                    </span>
                    <span
                      className={`font-medium ${
                        isToday ? "text-[#3D2B1F]" : "text-[#6B4C38]"
                      }`}
                    >
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="px-2 py-0.5 rounded-full bg-[#7A9C75] text-white text-xs font-semibold">
                        Bugün
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.open ? (
                      <span
                        className={`font-semibold text-sm ${
                          isToday ? "text-[#5C7A58]" : "text-[#3D2B1F]"
                        }`}
                      >
                        {item.hours}
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-[#D9CCB9]">
                        {item.hours}
                      </span>
                    )}
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.open ? "bg-[#7A9C75]" : "bg-[#D9CCB9]"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#F0EBE3]">
            <p className="text-xs text-[#9B7B68] text-center">
              Online terapi seansları için esneklik sağlanabilir. Detaylar için iletişime geçin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
