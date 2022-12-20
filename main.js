song="";
right_wrist_x=0;
right_wrist_y=0;
left_wrist_x=0;
left_wrist_y=0;
score_right_wrist=0;
score_left_wrist=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);

}
function modalLoaded(){
    console.log('Modal is loaded');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}
function draw(){
     image(video,0,0,400,400);
}