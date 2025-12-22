const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volume = document.getElementById('volume');
const speed = document.getElementById('speed');

let isPlaying = false;
let videoIndex = 0;

const videos = [
    {
        title: "Video One",
        artist: "Channel One",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: "https://via.placeholder.com/350x250/4CAF50/fff"
    },
    {
        title: "Video Two",
        artist: "Channel Two",
        src: "https://www.w3schools.com/html/movie.mp4",
        poster: "https://via.placeholder.com/350x250/2196F3/fff"
    }
];

function loadVideo(videoData) {
    title.textContent = videoData.title;
    artist.textContent = videoData.artist;
    video.src = videoData.src;
    video.poster = videoData.poster;
}

loadVideo(videos[videoIndex]);

function playVideo() {
    video.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    isPlaying = true;
}

function pauseVideo() {
    video.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    isPlaying = false;
}

playBtn.addEventListener('click', () => {
    isPlaying ? pauseVideo() : playVideo();
});

prevBtn.addEventListener('click', () => {
    videoIndex = (videoIndex - 1 + videos.length) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
});

nextBtn.addEventListener('click', () => {
    videoIndex = (videoIndex + 1) % videos.length;
    loadVideo(videos[videoIndex]);
    playVideo();
});

video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${progressPercent}%`;

    currentTimeEl.textContent = formatTime(video.currentTime);
    durationEl.textContent = formatTime(video.duration);
});

progressBar.addEventListener('click', e => {
    const clickX = e.offsetX;
    const width = progressBar.clientWidth;
    video.currentTime = (clickX / width) * video.duration;
});

volume.addEventListener('input', e => {
    video.volume = e.target.value;
});

speed.addEventListener('change', e => {
    video.playbackRate = e.target.value;
});

video.addEventListener('ended', () => {
    nextBtn.click();
});

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}
