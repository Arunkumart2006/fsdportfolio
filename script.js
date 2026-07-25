/* =========================================================
   ARUNKUMAR T — PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     PROJECT DATA
     Each project's `images` array lists screenshot paths.
     Projects without uploaded screenshots yet show a styled
     placeholder tile instead of a stock photo — swap in real
     paths here as screenshots are provided.
     --------------------------------------------------------- */
  const projects = [
    {
      title: 'CampusGate Management System',
      tag: 'Java · MySQL',
      tech: ['Java', 'MySQL', 'Full Stack'],
      description: 'Campus management system for student and administrative activities — covering login, role-based dashboards (MD, Principal, HOD, Staff, Watchman), student outpass approvals, bus entry logging, visitor tracking and subscription management.',
      images: [
    "assets/images/campusgate/Screenshot 2026-07-25 224936.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225009.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225145.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225318.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225352.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225434.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225540.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225618.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225652.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225844.png",
    "assets/images/campusgate/Screenshot 2026-07-25 225916.png",
    "assets/images/campusgate/Screenshot 2026-07-25 230108.png"
]
    },
    {
      title: 'Java Chat Application',
      tag: 'Java',
      tech: ['Java', 'Sockets', 'Desktop App'],
      description: 'Desktop chat application with real-time messaging.',
      images: ["assets/images/springtodo/Screenshot 2026-07-25 230921.png",
      "assets/images/springtodo/Screenshot 2026-07-25 230946.png",
      ]

    },
    {
      title: 'Student Task Manager',
      tag: 'React · JavaScript',
      tech: ['React', 'JavaScript'],
      description: 'Responsive task management application for students.',
      images: ["assets/images/sstudtask/Screenshot 2026-07-25 231443.png",
      "assets/images/sstudtask/Screenshot 2026-07-25 231529.png",
      "assets/images/sstudtask/Screenshot 2026-07-25 231630.png",
      "assets/images/sstudtask/Screenshot 2026-07-25 231707.png",

      ]
    },
    {
      title: 'Smart Billing System',
      tag: 'Python',
      tech: ['Python', 'Django', 'SQL'],
      description: 'Automated billing and invoice generation system — manage customers and products, place orders, and auto-calculate GST and totals per order.',
      images:["assets/images/smartbill/Screenshot 2026-07-25 231045.png",
      "assets/images/smartbill/Screenshot 2026-07-25 231112.png",
      "assets/images/smartbill/Screenshot 2026-07-25 231154.png",
      "assets/images/smartbill/Screenshot 2026-07-25 231221.png",
      "assets/images/smartbill/Screenshot 2026-07-25 231314.png",
      ]
    },
    {
      title: 'EDEX React Company Portfolio',
      tag: 'React',
      tech: ['React', 'JavaScript'],
      description: 'Company portfolio website built for EDEX using React.',
      images: ["assets/images/edex/Screenshot 2026-07-25 232412.png",
      "assets/images/edex/Screenshot 2026-07-25 232458.png",
      "assets/images/edex/Screenshot 2026-07-25 232520.png",
      "assets/images/edex/Screenshot 2026-07-25 232605.png",
      "assets/images/edex/Screenshot 2026-07-25 232643.png",
      "assets/images/edex/Screenshot 2026-07-25 232714.png",
      ]
    },
    {
      title: 'Company Website Portfolio',
      tag: 'HTML · CSS · JS',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      description: 'Company website portfolio built with HTML, CSS and JavaScript.',
      images: ["assets/images/landing/Screenshot 2026-07-25 232105.png",
        "assets/images/landing/Screenshot 2026-07-25 232143.png",
        "assets/images/landing/Screenshot 2026-07-25 232157.png",
        "assets/images/landing/Screenshot 2026-07-25 232209.png",
        "assets/images/landing/Screenshot 2026-07-25 232310.png",
      ]
    },
    {
      title: 'React Todo',
      tag: 'React',
      tech: ['React', 'JavaScript'],
      description: 'Todo list application built with React.',
      images: ["assets/images/springtodo/Screenshot 2026-07-25 230630.png",
        "assets/images/springtodo/Screenshot 2026-07-25 230824.png",
      ]
    },
    {
      title: 'Spring Boot Todo',
      tag: 'Spring Boot',
      tech: ['Java', 'Spring Boot', 'REST APIs'],
      description: 'Todo list application built with Spring Boot.',
      images: ["assets/images/edex/Screenshot 2026-07-25 232643.png",
      "assets/images/edex/Screenshot 2026-07-25 232714.png",]
    }
    ,
  ];

  function buildImagePaths(prefix, count) {
    const paths = [];
    for (let i = 1; i <= count; i++) {
      paths.push(`${prefix}${String(i).padStart(2, '0')}.png`);
    }
    return paths;
  }

  /* ---------------------------------------------------------
     RENDER PROJECT CARDS
     --------------------------------------------------------- */
  const grid = document.getElementById('projectsGrid');
  const INITIAL_VISIBLE = 4;

  function initials(title) {
    return title
      .split(' ')
      .filter(w => /^[A-Z0-9]/.test(w))
      .slice(0, 2)
      .map(w => w[0])
      .join('');
  }

  projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card' + (index < INITIAL_VISIBLE ? ' card-visible' : ' card-hidden');
    card.setAttribute('data-index', index);

    const thumbInner = project.images.length
      ? `<img src="${project.images[0]}" alt="${project.title} screenshot" loading="lazy">`
      : `<div class="project-thumb-placeholder">${initials(project.title)}</div>`;

    card.innerHTML = `
      <div class="project-thumb">
        ${thumbInner}
        <span class="project-thumb-tag">${project.tag}</span>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(index));
    grid.appendChild(card);
  });

  // reveal visible cards shortly after paint so CSS transition plays
  requestAnimationFrame(() => {
    document.querySelectorAll('.project-card.card-visible').forEach(c => c.classList.add('in-view'));
  });

  /* ---------------------------------------------------------
     SHOW MORE PROJECTS
     --------------------------------------------------------- */
  const showMoreBtn = document.getElementById('showMoreBtn');
  let expanded = false;

  showMoreBtn.addEventListener('click', () => {
    expanded = !expanded;
    const hiddenCards = document.querySelectorAll('.project-card.card-hidden');

    if (expanded) {
      hiddenCards.forEach((card, i) => {
        card.classList.remove('card-hidden');
        card.classList.add('card-visible');
        setTimeout(() => card.classList.add('in-view'), 40 * i);
      });
      showMoreBtn.innerHTML = `Show Fewer Projects
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
    } else {
      document.querySelectorAll('.project-card').forEach((card, i) => {
        if (i >= INITIAL_VISIBLE) {
          card.classList.remove('card-visible', 'in-view');
          card.classList.add('card-hidden');
        }
      });
      showMoreBtn.innerHTML = `Show More Projects
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  /* ---------------------------------------------------------
     PROJECT MODAL
     --------------------------------------------------------- */
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const modalGallery = document.getElementById('modalGallery');
  const modalClose = document.getElementById('modalClose');

  let currentGalleryImages = [];

  function openModal(index) {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalTech.innerHTML = project.tech.map(t => `<li>${t}</li>`).join('');

    currentGalleryImages = project.images;

    if (project.images.length) {
      modalGallery.innerHTML = project.images
        .map((src, i) => `<img src="${src}" alt="${project.title} screenshot ${i + 1}" data-i="${i}" loading="lazy">`)
        .join('');
      modalGallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => openLightbox(currentGalleryImages, parseInt(img.dataset.i, 10)));
      });
    } else {
      modalGallery.innerHTML = `<p style="color:var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">Screenshots for this project are coming soon.</p>`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  /* ---------------------------------------------------------
     LIGHTBOX GALLERY
     --------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');

  let lightboxImages = [];
  let lightboxIndex = 0;

  function openLightbox(images, index) {
    lightboxImages = images;
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function updateLightbox() {
    lightboxImg.src = lightboxImages[lightboxIndex];
    lightboxImg.alt = `Screenshot ${lightboxIndex + 1} of ${lightboxImages.length}`;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function showNext() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    updateLightbox();
  }
  function showPrev() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', showNext);
  lightboxPrev.addEventListener('click', showPrev);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    } else if (modal.classList.contains('open') && e.key === 'Escape') {
      closeModal();
    }
  });

  // mobile swipe for lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 40) { dx > 0 ? showPrev() : showNext(); }
  }, { passive: true });

  /* ---------------------------------------------------------
     TYPING ANIMATION — hero name / role
     --------------------------------------------------------- */
  const typeTarget = document.getElementById('typeTarget');
  const words = ['ARUNKUMAR T', 'Java Full Stack Developer'];
  let wordIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = words[wordIndex];

    if (!deleting) {
      charIndex++;
      typeTarget.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typeTarget.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeLoop, 300);
        return;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 90);
  }
  typeLoop();

  /* ---------------------------------------------------------
     NAV — scroll state, active link, mobile menu
     --------------------------------------------------------- */
  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkEls = document.querySelectorAll('.nav-link');
  const scrollProgress = document.getElementById('scrollProgress');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = `${(window.scrollY / docHeight) * 100}%`;

    let currentSection = 'home';
    document.querySelectorAll('section[id]').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) currentSection = section.id;
    });
    navLinkEls.forEach(link => {
      link.classList.toggle('active', link.dataset.section === currentSection);
    });
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinkEls.forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  /* ---------------------------------------------------------
     BACK TO TOP
     --------------------------------------------------------- */
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
