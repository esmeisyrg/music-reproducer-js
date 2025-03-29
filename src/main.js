const songsList = [
    {
        id: 0,
        author: "Ariana Grande",
        title: "7 Rings",
        duration: "3:05",
        album: "Thank U, Next",
        src: "",
    },
    {
        id: 1,
        author: "Ariana Grande",
        title: "bye bye",
        duration: "3:05",
        album: "Thank U, Next",
        src: "",
    },
    {
        id: 2,
        author: "The Weeknd",
        title: "Blinding Lights",
        duration: "3:22",
        album: "After Hours",
        src: "",
    },
    {
        id: 3,
        author: "Dua Lipa",
        title: "Levitating",
        duration: "3:23",
        album: "Future Nostalgia",
        src: "",
    },
    {
        id: 4,
        author: "Billie Eilish",
        title: "bad guy",
        duration: "3:14",
        album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
        src: "",
    },
    {
        id: 5,
        author: "Harry Styles",
        title: "Watermelon Sugar",
        duration: "2:54",
        album: "Fine Line",
        src: "",
    },
    {
        id: 6,
        author: "Taylor Swift",
        title: "Cruel Summer",
        duration: "2:58",
        album: "Lover",
        src: "",
    },
    {
        id: 7,
        author: "BTS",
        title: "Dynamite",
        duration: "3:19",
        album: "BE",
        src: "",
    },
    {
        id: 8,
        author: "Post Malone",
        title: "Circles",
        duration: "3:35",
        album: "Hollywood's Bleeding",
        src: "",
    },
    {
        id: 9,
        author: "Olivia Rodrigo",
        title: "drivers license",
        duration: "4:02",
        album: "SOUR",
        src: "",
    },
    {
        id: 10,
        author: "Bruno Mars",
        title: "Leave The Door Open",
        duration: "4:02",
        album: "An Evening with Silk Sonic",
        src: "",
    },
    {
        id: 11,
        author: "Doja Cat",
        title: "Kiss Me More",
        duration: "3:29",
        album: "Planet Her",
        src: "",
    },
]

const musicPlaylist = document.getElementById("playlist");
const audio = new Audio();

musicPlaylist.innerHTML = songsList.map(music => {
    return `
       <hr class="border-gray-300">
        <article class="flex justify-start align-top gap-2">
          <div>
            <p class="text-lg font-semibold text-gray-300">${music.id}</p>
          </div>
          <div>
            <p class="text-base font-semibold text-gray-300">${music.song}</p>
            <p class="text-sm font-mono text-gray-300">${music.author}</p>
          </div>
        </article>
    `;
})

