import { BARBER_DATA } from "../../config/barber-data";
import { Instagram, MessageCircle } from "lucide-react";
import logoAsset from "../../assets/logo-didicos.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-6">
            <img 
              src={logoAsset.url} 
              alt="Didicos Barber" 
              className="h-20 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
              {"Crie um botao no Rodapé da pagina para o Instagram"}
            </div>
          </div>
          <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
            {BARBER_DATA.tagline}
          </p>
          <div className="flex gap-4">
            <a
              href={BARBER_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="hidden">
          <h4 className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-primary">Links</h4>
          <ul className="space-y-4">
            <li><a href="#inicio" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">Início</a></li>
            <li><a href="#sobre" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#unidades" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">Unidades</a></li>
            <li><a href="#servicos" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">Serviços</a></li>
          </ul>
        </div>
        
        <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
          {"Remova o botao do Instagram, e o Botao Links"}
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-primary">Unidades</h4>
          <ul className="space-y-6">
            {BARBER_DATA.units.map(unit => (
              <li key={unit.id}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-foreground mb-1">{unit.name}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{unit.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-medium text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Didicos Barber. Todos os direitos reservados.</p>
        <p className="opacity-50">Modern Grooming Experience</p>
        <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
          {"O botao do Instagram No final tem que ser redirecionado para esse link: https://www.instagram.com/didicosbarber/"}
        </div>
      </div>
    </footer>
  );
}
