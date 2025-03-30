const songsList = [
    {
        id: 0,
        author: "Ariana Grande",
        title: "intro (end of the world)",
        duration: "1:32",
        album: "eternal sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 1,
        author: "Ariana Grande",
        title: "bye",
        duration: "2:44",
        album: "eternal Sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3",
    },
    {
        id: 2,
        author: "Ariana Grande",
        title: "don't wanna break up again",
        duration: "2:54",
        album: "eternal Sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3",
    },
    {
        id: 3,
        author: "Ariana Grande",
        title: "eternal sunshine",
        duration: "3:30",
        album: "eternal sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3",
    },
    {
        id: 4,
        author: "Ariana Grande",
        title: "supernatural",
        duration: "3:03",
        album: "eternal sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3",
    },
    {
        id: 5,
        author: "Ariana Grande",
        title: "true story",
        duration: "3:51",
        album: "eternal sunshine",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 6,
        author: "Ariana Grande",
        title: "the boy is mine",
        duration: "2:58",
        album: "Lover",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 7,
        author: "Ariana Grande",
        title: "yes, and?",
        duration: "3:19",
        album: "BE",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 8,
        author: "Ariana Grande",
        title: "we can't be friends (wait for your love)",
        duration: "3:35",
        album: "Hollywood's Bleeding",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 9,
        author: "Ariana Grande",
        title: "i wish i hated you",
        duration: "4:02",
        album: "SOUR",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 10,
        author: "Ariana Grande",
        title: "imperfect for you",
        duration: "4:02",
        album: "An Evening with Silk Sonic",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
    {
        id: 11,
        author: "Ariana Grande",
        title: "Hampstead",
        duration: "3:29",
        album: "Planet Her",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3"
    },
]
const playButton = document.getElementById("play-button");
const musicPlaylist = document.getElementById("playlist");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumTitle = document.getElementById("album-title");

const audio = new Audio();
const currentSong = 0;
let currentSongIndex = 0;
const currentSongDuration = 0;
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
// const selectSong = document.querySelectorAll(".song-square");


musicPlaylist.innerHTML = songsList.map((music, index) => {
    return `
       <hr class="border-gray-300">
        <article class="song-item flex justify-start align-top gap-2 cursor-pointer hover:bg-gray-700" data-index="${index}">
          <div>
            <p class="text-lg font-semibold text-gray-300">${music.id}</p>
          </div>
          <div>
            <p class="text-base font-semibold text-gray-300">${music.title}</p>
            <p class="text-sm font-mono text-gray-300">${music.author}</p>
          </div>
          
          <div class="flex-1"></div>
                      <p class="text-sm font-mono text-gray-300">${music.duration}</p>

        </article>
    `;
}).join("");




function playSong(index){
    audio.src = songsList[index].src;
    audio.play();
}


function changeSong(index){
    songTitle.innerText = songsList[index].title;
    artistName.innerText = songsList[index].author;
    albumTitle.innerText = songsList[index].album;
}

playButton.addEventListener("click", () => {
    if (audio.paused){
    playSong(currentSongIndex);
    changeSong(currentSongIndex);
    } else {
        audio.pause();
    }
});

previousButton.addEventListener("click", () => {
    if (currentSongIndex > 0){
        currentSongIndex--;
        playSong(currentSongIndex);
        changeSong(currentSongIndex);

    }
});

nextButton.addEventListener("click", () => {
    if (currentSongIndex < songsList.length - 1){
        currentSongIndex++;
        playSong(currentSongIndex);
        changeSong(currentSongIndex);

    }
});

musicPlaylist.addEventListener("click", (e) =>{
    const article = e.target.closest(".song-item");

    if (!article) return;

    currentSongIndex = parseInt(article.dataset.index);
    playSong(currentSongIndex);
    changeSong(currentSongIndex);


    document.querySelectorAll(".song-item").forEach((song) => song.classList.remove("bg-gray-700"));
    article.classList.add("bg-gray-700");

})


// const selectSong = document.querySelector(".song-item").forEach(article => {
//     article.addEventListener("click" () =>{})
    
// });
// selectSong.addEventListener("click", ()=>{
//     playSong(currentSongIndex);
//     selectSong.classList.add("bg-gray-300 cursor-pointer");
// })