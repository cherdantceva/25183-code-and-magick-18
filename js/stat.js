'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LINE_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', x + GAP, y + LINE_HEIGHT);
  ctx.fillText('Список результатов:', x + GAP, y + LINE_HEIGHT * 2);
};


var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var player = players.indexOf('Вы');


  for (var i = 0; i < players.length; i++) {
    if (i === player) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomIntInclusive(0, 100) + '%,50%)';
    }

    drawText(
        ctx,
        players[i],
        CLOUD_X + GAP + BAR_GAP * i + BAR_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT / 1.5
    );

    drawText(
        ctx,
        Math.round(times[i]),
        CLOUD_X + GAP + BAR_GAP * i + BAR_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - LINE_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)
    );

    drawRect(
        ctx,
        CLOUD_X + GAP + BAR_GAP * i + BAR_WIDTH * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime),
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
  }

};

function drawText(ctx, text, textX, textY) {
  ctx.fillText(text, textX, textY);
}

function drawRect(ctx, rectX, rectY, rectWidth, rectHeight) {
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}
