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

// ============================================
// COMIC SCROLL ANIMATIONS - Iron Man & Web
// ============================================
let lastScrollTop = 0;
let isAnimatingIronMan = false;
let isAnimatingWeb = false;

function showComicText(text, x, y) {
    const el = document.getElementById('comic-text-effect');
    if (!el) return;
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 1000);
}

function spawnSmokePuff(x, y) {
    const trail = document.querySelector('.smoke-trail');
    if (!trail) return;
    const puff = document.createElement('div');
    puff.classList.add('smoke-puff');
    // Slight random horizontal drift
    const drift = (Math.random() - 0.5) * 16;
    puff.style.left = (x + drift - 11) + 'px';
    puff.style.top  = (y - 11) + 'px';
    trail.appendChild(puff);
    setTimeout(() => puff.remove(), 1200);
}

function triggerIronManFly() {
    const ironMan = document.querySelector('.iron-man-scroll');
    const portal  = document.querySelector('.comic-portal');
    if (!ironMan || !portal) return;

    isAnimatingIronMan = true;

    // Phase 1: Open portal at top-right
    portal.classList.remove('open');
    void portal.offsetWidth;
    portal.classList.add('open');

    // Show "WHOOOOSH!" text center screen
    showComicText('WHOOOOSH!', window.innerWidth / 2 - 100, window.innerHeight / 2 - 50);

    // Phase 2: 0.4s delay, then launch Iron Man from bottom
    setTimeout(() => {
        // Reset to bottom
        ironMan.style.transition = 'none';
        ironMan.style.bottom = '-200px';
        ironMan.style.right  = '10%';

        ironMan.classList.remove('flying');
        void ironMan.offsetWidth;
        ironMan.classList.add('flying');

        // Phase 2b: spawn smoke puffs by tracking Iron Man's position
        const duration = 2100; // ms
        const interval = 60;   // spawn a puff every 60ms
        let elapsed = 0;
        const smokeTimer = setInterval(() => {
            elapsed += interval;
            if (elapsed > duration) { clearInterval(smokeTimer); return; }
            const rect = ironMan.getBoundingClientRect();
            if (rect.width > 0) {
                // Emit from the center-bottom of Iron Man
                spawnSmokePuff(
                    rect.left + rect.width / 2,
                    rect.bottom
                );
            }
        }, interval);
    }, 400);

    // Phase 3: When he reaches the top show "GONE!"
    setTimeout(() => {
        const portalRect = portal.getBoundingClientRect();
        showComicText('GONE!', portalRect.left - 60, portalRect.top + 30);
    }, 1900);

    // Phase 4: Clean up
    setTimeout(() => {
        ironMan.classList.remove('flying');
        portal.classList.remove('open');
        isAnimatingIronMan = false;
    }, 2800);
}

function triggerWebShoot(scrollX, scrollY) {
    const web = document.querySelector('.spider-web-scroll');
    if (!web) return;

    isAnimatingWeb = true;

    // Pick a random edge position
    const onLeft = Math.random() > 0.5;
    const xPos = onLeft ? Math.random() * 15 : 75 + Math.random() * 15; // vw %
    const yPos = 10 + Math.random() * 70; // vh %

    web.style.left = xPos + 'vw';
    web.style.top = yPos + 'vh';

    web.classList.remove('shooting');
    void web.offsetWidth;
    web.classList.add('shooting');

    // Show "THWIP!" text near where web appeared
    const webTexts = ['THWIP!', 'SWISH!', 'SNAP!'];
    const txt = webTexts[Math.floor(Math.random() * webTexts.length)];
    const px = (xPos / 100) * window.innerWidth;
    const py = (yPos / 100) * window.innerHeight;
    showComicText(txt, px, py - 60);

    setTimeout(() => {
        isAnimatingWeb = false;
        web.classList.remove('shooting');
    }, 900);
}

window.addEventListener('scroll', () => {
    if (!document.body.classList.contains('comic-mode')) return;

    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop + 15) {
        // Scrolling DOWN → web shoot
        if (!isAnimatingWeb) {
            triggerWebShoot();
        }
    } else if (st < lastScrollTop - 15) {
        // Scrolling UP → Iron Man flies up through portal
        if (!isAnimatingIronMan) {
            triggerIronManFly();
        }
    }

    lastScrollTop = st <= 0 ? 0 : st;
});
