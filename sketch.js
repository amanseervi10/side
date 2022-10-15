// const order="nxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'."
let csea;
let mytext;
let startindex=0;
let i=0;

function preload(){
  csea=loadImage('csea.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont("Helvetica")
  slider = createSlider(0, 1, 1);
  slider.position(70, 10);
  slider.style('width', '80px');
}

function draw() {
  i=slider.value();
  if(i==0){
    mytext="CSEA SUCKS!  "
  }
  else{
    mytext="CSEA ROCKS "
  }
  frameRate(7);
  background(0);
  textSize(25);
  fill(255);
  text('Do not toggle', 100, 50);
  // image(csea,230,0,2*width/3,height);
  let charindex=startindex;
  let h=height/csea.height;
  let w=2*h/3;
  csea.loadPixels();
  for(j=0; j<csea.height; j++){
  for(i=0; i<csea.width; i++){
      let pixelindex=(i+j*csea.width)*4;
      const r=csea.pixels[pixelindex+0];
      const g=csea.pixels[pixelindex+1];
      const b=csea.pixels[pixelindex+2];
      let avg=(r+g+b)/3;

      noStroke();
      fill(avg);
      textAlign(CENTER,CENTER);
      // const charindex=floor(map(avg,0,255,order.length-1,0));
      textSize(h);
      text(mytext.charAt(charindex % mytext.length), 380+i * w + w * 0.5, j * h + h * 0.5)
      charindex++;
    }
  }
  startindex++;
}
