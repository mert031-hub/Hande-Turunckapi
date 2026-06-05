"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Laptop,
  Calendar,
  MessageCircle,
  User,
  Users,
  Brain,
  Gamepad2,
  Heart,
  ClipboardList,
  Smile,
  Layers,
  RefreshCw,
} from "lucide-react";

// Image mapping — replace filenames as needed
const SERVICE_IMAGES = {
  online: "/images/onlineterapi.jpg",
  bireysel: "/images/bireyselterapi2.webp",
  cocuk: "/images/cocukergenterapi.jpg",
  aile: "/images/Annebabaegitim copy.jpg",
  oyun: "/images/oyunterapisi.jpg",
  test: "/images/onlinedanis.png",
};

const mainServices = [
  {
    id: "online",
    image: SERVICE_IMAGES.online,
    icon: Laptop,
    title: "Online Terapi",
    desc: "Nerede olursanız olun güvenli bir dijital ortamda bireysel terapi seansları.",
  },
  {
    id: "bireysel",
    image: SERVICE_IMAGES.bireysel,
    icon: User,
    title: "Bireysel Terapi",
    desc: "Yetişkin bireyler için özelleştirilmiş, derinlemesine bireysel terapi süreci.",
  },
  {
    id: "cocuk",
    image: SERVICE_IMAGES.cocuk,
    icon: Smile,
    title: "Çocuk ve Ergen Terapisi",
    desc: "Çocuk ve ergenlerin duygusal gelişimi ve zorluklarıyla başa çıkmaları için destek.",
  },
  {
    id: "oyun",
    image: SERVICE_IMAGES.oyun,
    icon: Gamepad2,
    title: "Oyun Terapisi",
    desc: "Çocukların kendilerini en rahat ifade edebildikleri dil olan oyun aracılığıyla terapi.",
  },
  {
    id: "aile",
    image: SERVICE_IMAGES.aile,
    icon: Users,
    title: "Anne-Baba Eğitimi",
    desc: "Ebeveynlere çocuk gelişimi ve davranış yönetimi konularında danışmanlık.",
  },
  {
    id: "danismanlik",
    image: SERVICE_IMAGES.test,
    icon: MessageCircle,
    title: "Online Danışmanlık",
    desc: "Kısa süreli, çözüm odaklı online danışmanlık görüşmeleri.",
  },
];

const specializedApproaches = [
  {
    icon: Brain,
    title: "EMDR Terapi",
    desc: "Travma işleme ve psikolojik rahatsızlıkların tedavisinde kanıta dayalı göz hareketi yöntemi.",
    color: "bg-[#EDE4D7]",
    accent: "text-[#C17D5F]",
  },
  {
    icon: Layers,
    title: "Bilişsel Davranışçı Terapi",
    desc: "Düşünce ve davranış örüntülerini dönüştürerek duygusal iyilik haline katkıda bulunur.",
    color: "bg-[#E8F0E7]",
    accent: "text-[#5C7A58]",
  },
  {
    icon: RefreshCw,
    title: "Çözüm Odaklı Terapi",
    desc: "Sorunlara değil çözümlere odaklanarak kişinin kendi kaynaklarını harekete geçirir.",
    color: "bg-[#F0EBE3]",
    accent: "text-[#7A9C75]",
  },
  {
    icon: ClipboardList,
    title: "Psikoloji Randevusu",
    desc: "İhtiyaçlarınıza uygun terapi sürecini planlamak için ilk görüşme ve değerlendirme.",
    color: "bg-[#EDE4D7]",
    accent: "text-[#C17D5F]",
  },
];

const assessmentTests = [
  "AGTE – Ankara Gelişim Tarama Envanteri",
  "Bender Gestalt Motor Algı Testi",
  "Metropolitan Okul Olgunluğu Testi",
  "MMPI – Minnesota Çok Yönlü Kişilik Envanteri",
  "Peabody Resim Kelime Eşleştirme Testi",
  "Beck Depresyon Ölçeği",
  "Çocuk Gelişim Testi",
  "MOXO Dikkat Testi",
];

const otherServices = [
  "Ağlama ve Öfke Nöbetleri",
  "Davranış Bozuklukları",
  "Yetişkin Terapisi",
  "Ergen Terapisi",
  "Çocuk ve Ergen Psikolojisi",
  "Normal Randevu",
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-[#F0EBE3]">
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
            Hizmetler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F] mb-4">
            Nereden Başlayacağınızı<br className="hidden sm:block" /> Birlikte Buluruz
          </h2>
          <p className="text-[#6B4C38] max-w-xl mx-auto leading-relaxed">
            Hangi konuda destek istediğinizi bilmiyor olmanız sorun değil.
            İlk görüşmede birlikte değerlendiririz.
          </p>
        </motion.div>

        {/* Main service cards — image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="w-4 h-4 text-[#C4D9C1]" />
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized approaches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-[#3D2B1F] mb-6 text-center">
            Terapi Yaklaşımları
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedApproaches.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl ${item.color} border border-white/60 hover:shadow-md transition-all duration-200`}
              >
                <item.icon className={`w-6 h-6 mb-3 ${item.accent}`} />
                <h4 className="font-semibold text-[#3D2B1F] mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-[#6B4C38] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assessment tests + other services */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 border border-[#E8DDD0] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#EDE4D7] flex items-center justify-center">
                <ClipboardList className="w-4 h-4 text-[#C17D5F]" />
              </div>
              <h3 className="font-bold text-[#3D2B1F]">Değerlendirme ve Testler</h3>
            </div>
            <ul className="space-y-2.5">
              {assessmentTests.map((test) => (
                <li key={test} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8C4A3] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#6B4C38] leading-relaxed">{test}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 border border-[#E8DDD0] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#E8F0E7] flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#7A9C75]" />
              </div>
              <h3 className="font-bold text-[#3D2B1F]">Diğer Hizmetler</h3>
            </div>
            <ul className="space-y-2.5">
              {otherServices.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4D9C1] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#6B4C38] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6 pt-5 border-t border-[#E8DDD0]">
              <p className="text-sm text-[#9B7B68] mb-3">
                Hangi hizmetin size uygun olduğundan emin değil misiniz?
              </p>
              <a
                href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A9C75] hover:text-[#5C7A58] transition-colors"
              >
                Ücretsiz bilgi alın
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
