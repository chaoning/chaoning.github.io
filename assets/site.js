// Fill copyright years
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
// Close mobile menu after clicking a link
document.querySelectorAll('#menu a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('menu').classList.remove('open')));
