/* =========================
LOADER
========================= */

const loadingTexts = [
  "Loading memories...",
  "Importing smiles...",
  "Installing adulthood...",
  "Almost there..."
];

let loadingIndex = 0;

const loadingTextElement =
document.getElementById("loading-text");

if (loadingTextElement) {

  setInterval(() => {

    loadingTextElement.innerText =
    loadingTexts[loadingIndex];

    loadingIndex =
    (loadingIndex + 1) % loadingTexts.length;

  }, 1000);

}

setTimeout(() => {

  document.getElementById("loader").style.display = "none";

  document.getElementById("startScreen")
  .style.display = "flex";

}, 4000);

/* =========================
TYPING EFFECT
========================= */

const typingText =
"YOU BECAME MY FAVORITE PERSON ACCIDENTLY ❤️";

let typingIndex = 0;

function typing(){

  const typingElement =
  document.querySelector(".typing");

  if(!typingElement) return;

  if(typingIndex < typingText.length){

    typingElement.innerHTML +=
    typingText.charAt(typingIndex);

    typingIndex++;

    setTimeout(typing, 70);

  }

}

typing();


/* =========================
MUSIC
========================= */
const music =
document.getElementById("bgMusic");

music.volume = 0.3;

const musicBtn =
document.getElementById("musicBtn");

if(musicBtn){

  musicBtn.addEventListener("click", () => {

    if(music.paused){
      music.play();
      musicBtn.innerText = "🔊";
    }else{
      music.pause();
      musicBtn.innerText = "🔇";
    }

  });

}

const startScreen =
document.getElementById("startScreen");

startScreen.addEventListener("click", () => {

    document.getElementById("main-content")
    .style.display = "block";

    startScreen.style.display = "none";

    music.play();

});
/* AUTO START MUSIC AFTER FIRST CLICK */

document.addEventListener("click", () => {

  if(music.paused){
    music.play();
  }

}, { once:true });


/* =========================
CONSTELLATION STARS
========================= */

const starData = {

  1:{
    title:"The First Thought ❤️",
    text:"I DON'T REMEMBER EVERY DAY OF MY LIFE, BUT I REMEMBER THE DAY YOU BECAME SOMEONE I COULDN'T STOP THINKING ABOUT. ❤️."
  },

  2:{
    title:"Favorite Smile 😊",
    text:"YOUR SMILE TOHH HAYYEEEE ❤️ ITS KIND OF A GESTURE WHICH MAKES MY DAYYY THE BESTT EVEN  IF IT WAS GOING BAD SOO YAA KEEP IS CONSTANTTT !!."
  },

  3:{
    title:"Missing You 🌙",
    text:"DISTANCE IS STRANGE. IT KEEPS US APART PHYSICALLY BUT SOMEHOW MAKES ME APPRECIATE YOU EVEN MORE. AND REMEMBER IM JUST A CALL AWAYY BABDDUU !!)"
  },

  4:{
    title:"Hidden Compliment ✨",
    text:"YOU DON'T REALIZE IT, BUT YOU'VE BECOME MY FAVORITE NOTIFICATION, MY SAFEST PLACE, AND ONE OF THE BEST THINGS THAT'S EVER HAPPENED TO ME. THANK YOU FOR BEING YOU. IF YOU COULD SEE YOURSELF THROUGH MY EYES, YOU'D KNOW WHY YOUR SMILE CAN INSTANTLY MAKE MY WHOLE DAY BETTER. YOU HAVE A WAY OF MAKING EVERYTHING FEEL LIGHTER, HAPPIER, AND MORE BEAUTIFUL JUST BY BEING YOURSELF ❤️"
  },

  5:{
    title:"Secret Memory 🤍",
    text:"REMEMBER THAT ONE DAY WHEN WE COULDN'T STOP LAUGHING? THAT'S STILL ONE OF MY FAVORITE MEMORIES. ❤️."
  },

  6:{
    title:"The Future ",
    text:`THERE ARE STILL SO MANY PLACES TO VISIT, PHOTOS TO TAKE, JOKES TO MAKE, AND MEMORIES TO CREATE TOGETHER. ❤️`
  },

  8:{
    title:"Happy 18th Birthday ❤️",
    text:"HAPPIEST 18TH BIRTHDAY BABBDIII !!KEEP THAT BEAUTIFUL SMILE CONSTANT AND ALWAYS REMEMBER, YOUR BOYFRIEND IS NEVER GONNA STOP LOVING YOUU. THANK YOU FOR BEING MY FAVORITE PERSON❤️."
  }

};

window.openStar = function(id){

  const modal =
  document.getElementById("starModal");

  const title =
  document.getElementById("starTitle");

  const text =
  document.getElementById("starText");

  if(!modal || !title || !text) return;

  title.innerText =
  starData[id].title;

  text.innerText =
  starData[id].text;

  modal.style.display = "block";

}

window.closeStar = function(){

  const modal =
  document.getElementById("starModal");

  if(modal){
    modal.style.display = "none";
  }

}


/* =========================
PASSWORD SECTION
========================= */

window.checkPassword = function(){

  const pass =
  document.getElementById("passwordInput").value;

  if(pass === "250813"){

    document
    .getElementById("secretMessage")
    .style.display = "block";

  }else{

    alert("Wrong password ❤️");

  }

}


/* =========================
FINAL SURPRISE
========================= */
function launchSurprise(){

    document.getElementById("surpriseBox")
    .style.display = "block";

    const video =
    document.getElementById("birthdayVideo");

    const music =
    document.getElementById("bgMusic");

    music.pause();

    video.play();

    confetti();

}
