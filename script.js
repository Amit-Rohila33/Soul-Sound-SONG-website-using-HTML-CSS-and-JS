console.log("welcome to spotify")

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
    { songName: "Tum hi Ho", filePath: 'songs/1.mp3', coverPath: "images/tum hi ho.jpg" },
    { songName: "Phir bhi Tumko Chaunga", filePath: 'songs/2.mp3', coverPath: "images/phir bhi tumko chauga.jpg" },
    { songName: "Tere Sang Yaara", filePath: 'songs/3.mp3', coverPath: "images/tere sang yaar.jpg" },
    { songName: "Tum Hi Aana", filePath: 'songs/4.mp3', coverPath: "images/tum hi aanaa.jpg" },
    { songName: "Chahun mai ya na", filePath: 'songs/5.mp3', coverPath: "images/tum hi ho.jpg" },
    { songName: "Sunn Raha Hai", filePath: 'songs/6.mp3', coverPath: "images/tum hi ho.jpg" },
    { songName: "Piya Aaye na", filePath: 'songs/7.mp3', coverPath: "images/tum hi ho.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementsByClassName["songName"][0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// songItemPlay.forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         console.log(e);

//     })
// })

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songIndex + 1}.mp3`
        audioElement.currentTime = 0;
        if (audioElement.paused) {
            audioElement.play()
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }

    })
})


document.getElementById('next').addEventListener('click', (e) => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    

})
document.getElementById('previous').addEventListener('click', (e) => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    audioElement.currentTime = 0;
    
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})
