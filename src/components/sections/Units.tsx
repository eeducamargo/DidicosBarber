import { BARBER_DATA } from "../../config/barber-data";
import { MapPin, Clock, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ambFachada from "@/assets/amb-fachada.png.asset.json";

export function Units() {
  return (
    <section id="unidades" className="py-24 px-6 relative overflow-hidden">
      {/* Fundo atmosférico sutil: fachada da barbearia */}
      <div className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={ambFachada.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">

          <h4 className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Localização</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Encontre a Didicos Barber</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARBER_DATA.units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card/30 backdrop-blur-sm border border-white/5 p-8 md:p-12 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
                {`ATENÇÃO: O botão "Como chegar" nas unidades NÃO ESTÁ CLICÁVEL. Você adicionou apenas o visual, mas esqueceu a ação do link.

Você PRECISA transformar o botão em uma tag HTML nativa <a> com o atributo href.

Edite o arquivo Units.tsx (ou o componente responsável por essa seção) e aplique estritamente esta estrutura nos botões de "Como chegar":

1. Para a unidade EMBU-GUAÇU: Substitua o botão atual por este código: <a href="[https://www.google.com/maps/search/?api=1&query=Rua+independ%C3%AAncia%2C+90+-+Centro%2C+Embu-Gua%C3%A7u+-+SP](https://www.google.com/maps/search/?api=1&query=Rua+independ%C3%AAncia%2C+90+-+Centro%2C+Embu-Gua%C3%A7u+-+SP)" target="_blank" rel="noopener noreferrer" className="SUAS_CLASSES_TAILWIND_AQUI">Como chegar</a>

2. Para a unidade PORTAL DO MORUMBI: Substitua o botão atual por este código: <a href="[https://www.google.com/maps/search/?api=1&query=Rua+professor+Jos%C3%A9+Hor%C3%A1cio+Meirelles+Teixeira%2C+1041+-+Vila+Suzana%2C+S%C3%A3o+Paulo+-+SP](https://www.google.com/maps/search/?api=1&query=Rua+professor+Jos%C3%A9+Hor%C3%A1cio+Meirelles+Teixeira%2C+1041+-+Vila+Suzana%2C+S%C3%A3o+Paulo+-+SP)" target="_blank" rel="noopener noreferrer" className="SUAS_CLASSES_TAILWIND_AQUI">Como chegar</a>

Regra: Não use um componente customizado <Button> se ele não suportar o redirecionamento. Use a tag <a> pura e apenas passe as classes do Tailwind (className) para manter o design igual. Faça essa alteração agora.`}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter mb-8 text-white group-hover:text-primary transition-colors">
                {unit.name}
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Endereço</p>
                    <p className="text-sm font-light leading-relaxed">{unit.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Funcionamento</p>
                    <p className="text-sm font-light leading-relaxed">{unit.openingHours}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">WhatsApp</p>
                    <a 
                      href={unit.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light hover:text-primary transition-colors"
                    >
                      Conversar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary text-foreground border border-border/50 px-6 py-4 rounded-none text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary/80 transition-all flex items-center justify-center gap-2"
                >
                  <MapPin size={14} />
                  Como Chegar
                </a>
              </div>
              <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
                {"Refaça completamente a seção \"LOCALIZAÇÃO / ENCONTRE A DIDICOS BARBER\" com os cartões das unidades, mas aplique as seguintes mudanças obrigatórias na estrutura:\n\nRemova completamente o botão \"AGENDAR NESTA UNIDADE\".\n\nO único botão grande na parte inferior de cada cartão deve ser o \"COMO CHEGAR\".\n\nCÓDIGO OBRIGATÓRIO: O botão \"COMO CHEGAR\" e o texto do \"WhatsApp\" não podem ser apenas divs visuais. Eles precisam ser renderizados usando a tag HTML de link (<a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\">).\n\nAplique os seguintes dados e links em cada cartão:\n\nCartão 1: EMBU-GUAÇU\n\nEndereço: Rua Independência, 90 - Centro, Embu-Guaçu - SP\n\nFuncionamento: Terça a Sábado: 10h às 19h\n\nWhatsApp (\"Conversar no WhatsApp\"): Transforme esse texto em um link <a href=\"[https://wa.me/5511996408278](https://wa.me/5511996408278)\" target=\"_blank\">\n\nBotão \"COMO CHEGAR\": Transforme o botão em um link <a href=\"[https://www.google.com/maps/search/?api=1&query=Rua+independ%C3%AAncia%2C+90+-+Centro%2C+Embu-Gua%C3%A7u+-+SP](https://www.google.com/maps/search/?api=1&query=Rua+independ%C3%AAncia%2C+90+-+Centro%2C+Embu-Gua%C3%A7u+-+SP)\" target=\"_blank\">\n\nCartão 2: PORTAL DO MORUMBI\n\nEndereço: Rua Professor José Horácio Meirelles Teixeira, 1041 - Vila Suzana, São Paulo - SP\n\nFuncionamento: Segunda a Sábado: 09h às 20h\n\nWhatsApp (\"Conversar no WhatsApp\"): Transforme esse texto em um link <a href=\"[https://wa.me/5511996408278](https://wa.me/5511996408278)\" target=\"_blank\">\n\nBotão \"COMO CHEGAR\": Transforme o botão em um link <a href=\"[https://www.google.com/maps/search/?api=1&query=Rua+professor+Jos%C3%A9+Hor%C3%A1cio+Meirelles+Teixeira%2C+1041+-+Vila+Suzana%2C+S%C3%A3o+Paulo+-+SP](https://www.google.com/maps/search/?api=1&query=Rua+professor+Jos%C3%A9+Hor%C3%A1cio+Meirelles+Teixeira%2C+1041+-+Vila+Suzana%2C+S%C3%A3o+Paulo+-+SP)\" target=\"_blank\">\n\nMantenha o design atual (Dark mode, ícones, tamanhos de fonte e bordas), apenas aplique essa simplificação nos botões e force o uso da tag"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
