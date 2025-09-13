document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const resultsList = document.getElementById('search-results');

  fetch('/data/processes.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(processes => {
      function search() {
        const query = searchInput.value.trim().toLowerCase();
        resultsList.innerHTML = '';
        if (!query) {
          return;
        }
        const matches = processes.filter(item =>
          ['title', 'keywords', 'description', 'objective'].some(field => {
            const value = item[field];
            if (!value) return false;
            if (Array.isArray(value)) {
              return value.some(v => v.toLowerCase().includes(query));
            }
            return String(value).toLowerCase().includes(query);
          })
        );

        resultsList.innerHTML = matches
          .map(match => `<li>${match.title}</li>`)
          .join('');
      }

      searchInput.addEventListener('input', search);
    })
    .catch(error => {
      console.error('Failed to fetch search data:', error);
      alert('Failed to load search index.');
    });
});
