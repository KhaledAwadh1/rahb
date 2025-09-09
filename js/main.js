// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navItems = document.querySelector('.nav-items');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    if (mobileMenuButton && navItems && hamburger) {
        mobileMenuButton.addEventListener('click', function() {
            navItems.classList.toggle('mobile-open');
            hamburger.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navItems.classList.remove('mobile-open');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !navItems.contains(event.target)) {
                navItems.classList.remove('mobile-open');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const mobile = formData.get('mobile');
            const email = formData.get('email');
            
            // Basic validation
            if (!name || !mobile || !email) {
                alert('يرجى ملء جميع الحقول المطلوبة');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح');
                return;
            }
            
            // Mobile validation (basic)
            const mobileRegex = /^[0-9]{9,15}$/;
            if (!mobileRegex.test(mobile)) {
                alert('يرجى إدخال رقم جوال صحيح');
                return;
            }
            
            // Simulate form submission
            alert('تم تسجيل اهتمامك بنجاح! سنتواصل معك قريباً');
            contactForm.reset();
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = '#ffffff';
                navbar.style.backdropFilter = 'none';
            }
        });
    }
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards and other elements
    const cards = document.querySelectorAll('.project-card, .feature-card, .card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Project filter functionality (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card-container');
    
    if (filterTabs.length > 0 && projectCards.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading class from body if it exists
    document.body.classList.remove('loading');
    
    // Add loaded class for CSS animations
    document.body.classList.add('loaded');
});

// Handle image loading errors
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Set a placeholder or default image
            this.src = 'assets/images/placeholder.jpg';
            this.alt = 'Image not available';
        });
    });
});
