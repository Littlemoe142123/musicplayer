const songElement = document.getElementById("songElement");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");
const volumePercentage = document.getElementById("volumePercentage");
const currentPlayingTime = document.getElementById("currentPlayingTime");
const skipPlusBtn = document.getElementById("skipPlusBtn");
const skipMinusBtn = document.getElementById("skipMinusBtn");

playBtn.onclick = () => 
{
    console.log(songElement.volume);
    songElement.play();
}

pauseBtn.onclick = () =>
{
    songElement.pause();
}

skipPlusBtn.onclick = () =>
{
    const second = parseInt(songElement.currentTime);
    const toltalSecond = parseInt(songElement.duration);
    if(second<toltalSecond)
    {
    songElement.currentTime = second + 1;
    }
}

skipMinusBtn.onclick = () =>
{
    const second = parseInt(songElement.currentTime);
    
    if(second>=5)
    {
    songElement.currentTime = second - 1;
    }
}

volumeUpBtn.onclick = () => 
{
    let realVolumePercentage = parseInt(songElement.volume * 100);
    volumePercentage.innerText = `${realVolumePercentage} %`;

    if(songElement.volume<1)
    {

        songElement.volume = ((realVolumePercentage+5)/100);
    }
    
}

volumeDownBtn.onclick = () => 
{
    let realVolumePercentage = parseInt(songElement.volume * 100);
    volumePercentage.innerText = `${realVolumePercentage} %`;

    if(songElement.volume>0.1)
    {
        songElement.volume = ((realVolumePercentage-5)/100);
    }
   
}

songElement.addEventListener("timeupdate", () => 
{
    const second = parseInt(songElement.currentTime);
    const displayMinute = parseInt(second / 60);
    const displaySecond = parseInt(second % 60);
    currentPlayingTime.innerText= ` ${displayMinute} min : ${displaySecond} sec `;
})

