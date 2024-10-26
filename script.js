// Redirects to the new page when "Yes" button is clicked
function goToNewPage() {
    window.location.href = "newpage.html";
}
function goToNewPage2() {
    window.location.href = "newpage2.html";
}
function goToNewPage3() {
    window.location.href = "newpage3.html";
}

// Moves the "No" button away when hovered
function moveNoButton() {
    const noBtn = document.getElementById("no-btn");
    const randomX = Math.random() * 300 - 150;  // Adjust values as needed
    const randomY = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
