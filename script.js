// ========== TAB SWITCHING FUNCTIONALITY ==========
// Switch between Skills, Experience, and Education tabs
function opentab(tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ========== MOBILE MENU FUNCTIONALITY ==========
const sidemenu = document.getElementById("sidemenu");
const navOverlay = document.getElementById("nav-overlay");

// Open menu: slide in from right, show overlay, lock body scroll
function openmenu() {
    sidemenu.classList.add("open");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close menu: reverse all of the above
function closemenu() {
    sidemenu.classList.remove("open");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Close on overlay click
if (navOverlay) {
    navOverlay.addEventListener("click", closemenu);
}

// Auto-close when a nav link is clicked (smooth navigation)
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            closemenu();
        }
    });
});

// Keyboard accessibility: Escape key closes the menu
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidemenu.classList.contains('open')) {
        closemenu();
    }
});

// ========== GOOGLE SHEETS FORM SUBMISSION ==========
// 🔧 CHANGE THIS: Replace with your Google Apps Script Web App URL
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        msg.innerHTML = "Sending...";
        msg.style.color = "#61b752";

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(() => {
            msg.innerHTML = "Message sent successfully!";
            msg.style.color = "#61b752";
            form.reset();
            setTimeout(() => { msg.innerHTML = ""; }, 5000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again.";
            msg.style.color = "#ff004f";
            setTimeout(() => { msg.innerHTML = ""; }, 5000);
        });
    });
}

// ========== SMOOTH SCROLLING FOR NAVIGATION LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ========== SCROLL-BASED FADE-IN ANIMATIONS ==========
/*
 * Each element with class .fade-in starts invisible (opacity: 0,
 * translateY: 30px). When it enters the viewport, IntersectionObserver
 * adds .fade-in-visible which triggers the CSS transition.
 * Animation fires only once — element is unobserved after triggering.
 *
 * Service cards and portfolio items use staggered transition-delay
 * (0ms, 150ms, 300ms…) for a cascade effect.
 */
const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            // Unobserve so the animation only plays once
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', function () {
    // Stagger service cards: 0ms → 150ms → 300ms cascade
    document.querySelectorAll('.services-list > div.fade-in').forEach((card, i) => {
        card.style.transitionDelay = `${i * 150}ms`;
    });

    // Stagger portfolio cards: 0ms → 150ms → 300ms → 450ms cascade
    document.querySelectorAll('.work.fade-in').forEach((card, i) => {
        card.style.transitionDelay = `${i * 150}ms`;
    });

    // Observe every element marked for fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });
});

// ========== ACTIVE NAVIGATION HIGHLIGHT ==========
// Highlights the nav link matching the section currently in view
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    let current = '';

    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========== CONSOLE MESSAGE ==========
console.log('%c Portfolio — Noel Tony ', 'background: linear-gradient(90deg,#38bdf8,#a78bfa); color: #0f172a; padding: 10px 16px; border-radius: 6px; font-weight: 700; font-size: 14px;');
console.log('%c Full-Stack · AI/ML · Blockchain ', 'color: #38bdf8; font-size: 12px;');
