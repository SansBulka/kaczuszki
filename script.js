const text = "Kaczki – Twój pomocnik w programowaniu!";
const duckSounds = [
    'dzwiek/kaczka1.mp3',
    'dzwiek/kaczka2.mp3',
    'dzwiek/kaczka3.mp3'
];

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
    if (color === 'red') img.src = 'img/kaczka-red.jpg';
    if (color === 'orange') img.src = 'img/kaczka-orange.jpg';
    if (color === 'yellow') img.src = 'img/kaczka.jpg';
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
let duckSoundClicks = 0;
const specialDuck = document.getElementById('specialDuck');
const specialHeader = document.getElementById('specialHeader');
const specialMusic = document.getElementById('specialMusic');


function fadeIn(element, duration = 2000, spin = false) {
    element.style.display = 'block';
    let opacity = 0;
    let rotation = 0;
    const step = 16 / duration;
    function animate() {
        opacity += step;
        if (spin) {
            rotation += 2;
            element.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        }
        if (opacity >= 1) {
            opacity = 1;
            if (spin) {
                element.style.transform = 'translate(-50%, -50%)';
            }
        }
        element.style.opacity = opacity;
        if (opacity < 1) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

function fadeInAudio(audio, duration = 2000) {
    audio.volume = 0;
    audio.play();
    let volume = 0;
    const step = 16 / duration;
    function animate() {
        volume += step;
        if (volume >= 1) volume = 1;
        audio.volume = volume;
        if (volume < 1) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

function playDuckSound() {
    const randomIndex = Math.floor(Math.random() * duckSounds.length);
    const jew = new Audio('dzwiek/jew.mp3');
    duckSoundClicks++;
    if (duckSoundClicks === 10) {
        jew.play();
        fadeIn(specialDuck, 20000, true); // fadeIn z szybkim obrotem
        fadeIn(specialHeader, 2000);
        fadeInAudio(specialMusic, 2000);
    }
}
function kaczkaClick() {
    const randomIndex = Math.floor(Math.random() * duckSounds.length);
    const audio = new Audio(duckSounds[randomIndex]);
    audio.play();
}
