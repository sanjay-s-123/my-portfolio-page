// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
const links = document.querySelectorAll('a, .btn, .stat-card, .skill-category, .project-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.width = '60px';
        cursor.style.height = '60px';
        cursor.style.backgroundColor = 'rgba(0, 242, 255, 0.5)';
        cursor.style.mixBlendMode = 'normal';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'var(--primary-color)';
        cursor.style.mixBlendMode = 'difference';
    });
});

// Typing Effect
const typingText = document.querySelector('.typing');
const words = ['AI & ML Student', 'IoT Enthusiast', 'Python Developer', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const current = wordIndex % words.length;
    const fullText = words[current];

    if (isDeleting) {
        typingText.textContent = fullText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typingText.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

// Initial Call and Scroll Event
window.addEventListener('scroll', () => {
    reveal();
    
    // Header background change
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Single page navigation active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Initialize on load
window.onload = () => {
    type();
    reveal();

    // Initialize Particles.js background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00f2ff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#7000ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
};

// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('comic-mode');
        localStorage.setItem('theme', 'comic');
    } else {
        document.body.classList.remove('comic-mode');
        localStorage.setItem('theme', 'normal');
    }    
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Check Local Storage for Theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'comic') {
            toggleSwitch.checked = true;
            document.body.classList.add('comic-mode');
        }
    }
}

// Comic Click Burst Animation
document.addEventListener('click', (e) => {
    // Only show burst if comic mode is active and it's not a click on the theme switch
    if (document.body.classList.contains('comic-mode') && !e.target.closest('.theme-switch-wrapper')) {
        const bursts = ['BAM!', 'POW!', 'ZAP!', 'BOOM!', 'WHAM!'];
        const burstText = bursts[Math.floor(Math.random() * bursts.length)];
        
        const burstEl = document.createElement('div');
        burstEl.classList.add('comic-burst');
        burstEl.textContent = burstText;
        burstEl.style.left = e.clientX + 'px';
        burstEl.style.top = e.clientY + 'px';
        
        document.body.appendChild(burstEl);
        
        // Remove element after animation finishes
        setTimeout(() => {
            burstEl.remove();
        }, 600);
    }
});
