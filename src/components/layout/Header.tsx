import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BARBER_DATA } from "../../config/barber-data";
import { cn } from "../../lib/utils";
import logoAsset from "../../assets/logo-didicos.png.asset.json";
import { BookingModal } from "../ui/BookingModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Unidades", href: "#unidades" },
    { name: "Serviços", href: "#servicos" },
    { name: "Avaliações", href: "#avaliacoes" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:py-6",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent"
        )}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#inicio" 
          className="relative flex items-center gap-2 group p-2 overflow-hidden rounded-md"
        >
          {/* Wood/Leather texture overlay */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('https://images.unsplash.com/photo-1581411162886-e9600c6158ee?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center brightness-50 contrast-125" />
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-black to-transparent" />
          
          <img 
            src={logoAsset.url} 
            alt="Didicos Barber" 
            className="relative z-10 h-10 md:h-12 w-auto object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] text-foreground/80"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-none text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
          >
            Agendar Horário
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col p-8 gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsBookingModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary text-primary-foreground px-6 py-4 rounded-none text-xs font-black uppercase tracking-[0.2em]"
            >
              Agendar Horário
            </button>
          </nav>
        </div>
      )}
      </header>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
