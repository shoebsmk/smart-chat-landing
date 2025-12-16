// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// Form submission handler
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        // Better email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && emailRegex.test(email)) {
            // Here you would typically send the data to a server
            alert('Thank you! We\'ll be in touch soon.');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
            emailInput.focus();
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and pricing cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.everything-card, .pricing-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });

    // Chat Assist section animations
    const chatAssistText = document.querySelector('.chat-assist-text');
    const chatAssistVisual = document.querySelector('.chat-assist-visual');
    
    if (chatAssistText) {
        chatAssistText.style.opacity = '0';
        chatAssistText.style.transform = 'translateY(20px)';
        chatAssistText.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(chatAssistText);
    }
    
    if (chatAssistVisual) {
        chatAssistVisual.style.opacity = '0';
        chatAssistVisual.style.transform = 'translateY(20px)';
        chatAssistVisual.style.transition = 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s';
        observer.observe(chatAssistVisual);
    }

    // Stats section animations with staggered delays
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Privacy/Security section animations
    const privacyBadge = document.querySelector('.privacy-badge');
    const privacyTitle = document.querySelector('.privacy-title');
    const privacySubtitle = document.querySelector('.privacy-subtitle');
    const privacyCards = document.querySelectorAll('.privacy-card');
    
    if (privacyBadge) {
        privacyBadge.style.opacity = '0';
        privacyBadge.style.transform = 'translateY(20px)';
        privacyBadge.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(privacyBadge);
    }
    
    if (privacyTitle) {
        privacyTitle.style.opacity = '0';
        privacyTitle.style.transform = 'translateY(20px)';
        privacyTitle.style.transition = 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s';
        observer.observe(privacyTitle);
    }
    
    if (privacySubtitle) {
        privacySubtitle.style.opacity = '0';
        privacySubtitle.style.transform = 'translateY(20px)';
        privacySubtitle.style.transition = 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s';
        observer.observe(privacySubtitle);
    }
    
    privacyCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${0.3 + index * 0.1}s, transform 0.6s ease-out ${0.3 + index * 0.1}s`;
        observer.observe(card);
    });

    // CTA Purple section animations
    const ctaPurpleContent = document.querySelector('.cta-purple-content');
    if (ctaPurpleContent) {
        ctaPurpleContent.style.opacity = '0';
        ctaPurpleContent.style.transform = 'translateY(20px)';
        ctaPurpleContent.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(ctaPurpleContent);
    }

    // CTA section animations
    const ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        ctaContent.style.opacity = '0';
        ctaContent.style.transform = 'translateY(20px)';
        ctaContent.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(ctaContent);
    }
});

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Phone mockup animation on hero section
const phoneMockups = document.querySelectorAll('.phone');
if (phoneMockups.length > 0) {
    phoneMockups.forEach((phone, index) => {
        phone.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// ============================================
// CAROUSEL FUNCTIONALITY
// Scroll detection, smooth scrolling, and accessibility
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.getElementById('carousel-wrapper');
    const carouselTrack = document.getElementById('carousel-track');
    
    if (!carouselWrapper || !carouselTrack) return;
    
    // Function to update scroll indicators
    const updateScrollIndicators = () => {
        const scrollLeft = carouselWrapper.scrollLeft;
        const scrollWidth = carouselWrapper.scrollWidth;
        const clientWidth = carouselWrapper.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        // Update classes based on scroll position
        if (scrollLeft <= 5) {
            carouselWrapper.classList.add('scrolled-left');
            carouselWrapper.classList.remove('scrolled-right');
        } else if (scrollLeft >= maxScroll - 5) {
            carouselWrapper.classList.add('scrolled-right');
            carouselWrapper.classList.remove('scrolled-left');
        } else {
            carouselWrapper.classList.remove('scrolled-left');
            carouselWrapper.classList.remove('scrolled-right');
        }
    };
    
    // Initial check
    updateScrollIndicators();
    
    // Update on scroll
    let scrollTimeout;
    carouselWrapper.addEventListener('scroll', () => {
        // Debounce scroll events for better performance
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateScrollIndicators, 10);
    });
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateScrollIndicators, 100);
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isScrolling = false;
    
    carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isScrolling = false;
    }, { passive: true });
    
    carouselWrapper.addEventListener('touchmove', () => {
        isScrolling = true;
    }, { passive: true });
    
    carouselWrapper.addEventListener('touchend', (e) => {
        if (!isScrolling) return;
        touchEndX = e.changedTouches[0].screenX;
        updateScrollIndicators();
    }, { passive: true });
    
    // Keyboard navigation support
    carouselWrapper.setAttribute('tabindex', '0');
    carouselWrapper.setAttribute('role', 'region');
    carouselWrapper.setAttribute('aria-label', 'Screenshots carousel');
    
    carouselWrapper.addEventListener('keydown', (e) => {
        const scrollAmount = 320; // Width of one carousel item + gap
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                carouselWrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
                break;
            case 'ArrowRight':
                e.preventDefault();
                carouselWrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                break;
            case 'Home':
                e.preventDefault();
                carouselWrapper.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
                break;
            case 'End':
                e.preventDefault();
                carouselWrapper.scrollTo({
                    left: carouselWrapper.scrollWidth,
                    behavior: 'smooth'
                });
                break;
        }
        
        // Update indicators after keyboard navigation
        setTimeout(updateScrollIndicators, 300);
    });
    
    // Smooth scroll on carousel item click (optional enhancement)
    const carouselItems = carouselTrack.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const itemWidth = item.offsetWidth;
            const gap = 24; // 1.5rem gap
            const scrollPosition = index * (itemWidth + gap);
            
            carouselWrapper.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Intersection Observer for carousel items animation
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe carousel items for fade-in animation
    carouselItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        carouselObserver.observe(item);
    });

    // ============================================
    // TESTIMONIALS SECTION ANIMATIONS
    // Fade-in animation for testimonial cards
    // ============================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialCards.length > 0) {
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe testimonial cards for fade-in animation
        testimonialCards.forEach((card) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            testimonialObserver.observe(card);
        });
    }
});

