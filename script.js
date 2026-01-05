document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
        setTimeout(() => (btn.textContent = 'Copy'), 1200);
      } catch {
        alert('Copy failed. Please copy manually: ' + text);
      }
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
