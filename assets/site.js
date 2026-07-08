// Fill copyright years
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
// Close mobile menu after clicking a link
document.querySelectorAll('#menu a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('menu').classList.remove('open')));
// Assemble obfuscated email addresses (kept out of the raw HTML to deter scrapers)
document.querySelectorAll('.eml').forEach(el => {
  const u = el.dataset.user, d = el.dataset.domain;
  if (!u || !d) return;
  const addr = u + '@' + d;
  el.setAttribute('href', 'mailto:' + addr);
  if (el.dataset.text !== undefined) el.textContent = addr;
});
