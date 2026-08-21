import { BARBER_DATA } from "../../config/barber-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={BARBER_DATA.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 active:scale-95 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
}
