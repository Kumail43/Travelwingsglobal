// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submissions
document.querySelector('.consultation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('Thank you for your consultation request! We will contact you within 24 hours.');
    
    // Reset form
    this.reset();
});

document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Animate elements on scroll
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

// Observe all cards and sections
document.querySelectorAll('.destination-card, .service-item, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Counter animation for statistics (if you want to add them)
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            clearInterval(timer);
            element.textContent = target;
        }
    }, 20);
}

// Destination card hover effects
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service item hover effects
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-video video');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b35';
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            input.style.borderColor = '#ff6b35';
            isValid = false;
        } else {
            input.style.borderColor = '#e1e1e1';
        }
    });
    
    return isValid;
}

// Add validation to forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });
});

// Auto-hide mobile menu on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Button click animations
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

console.log('Travel Wings Global website loaded successfully!');

 

    //  function toggleDescription(button) {
    //     const card = button.closest('.card-content');
    //     const fullDesc = card.querySelector('.full-description');

    //     if (fullDesc.style.display === "none" || fullDesc.style.display === "") {
    //         fullDesc.style.display = "block";
    //         button.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
    //     } else {
    //         fullDesc.style.display = "none";
    //         button.innerHTML = 'Learn More <i class="fas fa-arrow-right"></i>';
    //     }
    // }

    function toggleDescription(button) {
    const cardContent = button.closest('.card-content');
    const fullDesc = cardContent.querySelector('.full-description');

    if (fullDesc.style.display === "none" || fullDesc.style.display === "") {
        fullDesc.style.display = "block";
        button.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
    } else {
        fullDesc.style.display = "none";
        button.innerHTML = 'Learn More <i class="fas fa-arrow-right"></i>';
    }
}


 document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('href');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightbox = document.getElementById('lightbox');
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'flex';
    });
  });

  document.getElementById('lightbox').addEventListener('click', function () {
    this.style.display = 'none';
  });



 
