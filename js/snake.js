import {Snake,update,draw} from "./class/snake.js";
const board = document.getElementById("gameboard");
const score = document.getElementById("score");
const reset = document.getElementById("reset");



let deltatime = 0;
let lastTime = 0;
let snake = new Snake(10,10);

function main(currentTime){
    window.requestAnimationFrame(main);
    deltatime = (currentTime - lastTime)/1000;
    if (deltatime < 1/snake.SPEED) return;
    lastTime = currentTime;


    update(snake,board);
    draw(snake,board);
}

window.requestAnimationFrame(main);

