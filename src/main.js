import imagePause from "./assets/icons/pause_track.svg";
import imagePlay from "./assets/icons/play.svg";
import trashIcon from "./assets/icons/trash_icons.svg";
import illustration from "./assets/icons/meditation.svg";
import { songsList } from "./songsList";

const playButton = document.getElementById("play-button");
const musicPlaylist = document.getElementById("playlist");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumTitle = document.getElementById("album-title");
const audio = new Audio();
let currentSongIndex = 0;
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const songListCurrent = [...songsList];

function rerenderPlaylist(){
    const refreshButton = document.getElementById("refresh-button");
    refreshButton.addEventListener("click", () => {
        songsList.push(...songListCurrent);
        renderPlaylist();
    });
}

function renderPlaylist (){

    if (songsList.length === 0){
        musicPlaylist.innerHTML = `
        
        <div class="flex flex-col w-full gap-2">
            <hr class="border-gray-300">
            <p class="text-white ">There are no songs in the playlist</p>
            <button id="refresh-button" class="bg-gray-300 cursor-pointer rounded-lg flex w-34 h-8 justify-center items-center hover:bg-gray-400">Recharge playlist</button>
            <img class="w-50 h-50" src=${illustration}></img>
        </div>
        `;

        rerenderPlaylist();

        return;
    }

    musicPlaylist.innerHTML = songsList.map((music, index) => {
        return `
           <hr class="border-gray-300">
            <article class="song-item flex justify-start align-top gap-2 cursor-pointer hover:bg-gray-700" data-index="${index}">
              <div>
                <p class="text-lg font-semibold text-gray-300">${music.id + 1}</p>
              </div>
              <div>
                <p class="text-base font-semibold text-gray-300">${music.title}</p>
                <p class="text-sm font-mono text-gray-300">${music.author}</p>
              </div>
              <div class="flex-1"></div>
                <p class="text-sm font-mono text-gray-300">${music.duration}</p>
                <img src="${trashIcon}" alt="delete" class="delete w-4 h-4 bg-gray-200 p-2 rounded-2xl text-red-600"></img>
            </article>
        `;
    }).join("");

  
}


function playSong(index){
    audio.src = songsList[index].src;
    audio.play();
}

function highlightSong(index){
    document.querySelectorAll(".song-item").forEach((song) => song.classList.remove("bg-gray-700"));
    document.querySelector(`.song-item[data-index="${index}"]`).classList.add("bg-gray-700");
}

function changeSong(index){
    songTitle.innerText = songsList[index].title;
    artistName.innerText = songsList[index].author;
    albumTitle.innerText = songsList[index].album;
}


renderPlaylist();

playButton.addEventListener("click", () => {
    if (audio.paused){
        playSong(currentSongIndex);
        changeSong(currentSongIndex);
        playButton.src = imagePause; 
    } else {
        audio.pause();
        playButton.src = imagePlay;
    }
});

previousButton.addEventListener("click", () => {
    if (currentSongIndex > 0){
        currentSongIndex--;
        playSong(currentSongIndex);
        changeSong(currentSongIndex);
        highlightSong(currentSongIndex)
    }
});

nextButton.addEventListener("click", () => {
    if (currentSongIndex < songsList.length - 1){
        currentSongIndex++;
        playSong(currentSongIndex);
        changeSong(currentSongIndex);
        highlightSong(currentSongIndex)
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

    const deleteArticle = e.target.closest(".delete");
    if (!deleteArticle) return;
    
    if (deleteArticle){
        const index = parseInt(deleteArticle.parentElement.dataset.index);
        const wasIndex = index === currentSongIndex;
        songsList.splice(index, 1);
        article.remove();
        renderPlaylist();
    
        if (wasIndex){
            songTitle.innerText = "";
            artistName.innerText = "";
            albumTitle.innerText = "";
        }
        audio.pause();
    }
})

audio.addEventListener("ended", () => {
    if (currentSongIndex < songsList.length - 1){
        currentSongIndex++;
        playSong(currentSongIndex);
        changeSong(currentSongIndex);
        highlightSong(currentSongIndex)
    }
});


