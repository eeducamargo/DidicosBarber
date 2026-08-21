import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import morumbi6 from "@/assets/morumbi-6.png.asset.json";
import morumbi7 from "@/assets/morumbi-7.png.asset.json";
import morumbi8 from "@/assets/morumbi-8.png.asset.json";
import morumbi9 from "@/assets/morumbi-9.png.asset.json";
import morumbi10 from "@/assets/morumbi-10.png.asset.json";
import morumbi11 from "@/assets/morumbi-11.png.asset.json";
import morumbi12 from "@/assets/morumbi-12.png.asset.json";
import morumbi13 from "@/assets/morumbi-13.png.asset.json";
import embu1 from "@/assets/embu-1.png.asset.json";
import embu2 from "@/assets/embu-2.png.asset.json";
import embu3 from "@/assets/embu-3.png.asset.json";
import embu4 from "@/assets/embu-4.png.asset.json";
import embu5 from "@/assets/embu-5.png.asset.json";
import embu6 from "@/assets/embu-6.png.asset.json";
import embu7 from "@/assets/embu-7.png.asset.json";
import embu8 from "@/assets/embu-8.png.asset.json";
import cortePortal1 from "@/assets/corte-portal-1.png.asset.json";
import cortePortal2 from "@/assets/corte-portal-2.png.asset.json";
import cortePortal3 from "@/assets/corte-portal-3.png.asset.json";
import cortePortal4 from "@/assets/corte-portal-4.png.asset.json";
import cortePortal5 from "@/assets/corte-portal-5.png.asset.json";
import corteEmbu1 from "@/assets/corte-embu-1.png.asset.json";
import corteEmbu2 from "@/assets/corte-embu-2.png.asset.json";
import corteEmbu3 from "@/assets/corte-embu-3.png.asset.json";
import corteEmbu4 from "@/assets/corte-embu-4.png.asset.json";
import corteEmbu5 from "@/assets/corte-embu-5.png.asset.json";
import cortePortal6 from "@/assets/corte-portal-6.png.asset.json";
import cortePortal7 from "@/assets/corte-portal-7.png.asset.json";
import cortePortal8 from "@/assets/corte-portal-8.png.asset.json";
import corteEmbu6 from "@/assets/corte-embu-6.png.asset.json";
import corteEmbu7 from "@/assets/corte-embu-7.png.asset.json";
import corteEmbu8 from "@/assets/corte-embu-8.png.asset.json";

const fotosMorumbi = [
  cortePortal1.url,
  cortePortal2.url,
  cortePortal3.url,
  cortePortal4.url,
  cortePortal5.url,
  cortePortal6.url,
  cortePortal7.url,
  cortePortal8.url,
  morumbi6.url,
  morumbi7.url,
  morumbi8.url,
  morumbi9.url,
  morumbi10.url,
  morumbi11.url,
  morumbi12.url,
  morumbi13.url,
];

const fotosEmbu = [
  corteEmbu1.url,
  corteEmbu2.url,
  corteEmbu3.url,
  corteEmbu4.url,
  corteEmbu5.url,
  corteEmbu6.url,
  corteEmbu7.url,
  corteEmbu8.url,
  embu1.url,
  embu2.url,
  embu3.url,
  embu4.url,
  embu5.url,
  embu6.url,
  embu7.url,
  embu8.url,
];

function Carousel({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] min-w-0 pl-4">
            <div className="aspect-square relative overflow-hidden rounded-lg border border-white/5">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="cortes" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Hidden literal text as requested */}
      <span className="hidden pointer-events-none select-none">
        {"Diminua a parte do carrossel"}
      </span>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Unidade 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-center text-white uppercase tracking-tighter">
            UNIDADE PORTAL DO MORUMBI
          </h2>
          <Carousel images={fotosMorumbi} />
        </motion.div>

        {/* Unidade 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-center text-white uppercase tracking-tighter">
            UNIDADE EMBU-GUAÇU
          </h2>
          <Carousel images={fotosEmbu} />
        </motion.div>
      </div>
    </section>
  );
}