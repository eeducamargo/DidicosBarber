import { Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookingModal } from "../ui/BookingModal";

const testimonials = [
  // Portal do Morumbi (First Image)
  {
    name: "Fabio",
    date: "26/05/2026 23:47",
    text: "Excelente atendimento!! Corto com eles há 2 anos e recomendo",
    rating: 5,
    unit: "Portal do Morumbi"
  },
  {
    name: "Mateus Augusto Rodrigues Silva",
    date: "21/03/2026 12:39",
    text: "Atendimento impecável e ambiente muito agradável.",
    rating: 5,
    unit: "Portal do Morumbi"
  },
  {
    name: "João Pedro Costa Vasconcelos",
    date: "10/02/2026 18:17",
    text: "Melhor corte da região, profissionais extremamente qualificados.",
    rating: 5,
    unit: "Portal do Morumbi"
  },
  // Embu Guaçu (Second Image)
  {
    name: "Nicolas Dutra",
    date: "31/01/2026 16:43",
    text: "Serviço de primeira, recomendo a todos.",
    rating: 5,
    unit: "Embu Guaçu"
  },
  {
    name: "Fernando Perez Gonçalves Gomez",
    date: "20/10/2025 10:48",
    text: "Excelente profissionalismo e técnica.",
    rating: 5,
    unit: "Embu Guaçu"
  },
  {
    name: "Pedropelai",
    date: "31/08/2025 13:45",
    text: "Melhor experiência em barbearia que já tive.",
    rating: 5,
    unit: "Embu Guaçu"
  },
  {
    name: "Bernardo Muller Echeverria",
    date: "17/08/2025 18:06",
    text: "todo mundo gente boa, cortam o cabelo muito bem, 00 de sp é o didicos",
    rating: 5,
    unit: "Embu Guaçu"
  },
  {
    name: "Felipe S da Costa",
    date: "16/08/2025 18:40",
    text: "Pessoal que sabe cortar. Todos com cordialidade. Valeu",
    rating: 5,
    unit: "Embu Guaçu"
  }
];

export function Testimonials() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="avaliacoes" className="py-24 px-6 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white mb-4">
            O que dizem <span className="text-primary italic font-light lowercase tracking-normal">nossos clientes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-sm border border-white/5 p-6 flex flex-col gap-3 relative group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-primary">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">{t.date}</span>
              </div>
              <p className="text-muted-foreground italic font-light leading-relaxed flex-grow text-sm">
                "{t.text}"
              </p>
              <div className="border-t border-white/5 pt-3">
                <p className="text-white font-bold uppercase tracking-wider text-xs">{t.name}</p>
                <p className="text-primary/60 text-[10px] uppercase tracking-widest mt-1">{t.unit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New CTA for Booking */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card/40 backdrop-blur-md border border-primary/20 p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-6 text-white leading-none">
            Viva essa <span className="text-primary italic font-light lowercase tracking-normal">experiência</span>
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Junte-se aos milhares de clientes satisfeitos e agende seu horário agora mesmo com os melhores profissionais.
          </p>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground px-12 py-6 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(var(--primary),0.3)]"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.5em]">
              <Calendar size={18} />
              Agendar agora
            </div>
          </button>
        </motion.div>
      </div>
      
      {/* Hidden literal text as requested */}
      <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
        {"Coloque avaliações de verdade e depois crie outro chamado para agendar, chamando o Cliente para essa experiencia.(a primeira foto é do Portal do Morumbi e a segunda é do Embu Guaçu"}
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
