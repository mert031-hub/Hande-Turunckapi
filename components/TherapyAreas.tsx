"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Image mapping
const AREA_IMAGES = {
  child: "/images/cocukdanis.jpg",
  adolescent: "/images/ergen.jpg",
  adult: "/images/yetiskindanis.jpg",
  emdr: "/images/photo1.jpg",
  cbt: "/images/beklemeodasi2.jpg",
  play: "/images/oyunterapisi2.jpg",
  online: "/images/oyunodasi2.jpg",
};

const areas = [
  {
    image: AREA_IMAGES.child,
    title: "Çocuk Terapisi",
    tag: "4–12 yaş",
    desc: "Çocukların duygusal ve davranışsal zorluklarını oyun, hikâye ve yaratıcı tekniklerle ele alıyoruz. Her çocuk kendine özgüdür; terapi süreci de ona özel şekillenir.",
  },
  {
    image: AREA_IMAGES.adolescent,
    title: "Ergen Terapisi",
    tag: "13–18 yaş",
    desc: "Ergenlik dönemi bazen hem çocuk hem ebeveyn için zorlayıcı olabilir. Bu geçiş sürecinde ergeni anlamak ve desteklemek için güvenli bir alan sunuyoruz.",
  },
  {
    image: AREA_IMAGES.adult,
    title: "Yetişkin Terapisi",
    tag: "18+ yaş",
    desc: "Kaygı, depresyon, ilişki sorunları, iş stresi veya yaşam değişiklikleri… Yetişkin terapisinde kendi hikayenizi yeniden yazmak için sizi destekliyoruz.",
  },
  {
    image: AREA_IMAGES.emdr,
    title: "EMDR Terapi",
    tag: "Travma · Kaygı",
    desc: "Göz hareketleriyle duyarsızlaştırma ve yeniden işleme yöntemi olan EMDR, travmatik anıların işlenmesinde ve psikolojik rahatsızlıkların azaltılmasında etkili bir yöntemdir.",
  },
  {
    image: AREA_IMAGES.cbt,
    title: "Bilişsel Davranışçı Terapi",
    tag: "BDT",
    desc: "Düşüncelerinizin duygularınızı, duygularınızın davranışlarınızı nasıl etkilediğini keşfediyoruz. BDT ile olumsuz düşünce kalıplarını dönüştürüyoruz.",
  },
  {
    image: AREA_IMAGES.play,
    title: "Oyun Terapisi",
    tag: "Çocuk Merkezli",
    desc: "Çocuklar duygu ve düşüncelerini en iyi oyunla ifade eder. Çocuk merkezli oyun terapisi ile çocuğun kendi hızında iyileşmesi desteklenir.",
  },
  {
    image: AREA_IMAGES.online,
    title: "Online Terapi",
    tag: "Her Yerden",
    desc: "Coğrafi sınır tanımadan, bulunduğunuz yerden güvenli ve gizli online terapi seansları. Afyonkarahisar dışında yaşayanlar için de erişilebilir destek.",
  },
];

export default function TherapyAreas() {
  return (
    <section id="yaklasimlar" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7A9C75] mb-3">
            Terapi Alanları
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F] mb-4">
            Her Hikâye Farklıdır,<br className="hidden sm:block" /> Her Süreç de
          </h2>
          <p className="text-[#6B4C38] max-w-lg mx-auto leading-relaxed">
            Çocuğunuzun oyun odasından yetişkin bireysel seanslarına —
            her yaş grubuna ve ihtiyaca özel yaklaşımla yanınızdayım.
          </p>
        </motion.div>

        {/* Featured card (first) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 cursor-default"
          >
            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-80">
              <Image
                src={areas[0].image}
                alt={areas[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#7A9C75]/80 backdrop-blur-sm text-xs font-medium text-white mb-3">
                {areas[0].tag}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {areas[0].title}
              </h3>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-md">
                {areas[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Second card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 cursor-default"
          >
            <div className="relative h-80 lg:h-80">
              <Image
                src={areas[1].image}
                alt={areas[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C17D5F]/80 backdrop-blur-sm text-xs font-medium text-white mb-3">
                {areas[1].tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{areas[1].title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{areas[1].desc}</p>
            </div>
          </motion.div>
        </div>

        {/* Remaining cards grid — 4-col layout, balanced spans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.slice(2).map((area, i) => {
            // Row 1: span-2, span-1, span-1  → Row 2: span-2, span-2
            const spanClass =
              i === 0 ? "lg:col-span-2" :
              i === 1 ? "lg:col-span-1" :
              i === 2 ? "lg:col-span-1" :
              i === 3 ? "lg:col-span-2" :
              "lg:col-span-2";
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-default ${spanClass}`}
              >
                <div className="relative h-52 sm:h-60">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white/90 mb-2">
                    {area.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1">{area.title}</h3>
                  <p className="text-xs text-white/75 leading-relaxed line-clamp-2">{area.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3D2B1F] text-white font-semibold hover:bg-[#6B4C38] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Randevu Almak İçin İletişime Geçin
          </a>
        </motion.div>
      </div>
    </section>
  );
}
