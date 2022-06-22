var character = document.getElementById("character");
var interval;
var both = 0;



// creating a new element

const body = document.body
const div = document.createElement("div");
body.appendChild(div);
div.setAttribute("id", "block-one");

/*
//adding multiple elements

let divElement = document.createElement("div");
let createAttribute = document.createAttribute("id", "block-two");
divElement.appendChild(createAttribute);
let gameDiv = document.querySelector('.game');
gameDiv.appendChild(divElement);

*/


//Game over

setInterval(function() {

    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if (characterLeft == blockLeft &&
        blockTop < 400 &&
        blockTop > 300) {

        alert("Game over, refesh the page again");
        block.style.animation = "none";
        block.style.display = "none";
    }
}, 1);



/*direction*/

function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 1 + "px";
    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 338) {
        character.style.left = left + 1 + "px";
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