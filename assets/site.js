// Fill copyright years
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
// Close mobile menu after clicking a link
document.querySelectorAll('#menu a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('menu').classList.remove('open')));
// Obfuscated email links: the real address is never written to the page or DOM.
// The visible text stays in "user [at] domain" form; the mailto: link is only
// built the moment a human actually interacts with it (hover / focus / tap).
document.querySelectorAll('.eml').forEach(el => {
  const u = el.dataset.user, d = el.dataset.domain;
  if (!u || !d) return;
  const reveal = () => el.setAttribute('href', 'mailto:' + u + '@' + d);
  ['mouseenter', 'focus', 'touchstart'].forEach(ev =>
    el.addEventListener(ev, reveal, { once: true }));
});
