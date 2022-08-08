const WIDTH = 300;
const HEIGHT = WIDTH;

const ctrlcanvas = document.getElementById('ctrlcanvas');
const ctrlctx = ctrlcanvas.getContext('2d');
ctrlctx.imageSmoothingEnabled = false;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const hdncanvas = document.createElement('canvas');
const hdnctx = hdncanvas.getContext('2d');
hdnctx.imageSmoothingEnabled = false;

ctrlcanvas.width = WIDTH;
ctrlcanvas.height = HEIGHT;


canvas.width = WIDTH;
canvas.height = HEIGHT;

hdncanvas.width = WIDTH;
hdncanvas.height = HEIGHT;

const red = 'rgba(255, 0, 0, 1)';
const blue50Perc = 'rgba(0, 0, 255, 0.5)';


// control
ctrlctx.fillStyle = red;
ctrlctx.fillRect(0, 0, WIDTH, HEIGHT);
ctrlctx.fillStyle = blue50Perc;
ctrlctx.fillRect(0, 0, WIDTH, HEIGHT);

ctrlctx.fillStyle = 'black';
ctrlctx.font = '60px sans-serif';
ctrlctx.fillText("1", 50, 75);


// test
ctx.fillStyle = red;
ctx.fillRect(0, 0, WIDTH, HEIGHT);
hdnctx.fillStyle = blue50Perc;
hdnctx.fillRect(0, 0, WIDTH, HEIGHT);
ctx.drawImage(hdncanvas, 0, 0);

ctx.fillStyle = 'black';
ctx.font = '60px sans-serif';
ctx.fillText("2", 50, 75);





const colorToUint32 = (color) => {
  return ((255 * color.a) << 24
					| color.b << 16
					| color.g << 8
					| color.r << 0);
}


// test 2
hdnctx.clearRect(0, 0, WIDTH, HEIGHT);

let segcoloring = hdnctx.createImageData(WIDTH, HEIGHT);
let img32 = new Uint32Array(segcoloring.data.buffer);

const color = colorToUint32({r: 0, g: 0, b: 255, a: 0.5});

for (var i = 0 - 1; i <= img32.length / 2; i++) {
  img32[i] = color;
}

hdnctx.putImageData(segcoloring, 0, 0);


const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.imageSmoothingEnabled = false;

canvas2.width = WIDTH;
canvas2.height = HEIGHT;



ctx2.fillStyle = red;
ctx2.fillRect(0, 0, WIDTH, HEIGHT);
ctx2.drawImage(hdncanvas, 0, 0);

ctx2.fillStyle = 'black';
ctx2.font = '60px sans-serif';
ctx2.fillText("3", 50, 75);




// test 3
hdnctx.clearRect(0, 0, WIDTH, HEIGHT);

let something = ctx.createImageData(WIDTH, HEIGHT);
let img322 = new Uint32Array(something.data.buffer);

// const color = colorToUint32({r: 0, g: 0, b: 255, a: 0.5});

for (var i = 0 - 1; i <= img322.length; i++) {
  img322[i] = (255 << 24) + i * 200;
}

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.imageSmoothingEnabled = false;

canvas3.width = WIDTH;
canvas3.height = HEIGHT;



ctx3.putImageData(something, 0, 0);




ctx3.fillStyle = blue50Perc;
ctx3.fillRect(0, 0, WIDTH / 2, HEIGHT / 2);

ctx3.fillStyle = 'black';
ctx3.font = '60px sans-serif';
ctx3.fillText("4", 50, 75);





