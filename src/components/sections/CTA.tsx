import { BARBER_DATA } from "../../config/barber-data";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "../ui/BookingModal";


export function CTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-4 md:inset-8 z-0 rounded-3xl overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-35 scale-105"
          style={{ backgroundImage: `url("${"/images/amb-cartao.png"}")` }}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>


      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/5 p-12 md:p-24 bg-card/20 backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
            Eleve seu <span className="text-primary italic font-light lowercase tracking-normal block mt-2">estilo pessoal</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-sans font-light tracking-wide max-w-2xl mx-auto">
            Não perca tempo e garanta sua vaga com os melhores profissionais da região.
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground px-16 py-8 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(var(--primary),0.3)] mx-auto"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.5em]">
              <Calendar size={20} />
              Agendar Experiência
            </div>
          </button>
          
          <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
            {"O botao Agendar Experiencia tem que ter a mesma função do botao agendar horario"}
          </div>
        </motion.div>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
