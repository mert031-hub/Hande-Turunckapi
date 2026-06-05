"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Yıllık Klinik Deneyim" },
  { value: "3", label: "Terapi Yaklaşımı" },
  { value: "∞", label: "Online Terapi Seansı" },
  { value: "100%", label: "Gizlilik Güvencesi" },
];

export default function StatsStrip() {
  return (
    <div className="bg-[#7A9C75] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/75 text-sm leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
