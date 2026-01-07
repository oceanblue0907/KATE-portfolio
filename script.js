const skillBars = document.querySelectorAll('.skill-per');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    document.getElementById("copy-btn").innerText = "Copied!";
    setTimeout(() => { document.getElementById("copy-btn").innerText = "Copy Email"; }, 2000);
}
function openPoem(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerText = content;
    document.getElementById("poetry-modal").style.display = "block";
}

function closePoem() {
    document.getElementById("poetry-modal").style.display = "none";
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById("poetry-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openPoem(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-body").innerText = content;
    document.getElementById("poetry-modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Freeze background scroll
}

function closePoem() {
    document.getElementById("poetry-modal").style.display = "none";
    document.body.style.overflow = "auto"; // Restore background scroll
}