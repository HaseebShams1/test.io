const noBtn = document.getElementById("no-btn");
const slideImg = document.getElementById("slideImg");
const caption = document.getElementById("caption");
const greeting = document.getElementById("greeting");
const slides = [
    { src: 'images/photo1.jpg', caption: 'Our First Adventure' },
    { src: 'images/photo2.jpg', caption: 'Sweet Memories' },
    { src: 'images/photo3.jpg', caption: 'Unforgettable Moments' }
];
let currentSlide = 0;

// "No" Button Moving Effect
noBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 200) - 100; 
    const randomY = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Update Greeting with Name
function updateGreeting() {
    const name = document.getElementById("nameInput").value;
    greeting.textContent = name ? `Happy Birthday, ${name}!` : 'Happy Birthday!';
}

// Go to Surprise Page
function goToSurprisePage() {
    confettiAnimation();
    setTimeout(() => {
        location.href = 'newpage.html';
    }, 2000);
}

// Slideshow
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideImg.src = slides[currentSlide].src;
    caption.textContent = slides[currentSlide].caption;
}
setInterval(nextSlide, 3000);

// Confetti Animation
function confettiAnimation() {
    const confettiCount = 150;
    const confettiColors = ['#ff9aa2', '#ffb7b2', '#ffdac1'];
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
