const songs = [
    {
        music: "Music 1",
        artist: "Artist 1",
        album : "Album 1",
    },
    {
        music: "Music 2",
        artist: "Artist 2",
        album : "Album 2",
    },
    {
        music: "Music 3",
        artist: "Artist 3",
        album : "Album 3",
    },
    {
        music: "Music 4",
        artist: "Artist 4",
        album : "Album 4",
    },
    {
        music: "Music 4",
        artist: "Artist 4",
        album : "Album 4",
    },
    {
        music: "Music 4",
        artist: "Artist 4",
        album : "Album 4",
    },
    {
        music: "Music 4",
        artist: "Artist 4",
        album : "Album 4",
    },
    {
        music: "Music 4",
        artist: "Artist 4",
        album : "Album 4",
    },
]

const container = document.body;
let currentRow = null

songs.forEach((song, index)=>{

    if(index%4===0){
        currentRow = document.createElement('div')
        currentRow.classList.add('music-row')
        container.appendChild(currentRow)
    }
    let musicCard = document.createElement('div');
    musicCard.classList.add('music-card')

    musicCard.innerHTML = `<h3 id="music-name">${song.music}</h3>
            <h5 id="artist">${song.artist}</h5>
            <div class="music-foot">
                <p id="album">${song.album}</p>
                <button id="play-btn">Play</button>
            </div>`
    
    currentRow.appendChild(musicCard)
})
