# Planejamento: Seção de Agendamento com Seleção de Unidade

Implementar uma seção de CTA com um modal para escolha entre as unidades "Portal do Morumbi" e "Embu-Guaçu", conforme solicitado.

## Alterações Sugeridas

### Componentes
- **BookingModal**: Criar um novo componente em `src/components/ui/BookingModal.tsx` usando `framer-motion` para animação e `radix-ui/react-dialog` (ou similar) para acessibilidade.
- **Hero**: Atualizar o botão de agendamento para abrir o modal em vez de redirecionar diretamente.
- **Header**: Atualizar o botão de agendamento para abrir o modal.
- **Units**: Atualizar os botões de agendamento das unidades para usar os links específicos.

### Configuração
- Utilizar os links já existentes em `BARBER_DATA.units` para os redirecionamentos.

## Detalhes Técnicos
- O modal exibirá dois cartões grandes, lado a lado, com as opções das unidades.
- Cada opção abrirá o link correspondente em uma nova aba.
- Estilo premium seguindo a identidade visual atual (dark mode, glassmorphism, tipografia Montserrat).

### Variáveis Utilizadas (de `src/config/barber-data.ts`):
- `BARBER_DATA.units[0].bookingUrl` (Embu-Guaçu)
- `BARBER_DATA.units[1].bookingUrl` (Portal do Morumbi)
