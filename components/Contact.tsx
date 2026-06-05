"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.304695823217!2d30.539222776051158!3d38.75671495499276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf178fc8dd3cdf%3A0x60ccf32476313c56!2sUzm.%20Kl.%20Psk.%20Hande%20Turun%C3%A7kap%C4%B1!5e0!3m2!1str!2str!4v1780646806215!5m2!1str!2str";

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#A8C4A3] mb-3">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bir Adım Atın
          </h2>
          <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
            Sormak istediğiniz her şey için, randevu almak veya bilgi edinmek için
            iletişime geçebilirsiniz. Size dönmekten memnuniyet duyarım.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                <p className="text-white font-semibold">0534 367 57 75</p>
                <p className="text-white/50 text-xs mt-0.5">Hızlı mesaj gönderin</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:05343675775"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7A9C75] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">Telefon</p>
                <p className="text-white font-semibold">0534 367 57 75</p>
                <p className="text-white/50 text-xs mt-0.5">Doğrudan arayın</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/psk.handeturunckapikasalak"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9c74f] via-[#f3722c] to-[#4361ee] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">Instagram</p>
                <p className="text-white font-semibold text-sm">@psk.handeturunckapikasalak</p>
                <p className="text-white/50 text-xs mt-0.5">Bilgi paylaşımları için takip edin</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#C17D5F] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-1">Adres</p>
                <p className="text-white text-sm leading-relaxed">
                  Dumlupınar Mah. Dumlupınar 2. Cad.
                  <br />
                  No:31 D:7 K:4
                  <br />
                  <span className="text-white/70">Afyonkarahisar Merkez</span>
                </p>
              </div>
            </div>

            {/* Hours mini */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#C4D9C1]" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-2">Çalışma Saatleri</p>
                <div className="space-y-1">
                  <p className="text-white text-sm">Pzt – Cum: <span className="font-semibold">11:00 – 19:00</span></p>
                  <p className="text-white text-sm">Cumartesi: <span className="font-semibold">11:00 – 17:00</span></p>
                  <p className="text-white/50 text-sm">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="map-container w-full h-64 sm:h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Uzm. Kl. Psk. Hande Turunçkapı Konum"
              />
            </div>

            {/* Direction button */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://maps.google.com/?q=Uzm.+Kl.+Psk.+Hande+Turun%C3%A7kap%C4%B1,+Afyonkarahisar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Yol Tarifi Al
              </a>
              <a
                href="https://wa.me/905343675775?text=Merhaba%2C%20terapi%2Frandevu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#7A9C75] text-white text-sm font-semibold hover:bg-[#5C7A58] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Randevu Al
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
