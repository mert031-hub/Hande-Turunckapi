"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Clock, Heart, Award } from "lucide-react";

const ABOUT_IMAGE = "/images/HocaPp.jpg";
const OFFICE_IMAGE = "/images/beklemeodasi.jpg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Klinik Psikoloji Yüksek Lisansı",
    desc: "Psikoloji lisansının ardından klinik psikoloji alanında yüksek lisans",
  },
  {
    icon: Clock,
    title: "4 Yıllık Klinik Deneyim",
    desc: "Aktif olarak çocuk, ergen ve yetişkin danışan görüşmeleri",
  },
  {
    icon: Heart,
    title: "Çocuk · Ergen · Yetişkin",
    desc: "Her yaş grubuna özel yaklaşım ve uygulama alanı",
  },
  {
    icon: Award,
    title: "EMDR · BDT · Oyun Terapisi",
    desc: "Kanıta dayalı terapi yöntemlerinde özel eğitim ve sertifikasyon",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="hakkinda" className="py-20 lg:py-28 bg-[#FAF7F2]">
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
            Hakkımda
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F] leading-tight">
            Klinik Psikolog olarak<br className="hidden sm:block" /> yanınızdayım
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src={ABOUT_IMAGE}
                alt="Uzm. Kl. Psk. Hande Turunçkapı"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/20 via-transparent to-transparent" />
            </div>
            {/* Floating office card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 w-40 sm:w-48 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] hidden sm:block"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={OFFICE_IMAGE}
                  alt="Terapi odası"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </motion.div>
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-[#7A9C75] text-white rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
            >
              <p className="text-2xl font-bold leading-none">4+</p>
              <p className="text-xs font-medium mt-0.5 opacity-90">Yıllık Deneyim</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#6B4C38] text-lg leading-relaxed mb-5">
                Ben <strong className="text-[#3D2B1F]">Klinik Psikolog Hande Turunçkapı</strong>.
                Psikoloji bölümünden mezun olduktan sonra klinik psikoloji alanında yüksek
                lisansımı tamamladım.
              </p>
              <p className="text-[#6B4C38] leading-relaxed mb-5">
                Günümüzde ruh sağlığı alanında kendinize yönelik bir terapi sürecine
                başlamak istediğinizde, çalıştığınız kişinin yetkinliklerini sorgulamak
                son derece önemlidir. Ben de bu bilinçle hareket ediyorum; her danışanın
                kendine has hikâyesine saygıyla yaklaşıyor, birlikte bir yol haritası
                oluşturuyoruz.
              </p>
              <p className="text-[#6B4C38] leading-relaxed mb-8">
                Alanda aktif olarak 4 yıllık bir süreçte danışan görüşmeleri yürütmekteyim.
                Kendimi geliştirdiğim ve geliştirmeye devam ettiğim pek çok alanda
                bilgi ve deneyimlerimi sizlerle paylaşmaktan, birlikte büyümek ve
                öğrenmekten mutluluk duyuyorum. Çocuk, ergen ve yetişkin alanında
                bilgilendirici çalışmalar yapmak için sabırsızlanıyorum.
              </p>

              {/* Instagram note */}
              <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-[#F0EBE3] border border-[#E8DDD0]">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f9c74f] via-[#f3722c] to-[#4361ee]">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#3D2B1F] font-medium">Instagram&apos;da Takip Et</p>
                  <a
                    href="https://instagram.com/psk.handeturunckapikasalak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#7A9C75] hover:text-[#5C7A58] font-medium transition-colors"
                  >
                    @psk.handeturunckapikasalak
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Credential grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white border border-[#E8DDD0] border-l-[3px] border-l-[#A8C4A3] hover:shadow-md transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 text-[#7A9C75] mb-2" />
                  <p className="text-sm font-semibold text-[#3D2B1F] mb-1">{item.title}</p>
                  <p className="text-xs text-[#9B7B68] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
