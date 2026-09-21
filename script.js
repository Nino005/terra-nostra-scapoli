const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll);
onScroll();

const toggle = document.querySelector('.nav-toggle');
const mobileLinks = document.querySelector('.mobile-links');
toggle?.addEventListener('click', () => {
  const open = mobileLinks.classList.toggle('show');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mobileLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileLinks.classList.remove('show');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const form = document.querySelector('.prenota-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form-success')?.classList.add('show');
  form.reset();
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
