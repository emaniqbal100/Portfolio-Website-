// ── SCROLL UTIL ─────────────────────────────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── NAVBAR ───────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const navBtns = document.querySelectorAll('[data-section]');
const sections = ['home','about','work','services','contact'];

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const pos = window.scrollY + 120;
  let active = 'home';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && pos >= el.offsetTop) active = id;
  }
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.section === active));
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const hamIcon    = document.getElementById('ham-icon');
const closeIcon  = document.getElementById('close-icon');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hamIcon.classList.toggle('hidden', menuOpen);
  closeIcon.classList.toggle('hidden', !menuOpen);
});
function closeMobile() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  hamIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

// ── PARTICLES ────────────────────────────────────────────────────────────────
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 14; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 5 + 2;
  p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*92+4}%;top:${Math.random()*80+10}%;animation-duration:${4+Math.random()*5}s;animation-delay:${Math.random()*4}s;`;
  particlesContainer.appendChild(p);
}

// ── TYPEWRITER ───────────────────────────────────────────────────────────────
const roles = ['UI/UX Designer','Mobile App Designer','Web Designer','Visual Storyteller'];
let roleIndex = 0, charIndex = 0, typing = true;
const tw = document.getElementById('typewriter');

function typeStep() {
  const cur = roles[roleIndex];
  if (typing) {
    if (charIndex < cur.length) {
      tw.innerHTML = cur.slice(0, ++charIndex) + '<span class="cursor">|</span>';
      setTimeout(typeStep, 60);
    } else {
      typing = false; setTimeout(typeStep, 1800);
    }
  } else {
    if (charIndex > 0) {
      tw.innerHTML = cur.slice(0, --charIndex) + '<span class="cursor">|</span>';
      setTimeout(typeStep, 35);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      typing = true; setTimeout(typeStep, 100);
    }
  }
}
typeStep();

// ── SKILLS ────────────────────────────────────────────────────────────────────
const skills = [
  { name:'UI/UX Design',      level:95, color:'#A855F7' },
  { name:'Mobile App Design', level:92, color:'#EC4899' },
  { name:'Web Design',        level:88, color:'#8B5CF6' },
  { name:'Figma',             level:97, color:'#F97316' },
  { name:'Prototyping',       level:90, color:'#06B6D4' },
  { name:'User Research',     level:85, color:'#10B981' },
];
const skillsList = document.getElementById('skillsList');
skills.forEach(s => {
  skillsList.innerHTML += `
    <div class="skill-item">
      <div class="skill-row">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct" style="color:${s.color}">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-bar" data-level="${s.level}" style="background:linear-gradient(90deg,${s.color}80,${s.color});"></div>
      </div>
    </div>`;
});

// ── STRENGTHS ─────────────────────────────────────────────────────────────────
const strengths = [
  { icon:'🎯', title:'Pixel-Perfect Precision',  desc:'Every element placed with intention and exactness.'        },
  { icon:'♿', title:'Accessibility First',       desc:'Inclusive design that works for everyone, always.'         },
  { icon:'📱', title:'Thumb-Driven Layouts',      desc:'Mobile experiences crafted for real-world usage.'          },
  { icon:'✨', title:'Micro-Interactions',        desc:'Subtle animations that bring interfaces to life.'          },
  { icon:'🔄', title:'Seamless Flows',            desc:'Intuitive user journeys with zero friction.'              },
  { icon:'🧹', title:'Minimalist UI',             desc:'Clean aesthetics that let content breathe.'               },
];
const strengthsList = document.getElementById('strengthsList');
strengths.forEach(s => {
  strengthsList.innerHTML += `
    <div class="strength-card">
      <div class="strength-icon-wrap">${s.icon}</div>
      <div><div class="strength-name">${s.title}</div><div class="strength-desc">${s.desc}</div></div>
    </div>`;
});

// ── PROJECTS ──────────────────────────────────────────────────────────────────
const IMG = 'image/';
const projects = [
  { id:1,  title:'Optic to Optic',       subtitle:'See the Difference in Every Detail',  category:'Mobile App',   tags:['Medical & Health-Tech','Medical & Health-Tech-Commerce','Lifestyle & Fashion' , 'Andriod'],      image: IMG+'opticToOptic.png',  accent:'#730FBF', desc:'Optic to Optic (O2O Glasses) offers a clean and user-friendly digital eyewear experience that simplifies complex tasks like lens selection and prescription input through a guided flow. Its minimal, premium design builds trust and reduces confusion, making the process intuitive even for first-time users. While the concept is strong and cohesive, adding features like AR try-on and advanced personalization could further enhance usability and engagement. Overall, it presents a well-balanced blend of functionality and modern design.',      year:'2024', featured:true },
  { id:2,  title:'Maison',       subtitle:'Curated Luxury',     category:'Mobile App',   tags:['Mobile','E-Commerce','Shopping', 'Fashion Detail' ,'Minimalist Modern & Editorial UI'],      image: IMG+'Maison.png',  accent:'#EC4899', desc:'Maison is a premier "Curated Luxury" mobile ecosystem engineered to elevate the everyday through meticulously considered, high-fidelity design. The platform streamlines the high-end shopping journey by merging a sophisticated minimalist aesthetic with personalized, research-driven features like seamless social authentication and bespoke gift-fulfillment services',               year:'2024' },
  { id:3,  title:'Lush Lab',      subtitle:'Where Art meets Beauty',           category:[ 'Landing Page', 'Web Design'], tags:[ 'Beauty' ,'Cosmetics' ,'Wellness','Skincare','Styling'],                image: IMG+'Lushlab.png',  accent:'#06B6D4', desc:'LushLab is a sophisticated beauty and wellness platform that merges the precision of design with the elegance of personal aesthetics. The landing page features a seamless appointment booking system for high-end services, including professional makeup artistry, hair styling, and skincare treatments. By focusing on editorial looks and personal transformations, LushLab provides a stunning space where expert techniques and timeless designs create a premium salon experience.',        year:'2025', featured:true },
  { id:4,  title:'Forge',  subtitle:'Fuel your fitness. Challenge your limits.',     category:'Mobile App',   tags:['Health & Fitness','Data Analytics & Health Tracking' , 'Mobile Wellness Ecosystem','Activity & Goal Monitoring'],      image: IMG+'Forge (1).png',  accent:'#10B981', desc:'Forge is a high-energy, data-driven fitness ecosystem designed to help users "Fuel Your Fitness and Challenge Your Limits." The application utilizes a vibrant orange and purple color palette to create a motivating atmosphere, focusing on personalized fitness challenges and gamified progress tracking. As shown in image_8fa880.png, the platform features an intuitive dashboard for weekly reports, caloric data, and activity minutes, alongside a rewards system designed to build consistent workout streaks. With a robust design system built on Poppins typography, Forge provides a professional, seamless interface that transitions from detailed personal data input to interactive, community-driven challenges.', year:'2024' },
  { id:5,  title:'Bhook Stop', subtitle:'Curating your Cravings',       categories:['Landing Page', 'E-Commerce', 'Mobile App' ] , tags:['Food & Drink','On-Demand Services','Productivity & Utility'],      image: IMG+'Bhookstop (1).png',  accent:'#F97316', desc:'Bhookstop is a modern, high-tech food platform designed to bridge the gap between hungry users and their favorite meals with a seamless digital experience. As an entry-level UI/UX designer, you are building this to showcase a fast, user-friendly interface that prioritizes visual appeal and functional efficiency.',         year:'2024' },
  { id:6,  title:'Food Delivery App',    subtitle:'Restaurant Ordering Platform',   category:'Mobile App',   tags:['Mobile','Food','iOS'],            image: IMG+'eb82f07904319541705cd0d014b1154d085191a9.png',  accent:'#EF4444', desc:'Delicious food delivery app with smart filters and real-time tracking.',             year:'2025' },
  { id:7,  title:'Startup Landing Page', subtitle:'Tech Product Website',           category:'Landing Page', tags:['Web','Startup','SaaS'],           image: IMG+'e7c9d3af57f3a46b5a3af1b85f4fbc66ba34754d.png',  accent:'#8B5CF6', desc:'High-converting startup landing page with animated hero sections.',                  year:'2024' },
  { id:8,  title:'Optic App Screens',    subtitle:'Full App Screen Set',            category:'Mobile App',   tags:['Mobile','Screens','UI'],          image: IMG+'1cd30b5407d9bf347c605120a93adaa9d4078c3b.png',  accent:'#344C94', desc:'Complete set of screens for the Optic to Optic optical showroom platform.',          year:'2024' },
  { id:9,  title:'Finance Dashboard',    subtitle:'Web App Interface',              category:'Web Design',   tags:['Web','Dashboard','Finance'],      image: IMG+'8086948b74017170daeb5476d851cba399dd8c5c.png',  accent:'#F59E0B', desc:'Clean, data-rich finance dashboard with intuitive data visualization.',             year:'2025' },
  { id:10, title:'Laptop Showcase',      subtitle:'Product Presentation',           category:'Web Design',   tags:['Web','Product','3D'],             image: IMG+'b3d25d71eef50e30f9482f57f9db8738296722a1.png',  accent:'#A855F7', desc:'Stunning product website with 3D-inspired scroll animations.',                      year:'2025' },
  { id:11, title:'Pixel App Design',     subtitle:'Android Design System',          category:'Mobile App',   tags:['Android','Design System'],        image: IMG+'772ac3f52cf0277b2b483e14384e8cfc6f9888a4.png',  accent:'#06B6D4', desc:'Cohesive Android app design system built for Google Pixel.',                       year:'2024' },
  { id:12, title:'E-Commerce Website',   subtitle:'Modern Shop Interface',          category:'E-Commerce',   tags:['Web','E-Commerce','Shop'],        image: IMG+'490f666c3c00316d4255b40284e756aa626b6133.png',  accent:'#EC4899', desc:'Complete e-commerce website design with product listings and checkout flows.',      year:'2025' },
];

let categories = ['All','Mobile App','Web Design','E-Commerce','Landing Page', 'Admin Dashboard'] ;
let activeCategory = 'All';
const filtersEl = document.getElementById('filters');
const gridEl    = document.getElementById('projectsGrid');

function renderFilters() {
  filtersEl.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = 'filter-btn' + (cat === activeCategory ? ' active' : '');
    btn.onclick = () => { activeCategory = cat; renderFilters(); renderProjects(); };
    filtersEl.appendChild(btn);
  });
}

function renderProjects() {
  // Logic update: Ab hum check karenge ke activeCategory array ke andar hai ya nahi
  const filtered = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => {
        // Agar category array hai toh includes check karein, warna normal comparison
        if (Array.isArray(p.category)) {
          return p.category.includes(activeCategory);
        }
        return p.category === activeCategory;
      });

  gridEl.innerHTML = '';
  
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card' + (p.featured ? ' featured' : '');
    
    // Smooth animation setup
    card.style.cssText = `opacity:0;transform:translateY(30px);transition:opacity 0.5s ease ${i*0.06}s,transform 0.5s cubic-bezier(.22,1,.36,1) ${i*0.06}s,border-color .3s,transform .3s`;
    
    // Hover effects using your accent colors
    card.onmouseenter = () => { card.style.borderColor = p.accent+'60'; card.style.transform='translateY(-4px)'; };
    card.onmouseleave = () => { card.style.borderColor = 'rgba(255,255,255,0.08)'; card.style.transform=''; };
    
    card.innerHTML = `
      <div class="project-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,${p.accent}30,${p.accent}10)'"/>
        <div class="project-overlay" style="background:linear-gradient(135deg,${p.accent}CC,${p.accent}80);">
          <div class="project-overlay-icon">
            <svg width="22" height="22" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
        ${p.featured ? '<div class="featured-badge">✦ Featured</div>' : ''}
        <div class="year-badge" style="background:${p.accent}30;color:${p.accent};border:1px solid ${p.accent}50;">${p.year}</div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <div>
            <div class="project-title">${p.title}</div>
            <div class="project-subtitle">${p.subtitle}</div>
          </div>
          <div class="project-arrow" style="background:${p.accent}20;color:${p.accent};">
            <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag" style="background:${p.accent}15;color:${p.accent};border:1px solid ${p.accent}30;">${t}</span>`).join('')}
        </div>
      </div>`;
      
    gridEl.appendChild(card);
    
    requestAnimationFrame(() => requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = '';
    }));
  });
}

renderFilters();
renderProjects();

// ── SERVICES ──────────────────────────────────────────────────────────────────
const svgIcons = {
  smartphone:`<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  monitor:   `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  palette:   `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  layers:    `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  zap:       `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  users:     `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

const serviceData = [
  { icon:'smartphone', title:'Mobile App Design',  desc:'Thumb-friendly, pixel-perfect mobile interfaces for iOS and Android. From concept to complete design systems.',    tags:['iOS','Android','Prototyping','Design System'], accent:'#A855F7', img:'https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { icon:'monitor',    title:'Web UI/UX Design',   desc:'Conversion-focused web interfaces with modern aesthetics. Landing pages, dashboards, and SaaS products.',         tags:['Landing Pages','SaaS','Dashboards','E-Commerce'], accent:'#EC4899', img:'https://images.unsplash.com/photo-1547082299-de196ea013d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { icon:'palette',    title:'Brand Identity',     desc:'Cohesive visual identities that communicate your brand story. Logos, color palettes, and style guides.',          tags:['Logo Design','Brand Guidelines','Visual Identity'], accent:'#F97316', img:'https://images.unsplash.com/photo-1759390304277-df4f95509186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { icon:'layers',     title:'Figma Prototypes',   desc:'Interactive high-fidelity prototypes for user testing and developer handoff. Auto-layout, components, and variables.', tags:['Components','Auto-Layout','Handoff','Testing'], accent:'#06B6D4', img:'https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { icon:'zap',        title:'AI-Powered Design',  desc:'Leveraging cutting-edge AI tools (ChatGPT, Gemini) to accelerate design workflows and generate innovative concepts.', tags:['ChatGPT','Gemini','Rapid Prototyping'], accent:'#10B981', img:'https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
  { icon:'users',      title:'User Research & UX', desc:'User persona creation, journey mapping, and usability testing to create experiences that truly resonate.',           tags:['User Personas','Journey Maps','Usability Testing'], accent:'#8B5CF6', img:'https://images.unsplash.com/photo-1576153192286-defd01e1e4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
];

const servicesGrid = document.getElementById('servicesGrid');
serviceData.forEach(s => {
  servicesGrid.innerHTML += `
    <div class="service-card">
      <div class="service-img">
        <img src="${s.img}" alt="${s.title}" loading="lazy"/>
        <div class="service-img-overlay" style="background:linear-gradient(135deg,${s.accent}50,transparent);"></div>
        <div class="service-img-bottom"></div>
        <div class="service-card-icon" style="background:${s.accent}25;color:${s.accent};border:1px solid ${s.accent}50;">${svgIcons[s.icon]}</div>
      </div>
      <div class="service-hover-glow" style="background:${s.accent}25;"></div>
      <div class="service-body">
        <div class="service-title">${s.title}</div>
        <div class="service-desc">${s.desc}</div>
        <div class="service-tags">${s.tags.map(t=>`<span class="service-tag" style="background:${s.accent}15;color:${s.accent};border:1px solid ${s.accent}30;">${t}</span>`).join('')}</div>
      </div>
    </div>`;
});

// ── PROCESS ───────────────────────────────────────────────────────────────────
const processSteps = [
  { num:'01', title:'Discover', desc:'Deep dive into your goals, users, and competitive landscape.',               icon:'🔍' },
  { num:'02', title:'Define',   desc:'Synthesize research into clear problem statements and user flows.',          icon:'📐' },
  { num:'03', title:'Design',   desc:'Create wireframes, high-fidelity mockups, and interactive prototypes.',      icon:'✏️' },
  { num:'04', title:'Deliver',  desc:'Pixel-perfect handoff with developer specs, assets, and guidelines.',        icon:'🚀' },
];
const processGrid = document.getElementById('processGrid');
processSteps.forEach((step, i) => {
  processGrid.innerHTML += `
    <div class="process-card">
      ${i < 3 ? '<div class="process-connector"></div>' : ''}
      <div class="process-emoji">${step.icon}</div>
      <div class="process-num">${step.num}</div>
      <div class="process-title">${step.title}</div>
      <div class="process-desc">${step.desc}</div>
    </div>`;
});

// ── FAQ ────────────────────────────────────────────────────────────────────────
const faqs = [
  { q:"What's your typical turnaround time?",       a:"Most projects take 3–7 days depending on complexity. Rush delivery is available for urgent needs." },
  { q:"Do you provide source Figma files?",          a:"Yes! All projects include complete Figma source files with organized layers and components." },
  { q:"What information do you need to start?",      a:"Brand guidelines (if any), project brief, target audience info, and reference styles you like." },
];
const faqList = document.getElementById('faqList');
faqs.forEach(faq => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-btn">
      <span class="faq-q">${faq.q}</span>
      <span class="faq-arrow">↓</span>
    </button>
    <div class="faq-answer"><p>${faq.a}</p></div>`;
  item.querySelector('.faq-btn').addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
  faqList.appendChild(item);
});

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
function handleSubmit() {
  const name  = document.getElementById('inputName').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  if (!name || !email) { alert('Please fill in your name and email.'); return; }
  const btn = document.getElementById('btnSubmit');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Sending…';
  setTimeout(() => {
    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successState').classList.add('show');
  }, 1500);
}
function resetForm() {
  ['inputName','inputEmail','inputProject','inputMessage'].forEach(id => document.getElementById(id).value='');
  document.getElementById('formWrap').style.display = 'block';
  document.getElementById('successState').classList.remove('show');
  const btn = document.getElementById('btnSubmit');
  btn.disabled = false;
  btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
}

// ── FOOTER YEAR ───────────────────────────────────────────────────────────────
document.getElementById('footerYear').textContent = new Date().getFullYear();

// ── INTERSECTION OBSERVER — reveals + skill bars ──────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.classList.contains('skills-card')) {
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    }
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '-40px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .skills-card').forEach(el => observer.observe(el));
