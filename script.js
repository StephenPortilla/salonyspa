  // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 68,
                    behavior: 'smooth'
                });
            });
        });
        
        // Form submission handling
        const appointmentForm = document.getElementById('appointmentForm');
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu reserva. Nos pondremos en contacto contigo pronto para confirmar tu cita.');
            this.reset();
        });
        
        // Responsive navigation toggle (would need additional HTML/CSS for full implementation)
        
        // Animation on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 12px rgba(219, 112, 147, 0.3)';
            } else {
                header.style.boxShadow = '0 4px 12px rgba(219, 112, 147, 0.2)';
            }
        });
        
        // Service cards animation
        const serviceCards = document.querySelectorAll('.service-card');
        const options = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);
        
        serviceCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });