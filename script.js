document.addEventListener('DOMContentLoaded', (event) => {
    // Fetch GitHub stars
    fetch('https://api.github.com/repos/PeepDB-dev/peepdb')
        .then(response => response.json())
        .then(data => {
            document.getElementById('star-count').textContent = data.stargazers_count;
        })
        .catch(error => {
            console.error('Error fetching GitHub stars:', error);
            document.getElementById('star-count').textContent = 'N/A';
        });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate feature items on scroll
    const featureItems = document.querySelectorAll('.feature-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    featureItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});