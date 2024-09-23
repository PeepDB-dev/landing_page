document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.github.com/repos/PeepDB-dev/peepdb')
        .then(response => response.json())
        .then(data => {
            document.getElementById('star-count').textContent = data.stargazers_count;
        })
        .catch(error => {
            console.error('Error fetching GitHub stars:', error);
            document.getElementById('star-count').textContent = 'N/A';
        });
});