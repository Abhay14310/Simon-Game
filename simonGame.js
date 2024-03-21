let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["yellow","red","green","purple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ //flash light button ka code idhr hai , the logic is set timer ke  help se tu white light ko control krega kitna time  ke liye wo rahega ya click ke kitne time bad flash ayega that type
        btn.classList.remove("flash");
    },250)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){ //flash light button ka code idhr hai , the logic is set timer ke  help se tu white light ko control krega kitna time  ke liye wo rahega ya click ke kitne time bad flash ayega that type
        btn.classList.remove("userFlash");
    },250)
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3 );
    let randColor = btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`); 
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);



}
function checkAns(idx){
     if (idx >= gameSeq.length) {
        // Invalid index, this shouldn't happen
        console.error("Invalid index in checkAns function.");
        return;
    }
    // console.log("curr Level is ",level)
    // let idx = level -1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same one")
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML= `Game Over! Score was<b>${level}</b> <br>press any key to play again `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100)
        reset();
    }
}
function buttonPress(){
    if (!started) {
        // If the game hasn't started yet, ignore button clicks
        return;
    }
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);

}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress)
}
function reset() {
started = false;
gameSeq=[];
userSeq=[];
level=0;

}