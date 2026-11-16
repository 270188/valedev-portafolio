import './style.css';

const phone = '51990073634';
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent('Hola, ValeDev. Quisiera información sobre una página web para mi negocio.')}`;

const projects = [
  {
    number: '01',
    name: 'AirconSolution Services SAC',
    type: 'Web empresarial',
    description: 'Presencia digital para una empresa de climatización, instalaciones y servicios generales.',
    url: 'https://airconsolutionsac.com/',
    tag: 'SERVICIOS EMPRESARIALES',
    visual: 'air'
  },
  {
    number: '02',
    name: 'Intuya Perú',
    type: 'Web comercial',
    description: 'Una presentación digital para una marca de jabones artesanales y productos de cuidado personal.',
    url: 'https://intuyaperu.com/',
    tag: 'MARCA & PRODUCTO',
    visual: 'intuya'
  },
  {
    number: '03',
    name: 'Cooling Solution SAC',
    type: 'Web corporativa',
    description: 'Sitio de servicios con categorías, galería de proyectos, preguntas frecuentes y contacto.',
    url: 'https://cooling-solution-sac.vercel.app/',
    tag: 'SOLUCIONES INTEGRALES',
    visual: 'cooling'
  },
  {
    number: '04',
    name: 'Bellísima Salón & Spa',
    type: 'Web para belleza',
    description: 'Experiencia digital para un salón de belleza, con presentación de servicios y canales de reserva.',
    url: 'https://bellisimasalonyspa.vercel.app/',
    tag: 'BELLEZA & BIENESTAR',
    visual: 'beauty'
  }
];

const projectCards = projects.map((p) => `
  <article class="project-card">
    <a class="project-visual ${p.visual}" href="${p.url}" target="_blank" rel="noreferrer" aria-label="Visitar ${p.name}">
      <span class="visual-kicker">${p.tag}</span>
      <span class="visual-wordmark">${p.name}</span>
      <span class="visual-open">↗</span>
    </a>
    <div class="project-info">
      <div class="project-meta"><span>${p.number} / 04</span><span>${p.type}</span></div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a class="text-link" href="${p.url}" target="_blank" rel="noreferrer">Ver proyecto <span>↗</span></a>
    </div>
  </article>
