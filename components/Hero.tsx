"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HERO_IMAGE = "/images/ailedanis.webp";

const badges = [
  "Klinik Psikolog",
  "Çocuk · Ergen · Yetişkin",
  "Online Danışmanlık",
  "EMDR · BDT · Oyun Terapisi",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Terapi odası"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D2B1F]/75 via-[#3D2B1F]/55 to-[#5C7A58]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/50 via-transparent to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#7A9C75]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-[#C17D5F]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#A8C4A3] animate-pulse" />
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Afyonkarahisar · Online Terapi Mevcut
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6"
          >
            Çocuk, Ergen ve Yetişkinler
            <br />
            <span className="text-[#C4D9C1]">İçin Güvenli</span>{" "}
            Terapi Alanı
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
          >
            Afyonkarahisar&apos;da yüz yüze ve online bireysel terapi. Kendi
            hızınızda, kendi hikâyenizle — yargısız, güvenli bir alanda ilerleme
            yolculuğunuzda yanınızdayım.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#7A9C75] hover:bg-[#5C7A58] text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Randevu Al
            </a>
            <button
              onClick={() => {
                document
                  .querySelector("#hizmetler")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm"
            >
              Hizmetleri İncele
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
