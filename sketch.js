let video;
let videoSize = 30;
let ready = false;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO, videoReady);
  video.size(videoSize, videoSize);
  video.hide();
}

//video is ready!
function videoReady() {
  ready = true;
}

function draw() {
  background(0);
  if (ready) {
    // Render the low-res image
    let w = width / videoSize;
    video.loadPixels();
    for (let x = 0; x < video.width; x++) {
      for (let y = 0; y < video.height; y++) {
        let index = (x + y * video.width) * 4;
        let r = video.pixels[index + 0];
        let g = video.pixels[index + 1];
        let b = video.pixels[index + 2];
        noStroke();
        fill(r, g, b);
        rect(x * w, y * w, w, w);
      }
    }
    
  }
}

//Add an example
function addExample() {
  
}

function trainModel() {
  
}






