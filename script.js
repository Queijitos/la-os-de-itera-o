document.addEventListener('DOMContentLoaded', function() {
    const audios = document.querySelectorAll('audio');
 
    audios.forEach(audio => {
        audio.addEventListener('play', function() {
            console.log(`Tocando: ${this.querySelector('source').src}`);
        });
    });
});
