let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
   x: 8 * box,
   y: 8 * box
}
let direction = 'right';
let food = {
   x: Math.floor(Math.random() * 15 + 1) * box,
   y: Math.floor(Math.random() * 15 + 1) * box
}

function createBackGround() {
   context.fillStyle = 'lightgreen';
   context.fillRect(0, 0 , 16 * box, 16 * box);
}

function createSnake() {
   for(let i = 0; i < snake.length; i++){
      context.fillStyle = "#000";
      context.fillRect(snake[i].x, snake[i].y, box, box);
   }
}

function drawFood() {
   context.fillStyle = 'green';
   context.fillRect(food.x, food.y, box, box);
}

function update(event) {
   if(event.key === 'ArrowLeft' && direction != 'right') direction = 'left';
   if(event.key === 'ArrowUp' && direction != 'down') direction = 'up';
   if(event.key === 'ArrowRight' && direction != 'left') direction = 'right';
   if(event.key === 'ArrowDown' && direction != 'up') direction = 'down';
}

document.addEventListener('keydown', update);

function startGame() {  
   if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
   if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
   if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
   if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

   createBackGround();
   createSnake();
   drawFood();

   let snakeX = snake[0].x;
   let snakeY = snake[0].y;
   
   if(direction == 'right') snakeX += box;
   if(direction == 'left') snakeX -= box;
   if(direction == 'up') snakeY -= box;
   if(direction == 'down') snakeY += box;

   snake.pop();

   let newHead = {
      x: snakeX,
      y: snakeY
   };

   snake.unshift(newHead);
}

let game = setInterval(startGame, 100);