noseX = 0;
noseY = 0;

function preload() {
    mus = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 250);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw() {
    image(video, 0, 0, 300, 250);
    image(mus, noseX, noseY, 30, 30 );
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotposes() {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x - 12;
        noseY = result[0].pose.nose.y - 12;
        console.log("Nose X is equal to - " + noseX);
        console.log("Nose Y is equal to - " + noseY);
    }
}

function save1() {
    save("snap.jpeg")
}