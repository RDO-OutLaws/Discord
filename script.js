// Menu button functionality
document.querySelector('.menu-button').addEventListener('click', function() {
    alert('Menu coming soon!');
});

// Sign in button functionality
document.querySelector('.signin-button').addEventListener('click', function() {
    alert('Sign in page coming soon!');
});

// CTA Buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent.trim();
        if (text.includes('Join the Community')) {
            alert('Redirecting to community page...');
        } else if (text.includes('Learn more')) {
            alert('Redirecting to community info...');
        } else if (text.includes('Join The Team')) {
            alert('Redirecting to team application...');
        }
    });
});

// Feedback button
document.querySelector('.feedback-btn').addEventListener('click', function() {
    alert('Thank you for your interest! Feedback form coming soon.');
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all buttons and content elements
document.querySelectorAll('.btn, .breadcrumb').forEach(el => {
    observer.observe(el);
});
