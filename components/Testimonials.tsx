"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    initial: "D",
    initials: "D.",
    text: "Hande hanımla tanışmak en büyük şansımdı. O odada sahiden bir ışıkla aydınlandığınızı hissediyorsunuz. Kaygı bozukluğu ile gittim ve ruhuma dokunan terapi süreci ile daha sakin ve emin biri olarak dünyaya devam ediyorum.",
    date: "21 Nisan 2026",
    service: "Bilişsel Davranışçı Terapi",
    verified: true,
  },
  {
    initial: "S",
    initials: "S.",
    text: "Çocuğumla ilgili kaygı, korku problemi ile ilgili kendisine başvurdum. Kendisi çok kibar, nazik ve sıcak bir insan. Kızımla da sıcak bir iletişim kurduğunu gördüm. Sorunlarımız bitene kadar devam edeceğiz seanslara.",
    date: "27 Ocak 2026",
    service: "Çocuk ve Ergen Terapisi",
    verified: true,
  },
  {
    initial: "Y",
    initials: "Y.",
    text: "Çocuğumda kaygı bozukluğu vardı. Hande hocam sayesinde bu kaygılarımız kısa sürede azaldı. Kızım severek gidiyor her seansa. İyi ki tanımışız.",
    date: "9 Aralık 2025",
    service: "Bireysel Terapi",
    verified: true,
  },
  {
    initial: "S",
    initials: "S.U.",
    text: "Kızımın korkusunun ne olduğunu anlamak için başvurmuştuk Hande hocama. İlgisi, güler yüzü, sevecen tavırlarıyla Hande ablam oldu. İyi ki karşılaşmışız.",
    date: "9 Aralık 2025",
    service: "Ağlama ve Öfke Nöbetleri",
    verified: true,
  },
  {
    initial: "M",
    initials: "M.B.",
    text: "Samimi, sıcak ve içten bir görüşme gerçekleştirdik. Çocuğumla ilgili endişelerimde içim rahatlamış bir şekilde ayrıldım.",
    date: "Aralık 2025",
    service: "Çocuk Değerlendirme",
    verified: true,
  },
];

const avatarColors = [
  "bg-[#7A9C75]",
  "bg-[#C17D5F]",
  "bg-[#9B7B68]",
  "bg-[#5C7A58]",
  "bg-[#A66447]",
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 lg:py-28 bg-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7A9C75] mb-3">
            Danışan Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D2B1F] mb-4">
            Danışanlarımın Sözleriyle
          </h2>
          <p className="text-[#6B4C38] max-w-lg mx-auto leading-relaxed">
            Aşağıdaki yorumlar gerçek danışan deneyimlerinden alınmıştır.
            Her terapi süreci kişiye özeldir.
          </p>
        </motion.div>

        {/* Stars / rating visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-[#C17D5F]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-[#9B7B68]">Doğrulanmış danışan yorumları</p>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl p-6 border border-[#E8DDD0] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-[#D9CCB9] mb-3 flex-shrink-0" />

              {/* Text */}
              <p className="text-[#6B4C38] text-sm leading-relaxed flex-1 mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-3.5 h-3.5 text-[#C17D5F]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F0EBE3]">
                <div
                  className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {review.initial}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#3D2B1F]">{review.initials}</p>
                  <p className="text-xs text-[#9B7B68]">{review.service}</p>
                </div>
                <div className="ml-auto text-right flex-shrink-0">
                  <p className="text-xs text-[#9B7B68]">{review.date}</p>
                  {review.verified && (
                    <p className="text-xs text-[#7A9C75] font-medium mt-0.5">✓ Doğrulandı</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-[#9B7B68] max-w-md mx-auto leading-relaxed"
        >
          Yorumlar danışan deneyimlerini yansıtır; her terapi süreci kişiye özeldir
          ve bireysel sonuçlar farklılık gösterebilir.
        </motion.p>
      </div>
    </section>
  );
}
