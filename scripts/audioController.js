let backgroundAudio = new Audio();

function playLoop(src) {
  // Si ya hay música de fondo sonando, la detiene antes de iniciar una nueva.
  if (!backgroundAudio.paused) {
    backgroundAudio.pause();
  }

  backgroundAudio = new Audio(src);
  backgroundAudio.loop = true;
  backgroundAudio.volume = 0.6; // Volumen de la música
  backgroundAudio.play();

  const currentTrack = document.getElementById('currentTrack');
  currentTrack.textContent = `🧛 Reproduciendo: ${src.split('/').pop()} 🧛`;
}

function playEffect(src) {
  const effectAudio = new Audio(src);
  effectAudio.volume = 1.0; // Volumen de los efectos de sonido
  effectAudio.play();
}

function stopBackgroundAudio() {
    let fadeOutInterval = setInterval(() => {
        if (backgroundAudio.volume > 0.1) {
            backgroundAudio.volume -= 0.1;
        } else {
            backgroundAudio.volume = 0;
            backgroundAudio.pause();
            clearInterval(fadeOutInterval);
        }
    }, 100); // Ajusta la velocidad del fade out

    const currentTrack = document.getElementById('currentTrack');
    currentTrack.textContent = '';
}

function fadeOutBackgroundAudio() {
    let fadeOutInterval = setInterval(() => {
        if (backgroundAudio.volume > 0.1) {
            backgroundAudio.volume -= 0.1;
        } else {
            backgroundAudio.volume = 0;
            backgroundAudio.pause();
            clearInterval(fadeOutInterval);
        }
    }, 100); // Ajusta la velocidad del fade out

    const currentTrack = document.getElementById('currentTrack');
    currentTrack.textContent = '';
}