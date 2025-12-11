// Main Wall Climbing Gym - JavaScript Interactions

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initParticleBackground();
    initTestimonialSlider();
    initMobileMenu();
    initSmoothScrolling();
    initInteractiveElements();
});

// Scroll-triggered animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger animation for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Particle background system using p5.js
function initParticleBackground() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    // Create canvas for particles
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections between nearby particles
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.save();
                    ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Testimonial slider using Splide
function initTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;

    new Splide('#testimonial-slider', {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        gap: '2rem',
        breakpoints: {
            768: {
                arrows: false,
            }
        }
    }).mount();
}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Animate menu items
        if (!mobileMenu.classList.contains('hidden')) {
            const menuItems = mobileMenu.querySelectorAll('a');
            anime({
                targets: menuItems,
                translateY: [-20, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Interactive elements and hover effects
function initInteractiveElements() {
    // Button hover animations
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });

        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });
    });

    // Card hover effects
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                translateY: -8,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                translateY: 0,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });

    // Equipment card interactions
    document.querySelectorAll('.equipment-card').forEach(card => {
        card.addEventListener('click', () => {
            // Add click animation
            anime({
                targets: card,
                scale: [1, 0.95, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });

            // Show coming soon notification
            showNotification('Detailed facility information coming soon!');
        });
    });

    // CTA button interactions
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.includes('Plan Your Visit') || 
            btn.textContent.includes('Book Your Visit') ||
            btn.textContent.includes('View Classes')) {
            btn.addEventListener('click', () => {
                // Add click animation
                anime({
                    targets: btn,
                    scale: [1, 0.95, 1],
                    duration: 200,
                    easing: 'easeOutQuart'
                });

                // Show coming soon notification
                showNotification('Booking system coming soon! Please call 061 324 2691 to book your visit.');
            });
        }
    });
}

// Notification system
function showNotification(message) {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = 'notification fixed top-24 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50';
    notification.innerHTML = `
        <div class="flex items-start">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="ml-3 flex-1">
                <p class="text-sm text-gray-700">${message}</p>
            </div>
            <div class="ml-4 flex-shrink-0">
                <button class="text-gray-400 hover:text-gray-600" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }
        });
    }, 5000);
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('#home');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Initialize parallax after DOM load
document.addEventListener('DOMContentLoaded', initParallax);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
    const scrolled = window.pageYOffset;
    const navbar = document.querySelector('nav');
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(250, 250, 250, 0.98)';
    } else {
        navbar.style.background = 'rgba(250, 250, 250, 0.95)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Loading animation
window.addEventListener('load', () => {
    // Hide loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        anime({
            targets: loader,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuart',
            complete: () => loader.remove()
        });
    }

    // Animate hero elements
    anime.timeline()
        .add({
            targets: '.fade-in',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutQuart'
        });
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && callback) {
        callback(element);
    }
    return element;
}

// Initialize error handling for critical elements
document.addEventListener('DOMContentLoaded', () => {
    const criticalElements = [
        '#particle-container',
        '#testimonial-slider',
        '#mobile-menu-btn',
        '#mobile-menu'
    ];

    criticalElements.forEach(selector => {
        safeQuerySelector(selector);
    });
});