document.addEventListener("DOMContentLoaded", () => {
    createStars();

    // Reveal the message after 2 seconds
    setTimeout(() => {
        document.getElementById("starMessage").style.opacity = 1;
    }, 2000);
});

// Star animation for galaxy background
function createStars() {
    const starCount = 150;
    const galaxy = document.querySelector(".galaxy-background");

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        galaxy.appendChild(star);
    }
}

// Go to the Surprise Page
function goToSurprisePage() {
    window.location.href = "surprise.html";
}

// Confetti Animation for Surprise Page
if (window.location.pathname.endsWith("surprise.html")) {
    launchConfetti();
}

function launchConfetti() {
    const confettiCount = 100;
    const confettiColors = ["#ff9aa2", "#ffb7b2", "#ffdac1"];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        document.body.appendChild(confetti);
        
        // Remove confetti after falling
        setTimeout(() => confetti.remove(), 5000);
    }
}
