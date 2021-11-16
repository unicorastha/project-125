noseX=0;
nose=0;
differrence=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is Initialized!')
}


function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX=" + noseX +"noseY=" +noseY);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        differrence= floor(leftWristX-rightWrist);

        console.log("leftWristX=" + leftWristX+ "rightWristX= " + rightWristX + " differnce = " + differrence);

    }
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, differrence);
}