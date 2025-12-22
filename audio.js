// Array of artists and their audio
const artists = [
    { div: '.drake', audio: 'drakeAudio' },
    { div: '.hover-image-gunna', audio: 'gunnaAudio' },
    { div: '.hover-image-future', audio: 'futureAudio' },
    { div: '.cartipic2', audio: 'cartiAudio' },
    { div: '.savage', audio: 'savageAudio' },
    { div: '.autumn', audio: 'autumnAudio' }
];

let audioUnlocked = false;
// Listens for click or keydown
document.addEventListener('click', () => audioUnlocked = true, { once: true });
document.addEventListener('keydown', () => audioUnlocked = true, { once: true });

// Iterates through Array and selects image/div using its selector and taking the corresponding audio element from its ID    
artists.forEach(artist => {
    const artistDiv = document.querySelector(artist.div);
    const artistAudio = document.getElementById(artist.audio);
    // If either element does not exist, stop script
    if (!artistDiv || !artistAudio) return;

    artistAudio.volume = 0; 

    let fadeInterval = null;
    // Volumes starts from 0 - 100, increases gradually
    function fadeIn() {
        clearInterval(fadeInterval);
        artistAudio.currentTime = 0;
        artistAudio.volume = 0;

        artistAudio.play().catch(() => {});
        // Increse volume every 40ms
        fadeInterval = setInterval(() => {
            if (artistAudio.volume < 0.95) {
                artistAudio.volume += 0.05;
            } else {
                artistAudio.volume = 1;
                clearInterval(fadeInterval);
            }
        }, 40);
    }
    // Volumes starts from 100-0, decreases gradually
    function fadeOut() {
        clearInterval(fadeInterval);

        fadeInterval = setInterval(() => {
            if (artistAudio.volume > 0.05) {
                artistAudio.volume -= 0.05;
            } else {
                artistAudio.volume = 0;
                // Pauses at volume 0
                artistAudio.pause();
                artistAudio.currentTime = 0;
                clearInterval(fadeInterval);
            }
        }, 40);
    }
//Fade in audio when mouse enters artist image
    artistDiv.addEventListener('mouseenter', () => {
        if (!audioUnlocked) return;
        fadeIn();
    });
// Fade out audio when mouse leaves artists image
    artistDiv.addEventListener('mouseleave', () => {
        fadeOut();
    });
});