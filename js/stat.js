var BEGIN_X = 170;
var BEGIN_Y = 110;
var SCALE = 1.5;
var GAP = 10;
var FONT_GAP = 80;
var BAR_GAP = 40;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 100;

var renderCloud = function(ctx, x, y, color, scale) {
  //ctx.fillStyle = color;
  //ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-40,  20, -40,  70,  60,  70);
  ctx.bezierCurveTo(80,  100, 150, 100, 170,  70);
  ctx.bezierCurveTo(250,  70, 250,  40, 220,  20);
  ctx.bezierCurveTo(260, -40, 200, -50, 170, -30);
  ctx.bezierCurveTo(150, -75,  80, -60,  80, -30);
  ctx.bezierCurveTo(30,  -75, -20, -60,   0,   0);
  ctx.strokeStyle = 'lightgray';
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

var renderText = function(ctx, text, x, y) {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText(text, x, y);
};

var renderResultBar = function(ctx, x, y, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BAR_WIDTH, height);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, BEGIN_X, BEGIN_Y, 'rgba(0, 0, 0, 0.3)', SCALE);
  renderCloud(ctx, BEGIN_X - GAP, BEGIN_Y - GAP, '#fff', SCALE);

  for (var i = 0; i < names.length; i++) {
    var height = Math.round((times[i] * BAR_MAX_HEIGHT) / getMaxElement(times));
    renderText(ctx, names[i], BEGIN_X + FONT_GAP*i, BEGIN_Y - GAP*3);
    renderResultBar(
      ctx,
      BEGIN_X + (BAR_WIDTH + BAR_GAP)*i,
      BEGIN_Y - GAP*2 + BAR_MAX_HEIGHT - height, height,
      names[i] === 'Вы' ? 'red' : 'rgba(0, 0, 255, ' + Math.random() + ')'
      );
  }
};
