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
        if (elementTop < windowHeight - 100) element.classList.add("active");
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const timeline = document.querySelector(".timeline");
function animateTimeline() {
    if(!timeline) return;
    const windowHeight = window.innerHeight;
    const timelineTop = timeline.getBoundingClientRect().top;

    if (timelineTop < windowHeight - 100) {
        timeline.style.setProperty("--line-grow", "1");
        timeline.classList.add("line-visible");
    }
}
window.addEventListener("scroll", animateTimeline);
animateTimeline();

// NEW B.TECH LINE TEXT HERE
const roleText = "B.Tech CS Student | Cybersecurity, Blockchain";
const roleElement = document.getElementById("typewriter-role");
let roleIndex = 0;
function typeRole() {
    if (roleElement && roleIndex < roleText.length) {
        roleElement.textContent += roleText.charAt(roleIndex);
        roleIndex++;
        setTimeout(typeRole, 50); 
    }
}
document.addEventListener("DOMContentLoaded", () => setTimeout(typeRole, 800)); 

/* 1. MATRIX RAIN EFFECT */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const matrixChars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ1001010101"; 
const matrixArray = matrixChars.split("");
const fontSize = 14;
const columns = canvas.width / fontSize; 
const drops = [];
for (let i = 0; i < columns; i++) { drops[i] = 1; }

function drawMatrix() {
    ctx.fillStyle = "rgba(15, 23, 42, 0.1)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#3b82f6"; 
    ctx.font = fontSize + "px 'Fira Code', monospace"; 

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 40);

/* 2. 3D TILT EFFECT FOR CARDS */
const cards = document.querySelectorAll('.project-card'); 
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; 
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

/* 3. SCROLL PROGRESS BAR */
window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollCurrent = document.documentElement.scrollTop;
    document.getElementById('scroll-progress').style.width = ((scrollCurrent / scrollTotal) * 100) + "%";
});

/* 4. MAGNETIC BUTTON EFFECT */
const buttons = document.querySelectorAll('.btn, .contact-btn, .project-btn, .magnetic-btn');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

/* 5. NAVBAR SCROLL SHAPE-SHIFT */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* 6. BUTTERY SMOOTH SCROLLING */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - 80, 
                behavior: 'smooth'
            });
        }
    });
});

/* 7. PROJECT MODAL LOGIC */
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalLinks = document.getElementById('modal-links');
const closeBtn = document.getElementById('close-modal');
const closeDot = document.getElementById('close-dot'); 

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.innerHTML = card.getAttribute('data-title');
        modalDesc.innerHTML = card.getAttribute('data-desc');
        
        modalTags.innerHTML = '';
        const tags = card.getAttribute('data-tags').split(',');
        tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag.trim();
            modalTags.appendChild(span);
        });

        modalLinks.innerHTML = '';
        const link = card.getAttribute('data-link');
        if (link) {
            const a = document.createElement('a');
            a.href = link;
            a.target = "_blank";
            a.className = "project-btn";
            a.textContent = "View Live Project ↗";
            modalLinks.appendChild(a);
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);
closeDot.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});