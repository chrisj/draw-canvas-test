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


