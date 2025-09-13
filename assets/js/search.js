async function loadIndex() {
  const res = await fetch('/data/processes.json');
  return res.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const index = await loadIndex();
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    results.innerHTML = '';
    if (!q) return;
    const matches = index.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.keywords && p.keywords.join(' ').toLowerCase().includes(q))
    );
    matches.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<a href="${p.url}">${p.title}</a>`;
      results.appendChild(div);
    });
  });
});
