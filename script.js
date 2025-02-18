document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#expertSearch');
    setTimeout(() => {
        searchInput.classList.add('loaded');
    }, 500);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--index', index);
                entry.target.classList.add('animate');
                entry.target.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.expert-card').forEach(card => {
        observer.observe(card);
    });
    document.querySelectorAll('.expert-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/10}deg) rotateY(${-(x - rect.width/2)/10}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
        const slides = document.querySelector('.slides');
        let currentSlide = 0;

        function showSlide(index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }
        

        function nextSlide() {
            currentSlide = (currentSlide + 1) % 3;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 5000);
        function showPage(pageId) {
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
        }
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
        function toggleFAQ(element) {
            element.nextElementSibling.style.display = element.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        }

        function navigateToPage() {
            window.location.href = "newPage.html";
        }
