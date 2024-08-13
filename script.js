document.getElementById('play').addEventListener('click', function() {
    const player = document.getElementById('audioPlayer');
    const playIcon = this.querySelector('i');
    if (playIcon.classList.contains('fa-play')) {
        player.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        player.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
});

document.getElementById('next').addEventListener('click', function() {
    console.log('Next track');
});

document.getElementById('prev').addEventListener('click', function() {
    console.log('Previous track');
});

document.getElementById('favorite').addEventListener('click', function() {
    const favoriteIcon = this.querySelector('i');
    const indicator = document.getElementById('favoriteIndicator');
    if (favoriteIcon.classList.contains('fas')) {
        favoriteIcon.classList.remove('fas');
        favoriteIcon.classList.add('far');
        indicator.textContent = 'Not Favorited';
    } else {
        favoriteIcon.classList.remove('far');
        favoriteIcon.classList.add('fas');
        indicator.textContent = 'Favorited';
    }
});

const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progress-bar');

audioPlayer.addEventListener('timeupdate', function() {
    const percentage = (this.currentTime / this.duration) * 100;
    progressBar.style.width = percentage + '%';
});

const progressContainer = document.querySelector('.progress-container');
progressContainer.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
});
