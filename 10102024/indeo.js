let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
})

function btnFlash(btn) {
    if (btn) { // Check if btn is defined
        btn.classList.add("flash"); // Corrected typo
        setTimeout(function () {
            if (btn) { // Check if btn is defined before removing the class
                btn.classList.remove("flash");
            }
        }, 250);
    }
}

function userFlash(btn) {
    if (btn) { // Check if btn is defined
        btn.classList.add("userFlash"); // Corrected typo
        setTimeout(function () {
            if (btn) { // Check if btn is defined before removing the class
                btn.classList.remove("userFlash");
            }
        }, 250);
    }
}

//////to glow buttons randomly///
function  levelup() {
userseq=[];
level++;
h2.innerText=`level ${level}`;

let randIdx=Math.floor(Math.random()*3);
let randcolor= btns[randIdx];
let randbtn=document.querySelector(`.${randcolor}`);

// console.log(randbtn);
// console.log(randIdx);
// console.log(randcolor);
gameseq.push(randcolor);
console.log(gameseq);

//btn flash
btnFlash(randbtn);
}  

function checkans( idx ) {
    if(userseq[idx] == gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`game over! your score was <b>'"${level}</b>  <br> press any key to start`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundcolor="white";
        },1500);
        reset();
    }

}

function  btnpress (){
    console.log(this);
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);    

}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started =false;
    gameseq =[];
    userseq=[];
    level =0;
}


  