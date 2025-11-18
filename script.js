// ========== TAB SWITCHING FUNCTIONALITY ==========
// Function to switch between Skills, Experience, and Education tabs
function opentab(tabname) {
    // Get all tab links and tab contents
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    
    // Remove active class from all tabs and contents
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Add active class to clicked tab and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ========== MOBILE MENU FUNCTIONALITY ==========
// Mobile side menu
const sidemenu = document.getElementById("sidemenu");

// Function to open mobile menu
function openmenu() {
    sidemenu.style.right = "0";
}

// Function to close mobile menu
function closemenu() {
    sidemenu.style.right = "-200px";
}

// Close menu when clicking on a link (for smooth navigation)
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            closemenu();
        }
    });
});

// ========== GOOGLE SHEETS FORM SUBMISSION ==========
// 🔧 CHANGE THIS: Replace with your Google Apps Script Web App URL
// Instructions to set up Google Sheets integration:
// 1. Go to Google Sheets and create a new spreadsheet
// 2. Name it "Portfolio Contact Form" or similar
// 3. Go to Extensions > Apps Script
// 4. Delete any existing code and paste the following:
/*
    function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = e.parameter;
        
        sheet.appendRow([
            new Date(),
            data.Name,
            data.Email,
            data.Message
        ]);
        
        return ContentService.createTextOutput(JSON.stringify({
            "result": "success"
        })).setMimeType(ContentService.MimeType.JSON);
    }
*/
// 5. Click "Deploy" > "New deployment"
// 6. Select type: "Web app"
// 7. Execute as: "Me"
// 8. Who has access: "Anyone"
// 9. Click "Deploy" and copy the Web App URL
// 10. Paste the URL below replacing the placeholder

const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // Show loading message
        msg.innerHTML = "Sending...";
        msg.style.color = "#61b752";
        
        // Submit form data to Google Sheets
        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(form)
        })
        .then(response => {
            // Show success message
            msg.innerHTML = "Message sent successfully!";
            msg.style.color = "#61b752";
            
            // Clear form
            form.reset();
            
            // Hide message after 5 seconds
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => {
            // Show error message
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again.";
            msg.style.color = "#ff004f";
            
            // Hide message after 5 seconds
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
        });
    });
}

// ========== SMOOTH SCROLLING FOR NAVIGATION LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth scroll to internal links
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== SCROLL ANIMATIONS (Optional Enhancement) ==========
// Add 'visible' class to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.sub-title, .services-list > div, .work');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ========== ACTIVE NAVIGATION HIGHLIGHT ==========
// Highlight active section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
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

// ========== TYPING ANIMATION (Optional Enhancement) ==========
// Uncomment below to add typing effect to hero text
/*
const typingText = document.querySelector('.header-text h1 span');
if (typingText) {
    const originalText = typingText.textContent;
    typingText.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            typingText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation after page loads
    setTimeout(typeWriter, 1000);
}
*/

// ========== CONSOLE MESSAGE ==========
console.log('%c Portfolio Website Loaded Successfully! ', 'background: #ff004f; color: #fff; padding: 10px; font-size: 16px;');
console.log('%c Made with ❤️ ', 'color: #ff004f; font-size: 14px;');
