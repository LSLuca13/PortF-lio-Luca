"use client";

import { useEffect, useState } from "react";

const techStack = [
  {
    id: "01",
    name: "Kotlin",
    context: "Android · Mobile",
    evidence: "6 repositórios públicos",
    tone: "lime"
  },
  {
    id: "02",
    name: "Java",
    context: "POO · Back-end",
    evidence: "Builder pattern & sistemas",
    tone: "cream"
  },
  {
    id: "03",
    name: "Python",
    context: "Automação · Dados",
    evidence: "Fluxos de estoque e NFe",
    tone: "blue"
  },
  {
    id: "04",
    name: "PHP",
    context: "Web · Back-end",
    evidence: "Sistemas de gestão",
    tone: "violet"
  },
  {
    id: "05",
    name: "JS / TS",
    context: "Web · Interfaces",
    evidence: "Projetos full-stack",
    tone: "orange"
  },
  {
    id: "06",
    name: "HTML / CSS",
    context: "UI · Responsividade",
    evidence: "Experiências para a web",
    tone: "rose"
  }
];

const projects = [
  {
    index: "01",
    name: "SmartFinances",
    category: "Android / Finanças",
    description:
      "Aplicação mobile construída em Kotlin para explorar organização financeira e uma experiência Android nativa.",
    languages: ["Kotlin", "Android"],
    url: "https://github.com/LSLuca13/SmartFinances",
    accent: "lime",
    monogram: "SF"
  },
  {
    index: "02",
    name: "TotemCariza3",
    category: "Web / Full-stack",
    description:
      "Base web que combina TypeScript, JavaScript, HTML e CSS — um recorte da minha atuação entre lógica e interface.",
    languages: ["TypeScript", "JavaScript", "HTML/CSS"],
    url: "https://github.com/LSLuca13/TotemCariza3",
    accent: "blue",
    monogram: "TC"
  },
  {
    index: "03",
    name: "Boleto App",
    category: "Java / Padrões",
    description:
      "Gerador de boletos bancários em Java usando o padrão Builder para separar construção, regras e legibilidade.",
    languages: ["Java", "Builder Pattern"],
    url: "https://github.com/LSLuca13/Boleto-App-Builder-java",
    accent: "orange",
    monogram: "BA"
  },
  {
    index: "04",
    name: "Estoque NFe",
    category: "Python / Automação",
    description:
      "Projeto em Python para organizar o fluxo de entrada e saída de estoque a partir de notas fiscais eletrônicas.",
    languages: ["Python", "Automação"],
    url: "https://github.com/LSLuca13/Estoque-NFE-ENTRADA-SAIDA",
    accent: "violet",
    monogram: "EN"
  }
];

const whatsappUrl =
  "https://wa.me/5573988904722?text=Ol%C3%A1%2C%20acabei%20de%20ver%20seu%20portf%C3%B3lio%20digital";

function ArrowUpRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function GitHubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12.04 2a9.8 9.8 0 0 0-8.47 14.73L2 22l5.4-1.5A9.94 9.94 0 0 0 12.04 22 10 10 0 0 0 12.04 2Zm0 18.18a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.2.9.86-3.12-.2-.32a8.15 8.15 0 1 1 6.97 3.85Zm4.47-6.1c-.24-.12-1.44-.7-1.66-.79-.23-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.17-.28.19-.52.07-.25-.12-1.03-.38-1.96-1.2a7.4 7.4 0 0 1-1.36-1.7c-.14-.25-.01-.38.11-.5.11-.1.24-.27.37-.41.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.84-.85 2.04s.88 2.36 1 2.52c.12.17 1.72 2.63 4.17 3.69.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.6 1.64-1.17.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-lines ${open ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [publicRepos, setPublicRepos] = useState(11);

  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector(".scroll-progress");
    const header = document.querySelector(".site-header");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      progress?.style.setProperty("--progress", value);
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    const onPointerMove = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -40px" }
    );

    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("is-visible");
      }
      observer.observe(item);
    });
    root.classList.add("reveal-ready");

    const countItems = document.querySelectorAll("[data-count]");
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || reduceMotion) return;
          const target = Number(entry.target.dataset.count);
          const start = performance.now();
          const duration = 900;
          const tick = (now) => {
            const progressValue = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progressValue, 3);
            entry.target.textContent = Math.round(target * eased).toString().padStart(2, "0");
            if (progressValue < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );

    countItems.forEach((item) => countObserver.observe(item));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();

    fetch("https://api.github.com/users/LSLuca13")
      .then((response) => (response.ok ? response.json() : null))
      .then((profile) => {
        if (profile?.public_repos) setPublicRepos(profile.public_repos);
      })
      .catch(() => {});

    return () => {
      observer.disconnect();
      countObserver.disconnect();
      root.classList.remove("reveal-ready");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <a
        className="whatsapp-fab"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com Luca pelo WhatsApp"
      >
        <WhatsAppIcon size={19} />
        <span>WhatsApp</span>
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Luca Lima — início">
          <span className="brand-mark">LL</span>
          <span className="brand-name">
            Luca Lima
            <small>Software developer</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#trajetoria" onClick={closeMenu}>
            Trajetória
          </a>
          <a
            className="nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            WhatsApp <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <main id="conteudo">
        <section className="hero section-shell" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="section-kicker">
                <span>01</span>
                <p>Portfólio pessoal · 2026</p>
              </div>
              <p className="hero-intro">Olá, eu sou Luca.</p>
              <h1>
                Código com
                <span className="serif-line">intenção.</span>
              </h1>
              <p className="hero-description">
                Desenvolvedor de software no último semestre de ADS pelo IFBA. Transformo
                lógica, curiosidade e repertório de robótica em produtos digitais que funcionam
                de verdade.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projetos">
                  Explorar projetos <ArrowUpRight />
                </a>
                <a
                  className="button button-quiet"
                  href="https://github.com/LSLuca13"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon /> @LSLuca13
                </a>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="visual-meta visual-meta-top">
                <span className="live-dot" />
                <span>Disponível para novos desafios</span>
              </div>

              <div className="orbit-stage" aria-label="Retrato de Luca Lima">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <span className="orbit orbit-three" />
                <span className="orbit-code orbit-code-a">KOTLIN</span>
                <span className="orbit-code orbit-code-b">JAVA</span>
                <span className="orbit-code orbit-code-c">PYTHON</span>
                <div className="portrait-frame">
                  <img
                    src="/luca-github-avatar.png"
                    alt="Avatar do GitHub de Luca Lima"
                  />
                  <span className="portrait-scan" aria-hidden="true" />
                </div>
                <div className="core-label">
                  <span>IFBA</span>
                  <small>ADS · último semestre</small>
                </div>
              </div>

              <div className="visual-footer">
                <div>
                  <small>Local</small>
                  <strong>Bahia, Brasil</strong>
                </div>
                <div>
                  <small>Foco</small>
                  <strong>Software + produto</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stats" data-reveal>
            <div className="stat">
              <strong data-count="15">15</strong>
              <span>repositórios no GitHub</span>
            </div>
            <div className="stat">
              <strong data-count="3">03</strong>
              <span>títulos em robótica</span>
            </div>
            <div className="stat">
              <strong data-count="6">06</strong>
              <span>frentes de tecnologia</span>
            </div>
            <div className="stat stat-text">
              <strong>∞</strong>
              <span>curiosidade para aprender</span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>KOTLIN</span><i>✦</i><span>JAVA</span><i>✦</i><span>PYTHON</span><i>✦</i>
            <span>PHP</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>ANDROID</span><i>✦</i>
            <span>KOTLIN</span><i>✦</i><span>JAVA</span><i>✦</i><span>PYTHON</span><i>✦</i>
            <span>PHP</span><i>✦</i><span>TYPESCRIPT</span><i>✦</i><span>ANDROID</span><i>✦</i>
          </div>
        </div>

        <section className="about section-shell" id="sobre">
          <div className="section-heading" data-reveal>
            <div className="section-kicker">
              <span>02</span>
              <p>Quem sou eu</p>
            </div>
            <h2>
              Gosto de entender
              <span className="serif-line">como as coisas funcionam.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-index" data-reveal>
              <span>Sobre /</span>
              <strong>LL—01</strong>
            </div>
            <div className="about-copy" data-reveal>
              <p className="lead">
                Antes de escolher uma tecnologia, eu procuro entender o problema. É daí que nasce
                um código mais simples, uma interface mais clara e uma solução com propósito.
              </p>
              <div className="about-columns">
                <p>
                  Minha formação em Análise e Desenvolvimento de Sistemas no IFBA me deu base para
                  transitar entre desenvolvimento mobile, back-end, web e automação.
                </p>
                <p>
                  A robótica trouxe outra camada: pensar sob pressão, testar hipóteses, colaborar e
                  insistir até o sistema inteiro responder como deveria.
                </p>
              </div>
            </div>

            <div className="code-card" data-reveal>
              <div className="code-card-head">
                <span>mindset.js</span>
                <span>● ● ●</span>
              </div>
              <pre aria-label="Trecho de código ilustrativo">
                <code>
                  <span className="code-muted">01</span>{" "}
                  <span className="code-keyword">const</span> desafio = {"{"}
                  {"\n"}
                  <span className="code-muted">02</span> &nbsp;curiosidade:{" "}
                  <span className="code-value">true</span>,{"\n"}
                  <span className="code-muted">03</span> &nbsp;tentativas:{" "}
                  <span className="code-string">&quot;quantas forem&quot;</span>,{"\n"}
                  <span className="code-muted">04</span> &nbsp;resultado:{" "}
                  <span className="code-string">&quot;algo melhor&quot;</span>
                  {"\n"}
                  <span className="code-muted">05</span> {"};"}
                </code>
              </pre>
              <div className="code-card-foot">
                <span>building ideas into systems</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stack section-shell" id="stack">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <div className="section-kicker">
                <span>03</span>
                <p>Tecnologias</p>
              </div>
              <h2>
                Ferramentas que
                <span className="serif-line">viram produto.</span>
              </h2>
            </div>
            <p className="section-side-note">
              Stack baseada nas linguagens encontradas nos repositórios do meu GitHub.
            </p>
          </div>

          <div className="tech-list">
            {techStack.map((tech) => (
              <article className={`tech-row tone-${tech.tone}`} key={tech.id} data-reveal>
                <span className="tech-id">{tech.id}</span>
                <h3>{tech.name}</h3>
                <p>{tech.context}</p>
                <span className="tech-evidence">{tech.evidence}</span>
                <ArrowUpRight size={22} />
              </article>
            ))}
          </div>

          <p className="stack-note" data-reveal>
            Também trabalho com Git, GitHub, APIs REST, banco de dados, princípios de UI responsiva
            e arquitetura orientada à manutenção.
          </p>
        </section>

        <section className="projects section-shell" id="projetos">
          <div className="section-heading section-heading-row" data-reveal>
            <div>
              <div className="section-kicker">
                <span>04</span>
                <p>Projetos selecionados</p>
              </div>
              <h2>
                Ideias em
                <span className="serif-line">movimento.</span>
              </h2>
            </div>
            <a
              className="inline-link"
              href="https://github.com/LSLuca13?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Ver todos no GitHub <ArrowUpRight />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className={`project-card project-${project.accent}`}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                data-reveal
              >
                <div className="project-top">
                  <span>{project.index}</span>
                  <span>{project.category}</span>
                  <ArrowUpRight size={22} />
                </div>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-monogram">{project.monogram}</span>
                  <span className="project-ring project-ring-one" />
                  <span className="project-ring project-ring-two" />
                  <span className="project-pixel p1" />
                  <span className="project-pixel p2" />
                  <span className="project-pixel p3" />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.languages.map((language) => (
                      <span key={language}>{language}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="github-band" data-reveal>
            <div className="github-band-copy">
              <GitHubIcon size={30} />
              <div>
                <span>GitHub em números</span>
                <h3>Construir também é documentar o caminho.</h3>
              </div>
            </div>
            <div className="github-band-stats">
              <div>
                <strong>15</strong>
                <span>repositórios totais</span>
              </div>
              <div>
                <strong data-public-repos>{publicRepos}</strong>
                <span>projetos públicos</span>
              </div>
              <a
                href="https://github.com/LSLuca13"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir perfil no GitHub"
              >
                <ArrowUpRight size={28} />
              </a>
            </div>
          </div>
        </section>

        <section className="journey section-shell" id="trajetoria">
          <div className="section-heading" data-reveal>
            <div className="section-kicker">
              <span>05</span>
              <p>Formação & conquistas</p>
            </div>
            <h2>
              A trajetória por trás
              <span className="serif-line">do código.</span>
            </h2>
          </div>

          <div className="journey-grid">
            <article className="education-card" data-reveal>
              <div className="education-symbol" aria-hidden="true">
                <span>IF</span>
                <i />
              </div>
              <div className="education-content">
                <span className="card-label">Formação acadêmica</span>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p>Instituto Federal de Educação, Ciência e Tecnologia da Bahia — IFBA</p>
                <div className="progress-label">
                  <span>Último semestre</span>
                  <strong>Reta final</strong>
                </div>
                <div className="course-progress" aria-label="Curso no último semestre">
                  <span />
                </div>
              </div>
            </article>

            <article className="robotics-card" data-reveal>
              <div className="robotics-heading">
                <span className="card-label">Torneio Brasil de Robótica</span>
                <span className="trophy-mark">03</span>
              </div>
              <h3>Competir me ensinou a construir sob pressão.</h3>
              <p>
                Estratégia, engenharia, trabalho em equipe e ciclos rápidos de teste — habilidades
                que continuam presentes em cada projeto.
              </p>
              <div className="achievement-list">
                <div>
                  <span>2×</span>
                  <p><strong>Campeão regional</strong> em robótica</p>
                </div>
                <div>
                  <span>1×</span>
                  <p><strong>Campeão nacional</strong> em robótica</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="contact section-shell" id="contato">
          <div className="contact-card" data-reveal>
            <div className="contact-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="section-kicker section-kicker-light">
              <span>06</span>
              <p>Próximo capítulo</p>
            </div>
            <h2>
              Tem uma ideia?
              <span className="serif-line">Vamos fazê-la funcionar.</span>
            </h2>
            <p>
              Estou aberto a oportunidades, colaborações e projetos que unam tecnologia, produto e
              impacto real.
            </p>
            <div className="contact-actions">
              <a
                className="button button-dark"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Chamar no WhatsApp <ArrowUpRight />
              </a>
              <span>Mensagem pronta · resposta direta</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <span className="brand-mark">LL</span>
          <p>
            Projetado para mostrar mais do que código:
            <br />
            mostrar intenção.
          </p>
        </div>
        <div className="footer-links">
          <a href="#inicio">Voltar ao topo ↑</a>
          <a href="https://github.com/LSLuca13" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-meta">
          © 2026 Luca Lima
          <span>Dados do GitHub verificados em 27.07.2026</span>
        </p>
      </footer>
    </>
  );
}
