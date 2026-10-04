const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Buka menu');
  navigation.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.querySelector('#year').textContent = new Date().getFullYear();

// All content remains visible if JavaScript is unavailable.
const pricingButtons = [...document.querySelectorAll('[data-pricing]')];
function selectPricing(name, animate = true) {
  pricingButtons.forEach(button => {
    const selected = button.dataset.pricing === name;
    button.setAttribute('aria-pressed', String(selected));
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.hidden = !selected;
    panel.classList.remove('panel-enter');
    if (selected && animate) {
      void panel.offsetWidth;
      panel.classList.add('panel-enter');
    }
  });
}
pricingButtons.forEach(button => button.addEventListener('click', () => selectPricing(button.dataset.pricing)));
selectPricing('business', false);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.about-grid > div, .section-heading, .service-card, .pricing-toolbar, .pricing-context, .photo-card, .industry-grid > div, .commitment-grid > div, .faq-grid > div, .contact-title, .contact-grid > article').forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
    revealObserver.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
      revealObserver.disconnect();
    }
  });
}

const progress = document.querySelector('.scroll-progress');
const header = document.querySelector('.header');
let scrollScheduled = false;
function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0})`;
  header.classList.toggle('scrolled', window.scrollY > 20);
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    window.requestAnimationFrame(updateScroll);
  }
}, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigation.querySelectorAll('a').forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}
