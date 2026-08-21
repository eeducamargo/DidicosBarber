import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BARBER_DATA } from "../../config/barber-data";
import { cn } from "../../lib/utils";

export function BookingModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <div className="fixed left-[50%] top-[50%] z-[101] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] px-6 outline-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative overflow-hidden border border-white/10 bg-card/90 p-8 shadow-2xl backdrop-blur-xl"
                >
                  <DialogPrimitive.Close className="absolute right-4 top-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none text-foreground">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar</span>
                  </DialogPrimitive.Close>

                  <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter text-white mb-2">
                      Agendar Horário
                    </h2>
                    <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                      Selecione a unidade mais próxima de você
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {BARBER_DATA.units.map((unit) => (
                      <motion.a
                        key={unit.id}
                        href={unit.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex flex-col p-6 border border-white/5 bg-white/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                        onClick={onClose}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-2 bg-primary/20 text-primary">
                            <MapPin size={20} />
                          </div>
                          <ExternalLink size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                        </div>
                        
                        <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-primary transition-colors">
                          {unit.name}
                        </h3>
                        
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed mb-6 line-clamp-2">
                          {unit.address}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                          <Calendar size={14} />
                          <span>Selecionar Unidade</span>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.3em]">
                      Didico's Barber • Estilo & Tradição
                    </p>
                  </div>
                </motion.div>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </AnimatePresence>
  );
}
