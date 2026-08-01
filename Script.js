const messages = [
  "💛 This heart is yours... always.",
  "Tu fakta mazi Best Friend nahis... Tu maza safe place ahes. 🌼",
  "Kadhi kadhi shabda kami padtat... pan ek goshta nehmich khari asel... Tu mazya ayushyatil saglyat precious person ahes. 💙",
  "Thank you... majhya life madhye alyabaddal. Tujhyamule pratyek divas special zala. ❤️",
  "Tu maza jiv ahes... Tu hasta na tevha mala pan hasu yet. Tu dukhi asli ki mala pan vait vatat. 🥺",
  "Promise... Kitihi distance asu de, kitihi situations badlu de... Tu mazya heart madhye nehmich special rahshil. 💖",
  "❤️ Happy Friendship Day ❤️"
];

let index = 0;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const box = document.getElementById("box");
const message = document.getElementById("message");
const photo = document.getElementById("photo");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  box.classList.remove("hidden");
  message.innerHTML = messages[0];
});

nextBtn.addEventListener("click", () => {
  index++;

  if (index < messages.length) {
    message.innerHTML = messages[index];

    if (index === messages.length - 1) {
      photo.style.display = "block";
      nextBtn.innerHTML = "Final Surprise 💛";
    }

  } else {

    document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:linear-gradient(135deg,#87CEEB,#FFF59D);
      text-align:center;
      padding:30px;
      overflow:hidden;
    ">

      <h1 style="font-size:38px;color:white;text-shadow:0 0 15px gold;">
      🌼 Happy Friendship Day 🌼
      </h1>

      <img src="photo.jpg"
           style="width:260px;
           margin:25px;
           border-radius:20px;
           border:5px solid white;
           box-shadow:0 0 25px white;">

      <p style="
      color:white;
      font-size:24px;
      line-height:1.8;
      max-width:600px;">

      ❤️ This heart is yours... Always.<br><br>

      Tu mazi Best Friend peksha hi khup jast ahes.
      Tu mazya life madhla saglyat beautiful gift ahes.
      Kitihi distance asu de...
      Kitihi situations badlu de...
      Mi nehmich tujhya sobat asen. 🤍

      </p>

      <h2 style="margin-top:20px;color:white;">
      I'll Always Be There For You 🌼💛
      </h2>

    </div>`;
  }
});


/* Falling Flowers */

const flowers = ["🌸","🌼","🌻","💛"];

setInterval(() => {

  const flower = document.createElement("div");

  flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

  flower.style.position="fixed";
  flower.style.left=Math.random()*100+"vw";
  flower.style.top="-30px";
  flower.style.fontSize=(20+Math.random()*20)+"px";
  flower.style.animation="fall 8s linear forwards";

  document.body.appendChild(flower);

  setTimeout(()=>{
    flower.remove();
  },8000);

},400);


/* Floating Hearts */

setInterval(()=>{

  const heart=document.createElement("div");

  heart.innerHTML="❤️";

  heart.style.position="fixed";
  heart.style.left=Math.random()*100+"vw";
  heart.style.bottom="-20px";
  heart.style.fontSize=(20+Math.random()*15)+"px";
  heart.style.animation="heartFloat 6s linear forwards";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },6000);

},700);


/* Twinkling Stars */

setInterval(()=>{

  const star=document.createElement("div");

  star.innerHTML="✨";

  star.style.position="fixed";
  star.style.left=Math.random()*100+"vw";
  star.style.top=Math.random()*100+"vh";
  star.style.fontSize="20px";

  document.body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },1200);

},300);
