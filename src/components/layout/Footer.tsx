import { BARBER_DATA } from "../../config/barber-data";
import { Instagram, MessageCircle, MapPin, Calendar } from "lucide-react";
import logoAsset from "../../assets/logo-didicos.png.asset.json";
import { useState } from "react";
import { BookingModal } from "../ui/BookingModal";

export function Footer() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Coluna 1: Sobre nós */}
        <div className="space-y-6">
          <div>
            <img
              src={logoAsset.url}
              alt="Barbearia Dídico's"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Muito mais que um corte, uma experiência de estilo e tradição.
          </p>
        </div>

        {/* Coluna 2: Nossas Unidades */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-primary">
            Nossas Unidades
          </h4>
          <ul className="space-y-5">
            {BARBER_DATA.units.map((unit) => (
              <li key={unit.id}>
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-foreground font-medium text-xs uppercase tracking-wider mb-0.5">
                      {unit.name}
                    </span>
                    <span className="text-xs leading-relaxed">
                      {unit.id === "embu"
                        ? "Rua Independência, 90 - Centro"
                        : "Rua Prof. José Horácio M. Teixeira, 1041 - Vila Suzana"}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Siga a Dídico's */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-primary">
            Siga a Dídico's
          </h4>
          <a
            href="https://www.instagram.com/didicosbarber/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Instagram da Barbearia Dídico's"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-primary">
            Contato
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href={BARBER_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={16} className="text-primary shrink-0" />
                Conversar no WhatsApp
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Calendar size={16} className="text-primary shrink-0" />
                Agendar Horário
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium text-center md:text-left">
        <p>&copy; 2026 Barbearia Dídico's. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/eedu.camargo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            @eedu.camargo
          </a>
        </p>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </footer>
  );
}
