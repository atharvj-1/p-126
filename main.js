song="";
function preload(){
    song=loadSound("music.mp3");
}

function play(){
    song.play();
}



function setup(){
    canvas=createCanvas(700,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,700,500);
}

