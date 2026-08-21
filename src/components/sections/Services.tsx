import { useState } from "react";
import { BARBER_DATA } from "../../config/barber-data";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BookingModal } from "../ui/BookingModal";

export function Services() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <section id="servicos" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Fundo atmosférico sutil: detalhe do atendimento */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={"/images/amb-barba.png"}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h4 className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Nossos Serviços</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">O que fazemos de melhor</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl mx-auto">
          {BARBER_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-between py-3 border-b border-white/5 group hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                  {service.name}
                </span>
                <span className="text-[9px] text-muted-foreground/60 uppercase tracking-widest mt-0.5">
                  {service.duration}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-white/5 hidden sm:block" />
                <span className="text-[12px] font-display font-black text-white whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm font-light mb-8 italic">
            {"\n"}
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-none text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.2)]"
          >
            Agendar Agora
          </button>
        </div>
      </div>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
