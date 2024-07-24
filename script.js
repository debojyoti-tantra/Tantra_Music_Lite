// script.js
const songs = [
    {
        title: "1. Apna Bana Le priya",
        artist: "Arijit singh",
        src: "./songs/Apna Bana Le_320(PagalWorld).mp3",
        cover: "./song cover/Apna_Bana_le_Cover.jpeg"
    },
    {
        title: "2. Tum Se",
        artist: "Raghav Chaitanya, Sachin–Jigar, and Varun Jain",
        src: "./songs/Tum Se_320(PagalWorld.com.sb).mp3",
        cover: "./song cover/Tum_Se_cover.jpg"
    },
    {
        title: "3. Tera Fitoor",
        artist: "Arijit Singh",
        src: "./songs/Tera Fitoor Genius 320 Kbps.mp3",
        cover: "./song cover/Tera_Fitoor_cover.jpg"
    },
    {
        title: "4. Aaoge Tum Kabhi",
        artist: "The Local Train",
        src: "./songs/Aaoge Tum Kabhi_320(PagalWorld.com.so).mp3",
        cover: "./song cover/Aaoge_Tum_Kabhi_cover.jpeg"
    },
    {
        title: "5. Eenie Meenie",
        artist: "Justin Bieber",
        src: "./songs/Justin-Bieber-Eenie-Meenie.mp3",
        cover: "./song cover/Eenie_Meenie_cover.jpg"
    },
    {
        title: "6. Stay",
        artist: "Justin Bieber",
        src: "./songs/Stay(PagalNew.Com.Se).mp3",
        cover: "./song cover/Stay_cover.jpg"
    },
    {
        title: "7. Ami Sudhu Khujechi Amay",
        artist: "Taalpatar Shepai",
        src: "./songs/Ami-Sudhu-Khujechi-Amay-Taalpatar-Shepai.mp3",
        cover: "./song cover/Ami_Sudhu_Khujechi_Amay_cover.jpeg"
    },
    {
        title: "8. Ureche Mon",
        artist: "Arijit Singh",
        src: "./songs/Ureche Mon Pureche Mon(Mr-Jatt1.com).mp3",
        cover: "./song cover/Ureche_Mon_cover.jpg"
    },
    {
        title: "9. I Love You",
        artist: "Ash King and Clinton Cerejo",
        src: "./songs/I Love You Bodyguard 320 Kbps.mp3",
        cover: "./song cover/I_Love_You_cover.jpg"
    },
    {
        title: "10. Cheliya",
        artist: "Arijit Singh and Shilpa Rao",
        src: "./songs/Cheliya-(PagalWorld).mp3",
        cover: "./song cover/Cheliya_cover.jpeg"
    },
    {
        title: "11. Janib",
        artist: "Arijit Singh, Sunidhi Chauhan, Jatinder Shah",
        src: "./songs/Janib Duet Dilliwaali Zaalim Girlfriend 320 Kbps.mp3",
        cover: "./song cover/Janib_cover.jpg"
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
