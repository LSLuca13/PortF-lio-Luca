# Portfólio — Luca Lima

Portfólio pessoal de alta fidelidade visual, construído com Next.js, React e vinext. O projeto apresenta
formação, trajetória na robótica, stack técnica e projetos selecionados do perfil
[@LSLuca13](https://github.com/LSLuca13).

## Destaques

- Identidade visual editorial com layout responsivo e animações sutis.
- Conteúdo baseado em dados reais do GitHub: 15 repositórios no total, sendo 11 públicos.
- Projetos em Kotlin, Java, Python, PHP, JavaScript, TypeScript, HTML e CSS.
- Seções de apresentação, stack, projetos, formação no IFBA e conquistas na robótica.
- Acessibilidade com navegação por teclado, foco visível, `prefers-reduced-motion` e HTML semântico.
- SEO básico, Open Graph e dados estruturados de pessoa.

## Rodar localmente

```powershell
npm.cmd install
npm.cmd run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Validar a versão de produção

```powershell
npm.cmd run build
npm.cmd start
```

O build gera em `dist/` um bundle vinext compatível com a infraestrutura de hospedagem.

## Personalização rápida

Os textos, projetos e tecnologias ficam em `app/portfolio.js`. Cores, tipografia, responsividade e
animações ficam em `app/globals.css`.

O avatar é carregado diretamente do perfil público do GitHub. A contagem de repositórios públicos é
atualizada pelo navegador usando a API pública do GitHub, com fallback estático para 11.
