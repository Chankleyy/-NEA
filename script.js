// Basic script for the boilerplate
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  const demoBtn = document.getElementById('demoBtn');
  const actionTwo = document.getElementById('actionTwo');
  const actionThree = document.getElementById('actionThree');
  const themeToggle = document.getElementById('themeToggle');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (demoBtn) {
    demoBtn.addEventListener('click', function () {
      // Simple accessibility-conscious feedback
      demoBtn.disabled = true;
      demoBtn.textContent = 'Clicked ✓';
      setTimeout(() => {
        demoBtn.disabled = false;
        demoBtn.textContent = 'Click me';
      }, 1200);
    });
  }

  function tempFeedback(btn, label){
    if (!btn) return;
    btn.disabled = true;
    const prev = btn.textContent;
    btn.textContent = label;
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = prev;
    }, 1000);
  }

  if (actionTwo) {
    actionTwo.addEventListener('click', () => tempFeedback(actionTwo, 'Actioned'));
  }

  if (actionThree) {
    actionThree.addEventListener('click', () => tempFeedback(actionThree, 'Done'));
  }

  // Theme toggle (persists in localStorage)
  const body = document.body;
  const LS_KEY = 'boilerplate:theme';
  const saved = localStorage.getItem(LS_KEY);
  if (saved === 'dark') body.classList.add('dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark');
      localStorage.setItem(LS_KEY, isDark ? 'dark' : 'light');
    });
  }
});