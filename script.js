const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 200) - 100; 
    const randomY = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
