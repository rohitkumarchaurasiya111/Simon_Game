let deviceSeq = [];
let userSeq = [];

let button = ["green", "red", "purple", "blue"];
let level = 0;
let started = false;
let highest = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        // console.log("Game Started");
        started = true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

let heading = document.querySelector("h3");
function levelUp() {
    userSeq = [];
    level++;

    highest = Math.max(highest, level);
    heading.innerText = `level - ${level}`;

    let random = Math.floor(Math.random() * 4);
    deviceSeq.push(button[random]);
    let btn = document.querySelector(`#${button[random]}`);
    btnFlash(btn);
}

let h4 = document.querySelector("h4");
function checkAns(size) {
    if (deviceSeq[size] == userSeq[size]) {
        if (userSeq.length == deviceSeq.length) {
            h4.innerText = `Hightest Score - ${highest}`;
            setTimeout(levelUp, 700);
        }
    } else {
        heading.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br> Press any key on keyboard to start Again`;
        document.querySelector("body").style.background = `linear-gradient(135deg, red 0%, red 100%)`;
        setTimeout(function () {
            document.querySelector("body").style.background = `linear-gradient(135deg, #226055 0%, #acb6e5 100%)`;
        }, 500);
        reset();
    }

}

function reset() {
    started = false;
    deviceSeq = [];
    userSeq = [];
    level = 0;
}

function buttonPress() {
    let button = this;
    let userPressedBtn = button.getAttribute("id");
    userSeq.push(`${userPressedBtn}`);

    userflash(button);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".color-btn");
for (btns of allBtns) {
    btns.addEventListener("click", buttonPress);
}