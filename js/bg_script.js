const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// ctx.globalAlpha = 0.2;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// get mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        ctx.fillStyle = "#8C5523";
        ctx.fill();
    }

    // check particle position, check mouse position, move the particle, draw the particle
    update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }    

        // check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 5) {
                this.x += 7;
            }
            if (mouse.x > this.x && this.x > this.size * 5) {
                this.x -= 7;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 5) {
                this.y += 7;
            }
            if (mouse.y > this.y && this.y > this.size * 5) {
                this.y -= 7;
            }
        }

        // move and draw particles
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// create particle array
const init = () => {
    console.log("initializing...")
    particlesArray = [];
    let numberOfparticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfparticles; i++) {
        let size = (Math.random() * 4) + 1.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 3) - 2.5;
        let directionY = (Math.random() * 3) - 2.5;
        let color = "#8C5523";

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }

    connect();
}

const connect = () => {
    let opacityValue = 1;
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
            let distance = Math.sqrt(Math.pow(particlesArray[i].x - particlesArray[j].x, 2) + Math.pow(particlesArray[i].y - particlesArray[j].y, 2));
            if (distance < Math.sqrt(Math.pow(canvas.width/12, 2) + Math.pow(canvas.height/12, 2))) {
                opacityValue = 1 - (distance/150);
                ctx.strokeStyle = "rgba(140, 85, 31," + opacityValue + " )";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

// resize event
window.addEventListener("resize", (event) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = (canvas.heigh/80) * (canvas.height/80);
    init();
});

// mouse out event
window.addEventListener("mouseout", (event) => {
    mouse.x = undefined;
    mouse.y = undefined;
})

const openMenu = document.querySelector("#show-menu");
const hideMenuIcon = document.querySelector("#hide-menu");
const sideMenu = document.querySelector("#nav-menu");

// openMenu.addEventListener("click", (event) => {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//     mouse.radius = (canvas.heigh/80) * (canvas.height/80);
//     init();
// })

// hideMenuIcon.addEventListener("click", (event) => {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//     mouse.radius = (canvas.heigh/80) * (canvas.height/80);
//     init();
// })

init();
animate();