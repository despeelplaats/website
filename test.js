const colors = ["#ff0000", "#bc9bff"];
const numBalls = 20;
const balls = [];
const container = document.createElement("div");
container.classList.add("ballscontainer");
document.body.appendChild(container);

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  container.appendChild(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


//favicoms animeren
let icons = ["images/favicon1.png", "images/favicon2.png","images/favicon3.png","images/favicon4.png","images/favicon5.png"];
let i = 0;

setInterval(() => {
  document.querySelector("link[rel='icon']").href = icons[i];
  i = (i + 1) % icons.length;
}, 1000); 