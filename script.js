// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding nav link
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Service Booking
function bookSession(sessionType) {
    const sessionTypes = {
        'group': 'Online Group Session',
        'coaching': 'Holistic Coaching Session',
        'crisis': 'Crisis Support'
    };
    
    const sessionName = sessionTypes[sessionType] || 'Session';
    alert(`Thank you for your interest in booking a ${sessionName}! In a full implementation, this would redirect to our booking system or open a scheduling modal. Please contact us directly to schedule your session.`);
    showPage('contact');
}

// Event Participation
function joinEvent(eventType) {
    const eventTypes = {
        'meditation': 'Morning Meditation',
        'garden': 'Community Garden Project',
        'donation': 'Donation Drive',
        'mingle': 'Monthly Mix & Mingle',
        'family': 'Family Support Circle'
    };
    
    const eventName = eventTypes[eventType] || 'Community Event';
    alert(`Wonderful! You're interested in joining our ${eventName}. In a full implementation, this would open a registration form or add the event to your calendar. We'll be in touch with more details!`);
    showPage('newsletter');
}

// Donation Handling
function donate(donationType) {
    const donationTypes = {
        'onetime': 'One-Time Blessing',
        'monthly': 'Monthly Guardian Program',
        'lifetime': 'Lifetime Advocate Program'
    };
    
    const donationName = donationTypes[donationType] || 'Donation';
    alert(`Thank you for choosing to support our mission through the ${donationName}! In a full implementation, this would redirect to our secure donation platform. Your generosity creates ripples of healing throughout our community.`);
}

// Support Options
function supportOption(optionType) {
    const supportTypes = {
        'store': 'Sacred Path Healing Store',
        'volunteer': 'Volunteer Program',
        'corporate': 'Corporate Partnership Program'
    };
    
    const optionName = supportTypes[optionType] || 'Support Option';
    alert(`Thank you for your interest in our ${optionName}! In a full implementation, this would redirect to the appropriate page or open a detailed information modal. We appreciate your commitment to supporting our healing community.`);
}

// Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    
    // Simulate newsletter subscription
    alert(`Thank you for subscribing to our Healing Pathways Newsletter! Welcome to our community. You'll receive weekly doses of hope, healing resources, and event updates at ${email}.`);
    
    // Reset form
    emailInput.value = '';
}

// Contact Form Submission
function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We're honored to be part of your healing journey and will get back to you at ${email} within 24 hours. Remember, you are not alone on this path.`);
    
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('service').value = '';
    document.getElementById('message').value = '';
}

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animations to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.service-card, .event-card, .tier-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// Crisis Support Quick Access
function accessCrisisSupport() {
    alert('Crisis Support is available 24/7. In a real implementation, this would immediately connect you to our crisis hotline or emergency resources. If you are in immediate danger, please call 911 or your local emergency services.');
}

// Add crisis support button to all pages (could be a floating button)
document.addEventListener('DOMContentLoaded', function() {
    // This could create a floating crisis support button
    // For now, it's integrated into the navigation and contact sections
    console.log('Sacred Path Healing website loaded successfully');
});

// Healing affirmation rotation (could be added to hero or other sections)
const healingAffirmations = [
    "You are worthy of healing and peace.",
    "Every step forward is progress, no matter how small.",
    "Your journey matters, and you are not alone.",
    "Healing is not linear, and that's perfectly okay.",
    "You have the strength to overcome any challenge.",
    "Community and connection are powerful medicine.",
    "Your story has the power to heal others.",
    "Recovery is possible, and hope is always available."
];

function getRandomAffirmation() {
    return healingAffirmations[Math.floor(Math.random() * healingAffirmations.length)];
}

// Could be used to display rotating affirmations
function displayAffirmation() {
    const affirmation = getRandomAffirmation();
    console.log('Daily Affirmation:', affirmation);
    // In a full implementation, this could update a dedicated affirmation section
}