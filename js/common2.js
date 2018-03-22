
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


class Rect {
    constructor({x, y, opacity, size} = {x:100, y:100, opacity: 0.7, size: 100}){
        this.x = x;
        this.y = y;
        this.size = size;
        this.grd = ctx.createLinearGradient(this.x, this.y, this.size, 0);
        this.grd.addColorStop(0, "rgba(255,0,0," + opacity + ")");
        this.grd.addColorStop(1, "rgba(255,0,0," + opacity + ")");

        this.movementIncrementX = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
        this.movementIncrementY = Math.random()*4*(Math.random() > 0.5 ? 1 : -1);
    }
    draw(){
        ctx.fillStyle = this.grd;
        ctx.fillRect(this.x, this.y, this.size, this.size); 
    }
    move() {
        if (((this.x + this.size) > 500) || (this.x < 0))
            this.movementIncrementX *= -1;
      
        if (((this.y + this.size) > 500) || (this.y < 0))
            this.movementIncrementY *= -1;

        
        this.y += this.movementIncrementY;
        this.x += this.movementIncrementX;
        this.draw();
    }
}

class Circle extends Rect{
  draw(){
    ctx.fillStyle = this.grd;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 180);
    ctx.stroke();
  }  
}

class Triagle extends Rect{
   draw(){
    ctx.fillRect(this.x, this.y, this.size, this.size); 
    ctx.fillStyle="#000000";

    ctx.rotate(45 * Math.PI / 180);
  }  
}


const figures = [];

for (let i = 0; i <= 10; i++) {
    let size =Math.random() * 100 
    let rect = new Rect({
        x: Math.abs( Math.random() * 500 - size),
        y: Math.abs( Math.random() * 500 - size), 
        opacity: Math.random() * 0.5, 
        size
    });
    rect.draw();
    figures.push(rect);
}
for (let i = 0; i <= 10; i++) {
    let size =Math.random() * 100 
    let circle = new Circle({
        x: Math.abs( Math.random() * 500 - size),
        y: Math.abs( Math.random() * 500 - size), 
        opacity: Math.random() * 0.5, 
        size
    });
    circle.draw();
    figures.push(circle);
}
for (let i = 0; i <= 10; i++) {
    let size =Math.random() * 100 
    let triagle = new Triagle({
        x: Math.abs( Math.random() * 500 - size),
        y: Math.abs( Math.random() * 500 - size), 
        opacity: Math.random() * 0.5, 
        size
    });
    triagle.draw();
    figures.push(triagle);
}

setInterval(function () {
    ctx.clearRect(0, 0, 500, 500);
    this.name = '';
    figures.forEach((rect) => {
        rect.move();
    })
   
}, 1);