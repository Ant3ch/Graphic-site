
export class Snake{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.body = [
            {x:11,y:11},
            {x:12,y:11},
            {x:13,y:11},
            {x:14,y:12}

        ];
        this.lastcoordirection = {x:0,y:0};
        this.currentcoordirection = {x:0,y:0};
        this.direction = "right";
        this.size = this.body.length;
        this.SPEED=2;
    }
}

function getinput(snake){
    snake.lastcoordirection=snake.currentcoordirection;
    return snake.currentcoordirection;
}

export function update(snake,ctx,board) {
    const input = getinput(snake);
    for (let i = snake.body.length-2; i >= 0; i--) {
        snake.body[i+1] = {... snake.body[i]};
    }




    snake.body[0].x += input.x;
    snake.body[0].y += input.y;

}

export function draw(snake,board) {
    for (let i =0 ; i<document.getElementsByClassName('snake-cell').length; i++) {
        board.removeChild(document.getElementsByClassName('snake-cell')[i]);
    }
   for (let i = 0; i < snake.body.length; i++) {
       let segment = snake.body[i];
       const element = document.createElement('div');
       element.style.gridRowStart = segment.y;
       element.style.gridColumnStart = segment.x;

       element.classList.add('snake-cell');
       board.appendChild(element);
   }


}