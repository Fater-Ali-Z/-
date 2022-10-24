let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let inp = document.querySelector(".inp");
let yes2 = document.querySelector(".yes2");
let h3 = document.querySelector("h3");
let h = document.querySelector(".fa-heart");
let l = document.querySelector(".l");
let r = document.querySelector(".r");

let arr = [50, 25, 75, 100, -50, -100, -75, -25];
let x = 0;
let y = 0;
let i = 0;
no.onclick = function () {
  x = arr[Math.floor(Math.random() * 10)];
  y = arr[Math.floor(Math.random() * 10)];
  if (x === undefined) {
    x = arr[3];
  }
  if (y === undefined) {
    y = arr[3];
  }
  no.style.transform = `translate(${x}px, ${y}px)`;
  no.style.transition = "0.5s";
};
yes.onclick = function () {
  h3.innerHTML = `<i class="fa-regular fa-face-smile" style="font-size:30px;"></i> حلوف`;
  h3.style = `color : rgb(255, 0, 0);
              background-color: rgba(255, 0, 0, 0.129);
              padding: 10px 20px;
              border-radius:10px;
              transition:1s;
              font-family: cairo;
              `;
  l.style.left = " 530px";
  r.style.right = " 530px";
  no.style = `transform:translate(-30px, 0);`;
  no.value = "ما بدي";
  yes2.value = "والله";
  yes2.style = `transform:translate(-120px, 0);
                display: block;
             `;
  yes.style.display = "none";
};
yes2.onclick = function () {
  h3.innerHTML = `<i class="fa-regular fa-face-kiss" style="font-size:30px;"></i> حيّاك يا وحش`;
  h3.style = `color : rgb(40, 255, 40);
              background-color: rgba(0, 255, 0, 0.129);
              padding: 10px 20px;
              border-radius:10px;
              transition:1s;
              font-family: cairo;
              `;
  l.style.top = " 320px";
  r.style.bottom = " 320px";
  h.style.color = " rgb(40, 255, 40)";
  h.style.textShadow = " 0 0 20px rgba(0, 255, 51, 0.908)";
  no.style.display = "none";
  yes2.style.display = "none";
};
