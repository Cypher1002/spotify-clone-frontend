console.log("welcome to spotify");
//variable initialize 
 let songIndex = 0;
 let audioElement = new Audio('1.mp3');
 let masterPlay = document.getElementById('masterplay')
let myProgressBar = document.getElementById('progressBar');
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');
let songsItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
{songName:"venom", filePath: "1.mp3", coverPath: "covers/1.jpg"},
{songName:"venom", filePath: "2.mp3", coverPath: "covers/1.jpg"},
{songName:"rapGod", filePath: "3.mp3", coverPath: "covers/1.jpg"},
{songName:"MockingBird", filePath: "4.mp3", coverPath: "covers/1.jpg"},
{songName:"The real Slim Shady", filePath: "1.mp3", coverPath: "covers/1.jpg"}
];

songsItem.forEach((element,i)=>{
    console.log(element,i);
   element.getElementsByTagName('img')[0].src = songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});
// audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =1;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;

})

myProgressBar.addEventListener('change' , ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeALLplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-play');
        element.classList.add('fa-pause');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
     console.log(e.target);
     makeALLplay();
     songIndex= parseInt(e.target.id);
     e.target.remove('fa-play');
    //  e.target.add('fa-pause');
     audioElement.src = `${songIndex}.mp3`;
     mastersongname.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity =1;
     masterPlay.classList.remove('fa-play');
     masterPlay.classList.remove('fa-pause');

 })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>=4){songIndex =0;
    }else{
      songIndex += 1;

    }
    audioElement.src = `${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-solid fa-play');
    masterPlay.classList.remove('fa-solid fa-3x fa-pause');

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex<=4){songIndex -=0;
    }else{
      songIndex-= 1
    }
    audioElement.src = `${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-solid fa-play');
    masterPlay.classList.remove('fa-solid fa-pause');
})


