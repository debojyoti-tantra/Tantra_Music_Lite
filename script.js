// script.js
const songs = [
    {
        title: "1. Apna Bana Le priya",
        artist: "Arijit singh",
        src: "./Apna Bana Le_320(PagalWorld).mp3",
        cover: "./Apna_Bana_le_Cover.jpeg"
    },
    {
        title: "2. Tum Se",
        artist: "Raghav Chaitanya, Sachin–Jigar, and Varun Jain",
        src: "./Tum Se_320(PagalWorld.com.sb).mp3",
        cover: "./Tum_Se_cover.jpg"
    },
    {
        title: "3. Tera Fitoor",
        artist: "Arijit Singh",
        src: "./Tera Fitoor Genius 320 Kbps.mp3",
        cover: "./Tera_Fitoor_cover.jpg"
    },
    {
        title: "4. Aaoge Tum Kabhi",
        artist: "The Local Train",
        src: "./Aaoge Tum Kabhi_320(PagalWorld.com.so).mp3",
        cover: "./Aaoge_Tum_Kabhi_cover.jpeg"
    },
    {
        title: "5. Eenie Meenie",
        artist: "Justin Bieber",
        src: "./Justin-Bieber-Eenie-Meenie.mp3",
        cover: "./Eenie_Meenie_cover.jpg"
    },
    {
        title: "6. Stay",
        artist: "Justin Bieber",
        src: "./Stay(PagalNew.Com.Se).mp3",
        cover: "./Stay_cover.jpg"
    },
    {
        title: "7. Ami Sudhu Khujechi Amay",
        artist: "Taalpatar Shepai",
        src: "./Ami-Sudhu-Khujechi-Amay-Taalpatar-Shepai.mp3",
        cover: "./Ami_Sudhu_Khujechi_Amay_cover.jpeg"
    },
    {
        title: "8. Ureche Mon",
        artist: "Arijit Singh",
        src: "./Ureche Mon Pureche Mon(Mr-Jatt1.com).mp3",
        cover: "./Ureche_Mon_cover.jpg"
    },
    {
        title: "9. I Love You",
        artist: "Ash King and Clinton Cerejo",
        src: "./I Love You Bodyguard 320 Kbps.mp3",
        cover: "./I_Love_You_cover.jpg"
    },
    {
        title: "10. Cheliya",
        artist: "Arijit Singh and Shilpa Rao",
        src: "./Cheliya-(PagalWorld).mp3",
        cover: "./Cheliya_cover.jpeg"
    }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const coverImg = document.getElementById('cover');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    coverImg.src = song.cover;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

// Load the initial song
loadSong(currentSongIndex);
