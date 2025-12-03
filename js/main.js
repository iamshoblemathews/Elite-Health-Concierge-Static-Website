// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const tl = gsap.timeline();

// Preloader Sequence
tl.to('.preloader-logo img', {
    opacity: 1,
    scale: 1.2, /* Subtle zoom */
    duration: 2,
    ease: 'power2.out'
})
    .to('.preloader-text', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
    }, '-=1.5')
    .to('.preloader-logo img', {
        scale: 1,
        duration: 1,
        ease: 'power2.inOut'
    }, '-=1')
    .to('.preloader', {
        y: '-100%',
        duration: 1.5,
        ease: 'power4.inOut',
        delay: 0.5
    })
    .from('.logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.nav-link', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    }, '-=0.5')
    .from('.reveal-text-delay', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.5');

// Parallax Effects
gsap.to('.hero', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

gsap.to('.about-image img', {
    y: '20%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Scroll Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.about-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.service-card').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

gsap.utils.toArray('.founder-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Mobile Menu
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';

        if (nav.style.display === 'flex') {
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#0a0a0a';
            nav.style.padding = '20px';
            nav.style.flexDirection = 'column';
            nav.style.alignItems = 'center';
            nav.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';

            gsap.from('.nav-link', {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
            });
        }
    });
}

// Custom Cursor
const cursor = document.querySelector('.cursor-follower');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    // Cursor Interactions
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .about-card, .package-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
        });
    });
}
