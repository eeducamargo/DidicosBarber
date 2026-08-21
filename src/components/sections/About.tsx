import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import cortePortal1 from "@/assets/corte-portal-1.png.asset.json";
import cortePortal2 from "@/assets/corte-portal-2.png.asset.json";
import cortePortal3 from "@/assets/corte-portal-3.png.asset.json";
import cortePortal4 from "@/assets/corte-portal-4.png.asset.json";
import cortePortal5 from "@/assets/corte-portal-5.png.asset.json";
import cortePortal6 from "@/assets/corte-portal-6.png.asset.json";
import cortePortal7 from "@/assets/corte-portal-7.png.asset.json";
import cortePortal8 from "@/assets/corte-portal-8.png.asset.json";
import corteEmbu1 from "@/assets/corte-embu-1.png.asset.json";
import corteEmbu2 from "@/assets/corte-embu-2.png.asset.json";
import corteEmbu3 from "@/assets/corte-embu-3.png.asset.json";
import corteEmbu4 from "@/assets/corte-embu-4.png.asset.json";
import corteEmbu5 from "@/assets/corte-embu-5.png.asset.json";
import corteEmbu6 from "@/assets/corte-embu-6.png.asset.json";
import corteEmbu7 from "@/assets/corte-embu-7.png.asset.json";
import corteEmbu8 from "@/assets/corte-embu-8.png.asset.json";
import ambInterior from "@/assets/amb-interior.png.asset.json";


const fotosMorumbi = [
  cortePortal1.url,
  cortePortal2.url,
  cortePortal3.url,
  cortePortal4.url,
  cortePortal5.url,
  cortePortal6.url,
  cortePortal7.url,
  cortePortal8.url,
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
      {/* Fundo atmosférico sutil: interior da barbearia */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={ambInterior.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>


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