'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LINE_HEIGHT = 20;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = "#000";
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', x + GAP, y + LINE_HEIGHT );
  ctx.fillText('Список результатов:', x + GAP, y + LINE_HEIGHT * 2);
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

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + BAR_GAP * i + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT/1.5);
    ctx.fillRect(CLOUD_X + GAP + BAR_GAP * i + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
