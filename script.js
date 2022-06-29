var airCraft = document.getElementById("character");
var interval;
var both = 0;


// creating a new element

const body = document.body

function addProjectile(left) {
    const div = document.createElement("div");
    body.appendChild(div);
    div.setAttribute("class", "projectile-block");
    // random value between 780 and 1100
    div.style.left = `${left}%`;

    // dynamic anymation speed for animation: block-one 4000ms infinite linear;
    // random number between 2000 and 5000

    div.style.animation = `block-one ${Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000}ms infinite linear`;

}


addProjectile(44);
addProjectile(20);
addProjectile(-4);
addProjectile(-27);
addProjectile(12);
addProjectile(27);
addProjectile(4);



//Game over

setInterval(function() {

    const projectileBlocks = document.getElementsByClassName('projectile-block');

    for (let i = 0; i < projectileBlocks.length; i++) {
        const projectile = projectileBlocks[i];

        const airCraftPosition = airCraft.getBoundingClientRect();
        const projectilePosition = projectile.getBoundingClientRect();
        if (airCraftPosition.left < projectilePosition.right &&
            airCraftPosition.right > projectilePosition.left &&
            airCraftPosition.top < projectilePosition.bottom &&
            airCraftPosition.bottom > projectilePosition.top) {
            console.log('Game Over');
            clearInterval(interval);
            alert("Game over, refesh the page again");
            projectile.style.animation = "none";
            projectile.style.display = "none";
            break;
        }

    }
}, 100);






/*direction of movement of aircraft*/

function moveLeft() {
    var left = parseInt(window.getComputedStyle(airCraft).getPropertyValue("left"));
    if (left > 0) {
        airCraft.style.left = left - 1 + "px";
    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(airCraft).getPropertyValue("left"));
    if (left < 334) {
        airCraft.style.left = left + 1 + "px";
    }
}

/*activation */

document.addEventListener("keydown", event => {
    if (both == 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

/*Stop moving action of pressing  left or right buttons */

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
});

//Clock activation//

var Clock = {
    totalSeconds: 0,
    start: function() {
        if (!this.interval) {
            var self = this;

            function pad(val) { return val > 9 ? val : "0" + val; }
            this.interval = setInterval(function() {
                self.totalSeconds += 1;

                document.getElementById("min").innerHTML = pad(Math.floor(self.totalSeconds / 60 % 60));
                document.getElementById("sec").innerHTML = pad(parseInt(self.totalSeconds % 60));
            }, 1000);
        }
    },
};

document.addEventListener("keydown", function() { Clock.start(); });