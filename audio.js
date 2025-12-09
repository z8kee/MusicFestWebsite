const artists = [
    { div: '.drake', audio: 'drakeAudio' },
    { div: '.hover-image-gunna', audio: 'gunnaAudio' },
    { div: '.hover-image-future', audio: 'futureAudio' },
    { div: '.cartipic2', audio: 'cartiAudio' },
    { div: '.savage', audio: 'savageAudio' },
    { div: '.autumn', audio: 'autumnAudio' }
];

let audioUnlocked = false;

document.addEventListener('click', () => audioUnlocked = true, { once: true });
document.addEventListener('keydown', () => audioUnlocked = true, { once: true });
document.addEventListener('touchstart', () => audioUnlocked = true, { once: true });

artists.forEach(artist => {
    const artistDiv = document.querySelector(artist.div);
    const artistAudio = document.getElementById(artist.audio);

    if (!artistDiv || !artistAudio) return;

    artistAudio.volume = 0; 

    let fadeInterval = null;

    function fadeIn() {
        clearInterval(fadeInterval);
        artistAudio.currentTime = 0;
        artistAudio.volume = 0;

        artistAudio.play().catch(() => {});

        fadeInterval = setInterval(() => {
            if (artistAudio.volume < 0.95) {
                artistAudio.volume += 0.05;
            } else {
                artistAudio.volume = 1;
                clearInterval(fadeInterval);
            }
        }, 40);
    }

    function fadeOut() {
        clearInterval(fadeInterval);

        fadeInterval = setInterval(() => {
            if (artistAudio.volume > 0.05) {
                artistAudio.volume -= 0.05;
            } else {
                artistAudio.volume = 0;
                artistAudio.pause();
                artistAudio.currentTime = 0;
                clearInterval(fadeInterval);
            }
        }, 40);
    }

    artistDiv.addEventListener('mouseenter', () => {
        if (!audioUnlocked) return;
        fadeIn();
    });

    artistDiv.addEventListener('mouseleave', () => {
        fadeOut();
    });
});