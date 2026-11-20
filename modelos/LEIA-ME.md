# Modelos dos Reels do HelpTime

- `nino-reel-modelo.html`: Reel aprovado pelo dono em 20/11/2026 (11 s). Contém as funções de desenho do Nino (`face`, `ninoFoco`, `ninoPausa`, `ninoFesta`) e a estrutura `window.render(t)`. Reaproveite o desenho do Nino a partir daqui; mude cenas, textos e animações conforme o tema do dia.
- `render.js`: gera os quadros JPEG a 30 fps com Playwright (ajuste a duração na linha `n = Math.round(<segundos> * fps)`).
- `nino-reel-modelo.mp4`: o vídeo de referência.
- `mascotes-estudo.png/html`: folha de estudo com as 3 propostas de mascote; o escolhido foi o Nino (cometinha verde-sálvia).
