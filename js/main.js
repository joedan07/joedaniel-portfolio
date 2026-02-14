const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
});
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();

const timeline = document.querySelector(".timeline");

function animateTimeline() {
    const windowHeight = window.innerHeight;
    const timelineTop = timeline.getBoundingClientRect().top;

    if (timelineTop < windowHeight - 100) {
        timeline.style.setProperty("--line-grow", "1");
        timeline.classList.add("line-visible");
    }
}

window.addEventListener("scroll", animateTimeline);
animateTimeline();

// --- Typewriter Effect (Role Only) ---
const roleText = "B.Tech CS Student | Cybersecurity, Blockchain & IoT";
const roleElement = document.getElementById("typewriter-role");
const roleCursor = document.getElementById("cursor-role");

let roleIndex = 0;

function typeRole() {
    if (roleElement && roleIndex < roleText.length) {
        roleElement.textContent += roleText.charAt(roleIndex);
        roleIndex++;
        setTimeout(typeRole, 50); 
    }
}

// Start typing shortly after load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, 800); // Wait for the Glitch effect to settle slightly
});

/* --------------------------------------------------
   1. MATRIX RAIN EFFECT
   -------------------------------------------------- */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Characters to drop (Binary + Matrix feel)
const matrixChars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ1001010101"; 
const matrixArray = matrixChars.split("");

const fontSize = 14;
const columns = canvas.width / fontSize; 

// Array to track drop positions
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // Semi-transparent black to create "trail" effect
    // We use a slight transparency so the previous character fades slowly
    ctx.fillStyle = "rgba(15, 23, 42, 0.1)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text Color (Cyber Blue)
    ctx.fillStyle = "#3b82f6"; 
    ctx.font = fontSize + "px 'Fira Code', monospace"; // Use your Tech font

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset drop to top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Run the animation (30fps looks nicely cinematic)
setInterval(drawMatrix, 40);

/* --------------------------------------------------
   2. 3D TILT EFFECT FOR CARDS
   -------------------------------------------------- */
const cards = document.querySelectorAll('.project-card, .skill-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to card
        const y = e.clientY - rect.top;  // Mouse Y relative to card
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (Max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;

        // Apply the 3D transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    // Reset when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

/* --------------------------------------------------
   3. SCROLL PROGRESS BAR
   -------------------------------------------------- */
window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollCurrent = document.documentElement.scrollTop;
    
    const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
    
    document.getElementById('scroll-progress').style.width = scrollPercentage + "%";
});

/* --------------------------------------------------
   4. MAGNETIC BUTTON EFFECT (FIXED)
   -------------------------------------------------- */
// Selects all buttons + specifically the hero buttons
const buttons = document.querySelectorAll('.btn, .contact-btn, .project-btn, .magnetic-btn');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Increased strength from 0.3 to 0.6 so you FEEL it more
        btn.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

/* --------------------------------------------------
   5. NAVBAR SCROLL SHAPE-SHIFT
   -------------------------------------------------- */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // If we scroll down more than 50 pixels, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        // If we are at the top, remove it so it becomes a pill again
        navbar.classList.remove('scrolled');
    }
});