`).join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="ValeDev, inicio">VALE<span>DEV</span><i>.</i></a>
    <nav class="desktop-nav" aria-label="Navegación principal">
      <a href="#proyectos">Proyectos</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a>
    </nav>
    <a class="header-cta" href="${whatsapp}" target="_blank" rel="noreferrer">Hablemos <span>↗</span></a>
    <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <p class="eyebrow"><span></span> ESTUDIO DE DESARROLLO WEB</p>
        <h1>Tu negocio merece<br>una <em>gran presencia</em><br>digital.</h1>
        <p class="hero-copy">Diseñamos páginas web elegantes, funcionales y adaptadas a celulares para empresas que quieren crecer y destacar.</p>
        <div class="hero-actions">
          <a class="button button-gold" href="#proyectos">Explorar proyectos <span>↘</span></a>
          <a class="button button-ghost" href="${whatsapp}" target="_blank" rel="noreferrer">Solicitar información</a>
        </div>
        <div class="hero-note"><span class="note-line"></span><span>DISEÑO · DESARROLLO · PRESENCIA DIGITAL</span></div>
      </div>
      <div class="hero-side">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="hero-monogram">V<span>.</span></div>
        <div class="hero-side-label">IDEAS QUE<br>SE CONVIERTEN<br>EN EXPERIENCIAS.</div>
        <div class="hero-index">01 — 04</div>
      </div>
      <div class="hero-bottom"><span>LIMA · PERÚ</span><span>CREAMOS PARA IMPULSAR TU MARCA</span><span>SCROLL ↓</span></div>
    </section>

    <section class="intro section" id="nosotros">
      <div class="section-label">01 / QUIÉNES SOMOS</div>
      <div class="intro-main">
        <p class="eyebrow dark">DISEÑO CON PROPÓSITO</p>
        <h2>Una web bien hecha<br>abre <em>nuevas puertas.</em></h2>
        <p class="intro-copy">En ValeDev ayudamos a negocios y empresas a mostrar lo mejor de sus servicios en Internet. Combinamos diseño visual, contenido claro y herramientas de contacto para crear experiencias digitales útiles.</p>
      </div>
      <div class="intro-stats">
        <div><strong>04</strong><span>PROYECTOS EN PORTAFOLIO</span></div>
        <div><strong>360°</strong><span>VISIÓN PARA TU NEGOCIO</span></div>
      </div>
    </section>

    <section class="projects section" id="proyectos">
      <div class="section-heading">
        <div><p class="eyebrow dark">TRABAJO SELECCIONADO</p><h2>Proyectos que<br><em>hablan por sí solos.</em></h2></div>
        <p class="heading-note">Una selección de páginas desarrolladas para distintos rubros y necesidades de negocio.</p>
      </div>
      <div class="project-grid">${projectCards}</div>
    </section>

    <section class="services section" id="servicios">
      <div class="section-label light-label">02 / QUÉ HACEMOS</div>
      <div class="services-heading"><p class="eyebrow">SOLUCIONES DIGITALES</p><h2>Todo lo que tu negocio<br>necesita para <em>destacar.</em></h2></div>
      <div class="service-list">
        <div class="service-item"><span>01</span><h3>Webs corporativas</h3><p>Una presentación profesional para empresas de servicios, construcción, mantenimiento e instalaciones.</p><b>↗</b></div>
        <div class="service-item"><span>02</span><h3>Webs para negocios</h3><p>Páginas para salones, spa, comercios y emprendimientos que quieren llegar a más clientes.</p><b>↗</b></div>
        <div class="service-item"><span>03</span><h3>Catálogos digitales</h3><p>Presenta productos y servicios con fotografías, información clara y accesos de contacto.</p><b>↗</b></div>
        <div class="service-item"><span>04</span><h3>Integración de contacto</h3><p>Botones de WhatsApp y formularios para facilitar las consultas de tus futuros clientes.</p><b>↗</b></div>
      </div>
    </section>

    <section class="process section">
      <div class="section-label">03 / CÓMO TRABAJAMOS</div>
      <div class="process-content"><p class="eyebrow dark">SENCILLO Y TRANSPARENTE</p><h2>De la idea a tu<br><em>nueva página web.</em></h2></div>
      <div class="steps">
        <div><span>01</span><h3>Nos cuentas</h3><p>Conocemos tu negocio, tus objetivos y lo que necesitas comunicar.</p></div>
        <div><span>02</span><h3>Diseñamos</h3><p>Definimos la estructura y la apariencia de tu página.</p></div>
        <div><span>03</span><h3>Desarrollamos</h3><p>Construimos y revisamos la web en computadora y celular.</p></div>
        <div><span>04</span><h3>Publicamos</h3><p>Coordinamos la entrega y publicación de tu proyecto.</p></div>
      </div>
    </section>

    <section class="contact section" id="contacto">
      <div class="contact-orb"></div>
      <p class="eyebrow">¿EMPEZAMOS?</p>
      <h2>Tu próximo proyecto<br>puede <em>comenzar aquí.</em></h2>
      <p class="contact-copy">Cuéntanos qué necesita tu negocio. Conversemos sobre una página web que represente el valor de tu marca.</p>
      <a class="button button-gold" href="${whatsapp}" target="_blank" rel="noreferrer">Conversemos por WhatsApp <span>↗</span></a>
      <div class="contact-details"><span>LIMA, PERÚ</span><a href="${whatsapp}" target="_blank" rel="noreferrer">+51 990 073 634</a></div>
    </section>
  </main>

  <footer class="footer"><a class="brand" href="#inicio">VALE<span>DEV</span><i>.</i></a><span>© ${new Date().getFullYear()} ValeDev. Todos los derechos reservados.</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
  <a class="whatsapp-float" href="${whatsapp}" target="_blank" rel="noreferrer" aria-label="Contactar a ValeDev por WhatsApp"><span>◉</span><b>WhatsApp</b></a>
`;

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.desktop-nav');
menuButton?.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!opened));
  nav?.classList.toggle('nav-open', !opened);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
