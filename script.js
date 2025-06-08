const text = "Kaczuszki – Twój pomocnik w programowaniu!";

let i = 0;
function typeWriter() {
    if (window.innerWidth > 700) {
        if (i < text.length) {
            document.getElementById("bannerText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }
}
window.onload = typeWriter;

function changeDuckColor(color) {
    const img = document.getElementById('duckImg');
    if (color === 'red') img.src = 'duck-red.png';
    if (color === 'orange') img.src = 'duck-orange.png';
    if (color === 'yellow') img.src = 'duck-yellow.png';
}

function playDuckSound() {
    document.getElementById('duckAudio').play();
}

function openImageModal(img) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgModalContent');
    const caption = document.getElementById('imgModalCaption');
    modal.style.display = "flex";
    modalImg.src = img.src;
    caption.textContent = img.alt;
    document.body.style.overflow = 'hidden';
}

function closeImageModal(event) {
    if (
        event.target.classList.contains('img-modal') ||
        event.target.classList.contains('img-modal-close')
    ) {
        document.getElementById('imgModal').style.display = "none";
        document.body.style.overflow = '';
    }
}