let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red" , "purple" ,"blue"];

 let started = false;
 let level = 0;
 let h2 =document.querySelector("h2");

 document.addEventListener("keypress" , function(){
     if(started == false){
      console.log("game is started");
      started = true;
      levelUp();
     }
 });

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
 }


 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
 }

 function levelUp(){
   userSeq = [];
   level++;
   h2.innerText = `level ${level}`;


   //chosse random btn
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   /*console.log(randIdx);
   console.log(randColor);
   console.log(randBtn);*/
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
 
   gameFlash(randBtn);
 }

 function checkAns(idx){
   //console.log("Curr level :" , level);

   if(userSeq[idx] == gameSeq[idx]){
      console.log("same value");
      if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{
      h2.innerHTML = `Game over!Your score was <b>${level} </b> <Br> Press any key to start.`;
      document.querySelector("body").style.backgroundcolor ="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundcolor ="white";
      },150)
      reset();
   }
 }


 function btnPress(){
  // console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
 }

 let allBtn = document.querySelectorAll(".btn");
 for(btn of allBtn){
   btn.addEventListener("click", btnPress);
 }

 function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
 }