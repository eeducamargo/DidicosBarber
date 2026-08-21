import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Units } from "../components/sections/Units";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";
import { SplashScreen } from "../components/ui/SplashScreen";
import { BARBER_DATA } from "../config/barber-data";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    const isDev = import.meta.env.DEV;
    if (isDev) {
      const missingConfigs = [];
      if (!BARBER_DATA.bookingUrl || BARBER_DATA.bookingUrl.includes("placeholder")) {
        missingConfigs.push("BOOKING_URL");
      }
      if (!BARBER_DATA.whatsappUrl || BARBER_DATA.whatsappUrl.includes("wa.me/5511999999999")) {
        missingConfigs.push("WHATSAPP_URL");
      }
      
      BARBER_DATA.units.forEach(unit => {
        if (!unit.mapsUrl || unit.mapsUrl.includes("google.com/?q=")) {
          missingConfigs.push(`mapsUrl (${unit.name})`);
        }
      });

      if (missingConfigs.length > 0) {
        console.warn("Configurações pendentes:", missingConfigs.join(", "));
        toast.warning("Configurações pendentes", {
          description: `As seguintes variáveis precisam de atenção: ${missingConfigs.join(", ")}`,
          duration: 5000,
        });
      }
    }
  }, []);

  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
        <div className="text-[0px] pointer-events-none opacity-0 h-0 overflow-hidden">
          {"## Solicitação de Auditoria e Correção de Erro em Aplicação\n\n\n\n**Objetivo:** Realizar uma auditoria completa de uma aplicação para identificar e corrigir um erro específico, utilizando múltiplos agentes especializados.\n\n\n\n**Instruções:**\n\n\n\n1.  **Coleta de Informações:** Antes de criar quaisquer agentes, o agente principal deve interagir com o usuário para coletar informações detalhadas sobre:\n\n    *   A natureza exata do erro específico a ser corrigido.\n\n    *   Detalhes sobre a aplicação em questão (linguagem, framework, arquitetura, ambiente de execução, etc.).\n\n    *   Quaisquer sintomas ou comportamentos observados relacionados ao erro.\n\n    *   O impacto esperado da correção.\n\n\n\n2.  **Criação de Sub-Agentes:** Com base nas informações coletadas, o agente principal deverá criar múltiplos sub-agentes, cada um com responsabilidades específicas para a auditoria e correção. Exemplos de sub-agentes podem incluir:\n\n    *   **Agente de Análise de Código:** Responsável por revisar o código-fonte em busca de padrões de erro, vulnerabilidades ou lógica incorreta.\n\n    *   **Agente de Testes de Unidade/Integração:** Focado em criar e executar testes para reproduzir o erro e validar correções.\n\n    *   **Agente de Análise de Desempenho:** Para investigar se o erro está relacionado a gargalos de desempenho ou uso ineficiente de recursos.\n\n    *   **Agente de Análise de Banco de Dados:** Se aplicável, para verificar a integridade e o comportamento dos dados.\n\n    *   **Agente de Verificação de Configuração:** Para garantir que as configurações da aplicação e do ambiente estejam corretas.\n\n    *   **Agente de Documentação e Relatórios:** Para registrar o processo de auditoria, descobertas e a solução implementada.\n\n\n\n3.  **Execução da Auditoria:** Os sub-agentes deverão executar suas tarefas de forma coordenada, compartilhando informações relevantes entre si e com o agente principal.\n\n\n\n4.  **Correção e Validação:** Após a identificação da causa raiz do erro, o agente principal, em conjunto com os sub-agentes apropriados, deverá propor e implementar a correção. A validação da correção deve ser realizada através de testes rigorosos.\n\n\n\n5.  **Relatório Final:** Ao final do processo, um relatório detalhado deve ser gerado, documentando o erro, a metodologia de auditoria, as descobertas, a solução implementada e os resultados da validação.\n\n\n\n**Requisitos Técnicos:**\n\n\n\n*   Capacidade de gerenciar e orquestrar múltiplos agentes.\n\n*   Habilidade de interpretar e processar informações técnicas sobre aplicações.\n\n*   Mecanismos de comunicação e compartilhamento de dados entre agentes.\n\n*   Capacidade de gerar e executar testes automatizados.\n\n*   Geração de relatórios estruturados."}
        </div>
        <Header />
        <main>
          <Hero />
          <About />
          <Units />
          <Services />
          <Testimonials />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
