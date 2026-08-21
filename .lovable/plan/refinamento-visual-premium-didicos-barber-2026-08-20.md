# Refinamento Visual Premium - Didicos Barber

Este plano descreve o refinamento visual completo da landing page para torná-la premium, moderna e comercial, baseada na identidade visual da logo oficial (Cores: Laranja/Ouro, Preto e Branco).

## Design e Cores
- Atualizar a paleta de cores no `src/styles.css` usando a logo:
  - Primária: Laranja/Ouro (#f88c0c / #ff9900)
  - Fundo: Preto profundo e cinza escuro
  - Acentos: Teal (opcional, como no fundo da imagem da logo) ou manter minimalista
- Tipografia: Combinar títulos sofisticados (Montserrat/Playfair Display) com corpo de texto moderno e legível (Inter/Outfit).

## Componentes e Layout
- **Hero**: Tornar impactante com a logo oficial, CTA claro ("Agendar Horário") e indicação das unidades (Morumbi e Embu-Guaçu).
- **Unidades**: Criar cards diferenciados com bordas sutis e efeitos hover premium.
- **Botões**: Padronizar botões com micro-animações (hover suave de 200ms) e hierarquia visual clara.
- **WhatsApp**: Refinar o botão flutuante para ser premium e não intrusivo.

## Detalhes Técnicos
- Utilizar a logo via `lovable-assets` em vez de texto no Header e Hero.
- Atualizar o Favicon a partir da logo.
- Ajustar espaçamentos (padding/margin) para criar "respiro" visual premium.
- Garantir responsividade total no mobile.

## Passos de Implementação
1. Atualizar `src/styles.css` com as cores extraídas e tipografia.
2. Criar favicon em `public/favicon.png`.
3. Atualizar `src/routes/__root.tsx` com o novo favicon e fontes.
4. Refinar `src/components/layout/Header.tsx` e `Hero.tsx` para usar a nova logo.
5. Ajustar `src/components/sections/Units.tsx` para destaque visual.
6. Aplicar micro-animações consistentes.
7. Revisão final mobile.
