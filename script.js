const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player {
    constructor() {


        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image();
        image.src = './images/spacecraft.png';
        image.onload = () => {
            const scale = 0.15;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 30
            }
        }
    }

    draw() {
        if (this.image)
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}

const player = new Player();
player.draw();

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

animate();

// addEventListener('keydown', (event) => {
//     console.log(event);
// })

addEventListener('keydown', ({ key }) => {
    console.log(key);
    switch (key) {
        case 'ArrowLeft, a':
            console.log('left');
            break;
        case 'ArrowRight, d':
            console.log('right');
            break;
    }
})