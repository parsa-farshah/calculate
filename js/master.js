let modeBtn = document.getElementById("mode");
let main = document.getElementsByTagName("main")[0];

modeBtn.addEventListener("click", () => {
  mode = modeBtn.getAttribute("data-mode");

  if (mode === "light") {
    modeBtn.classList.remove("lightBtn");
    modeBtn.classList.add("darkBtn");
    modeBtn.setAttribute("data-mode", "dark");
    main.classList.remove("lightBg");
    main.classList.add("darkBg");
  } else {
    modeBtn.classList.remove("darkBtn");
    modeBtn.classList.add("lightBtn");
    modeBtn.setAttribute("data-mode", "light");
    main.classList.remove("darkBg");
    main.classList.add("lightBg");
  }
});
// -----------------------------get number--------------------------------
let btnCalc = document.querySelectorAll("#calculator>div>input");
let inpCalc = document.getElementById("txt");
let num = "";
btnCalc.forEach((items) => {
  items.addEventListener("click", () => {
    try {
      if (items.value === "AC") {
        num = "";
        inpCalc.value = num;
      } else if (items.value === "=") {
        num = eval(num);
        inpCalc.value = num;
      } else if (items.value === "DEL") {
        num = num.slice(0, -1);
        inpCalc.value = num;
      } else {
        num = num + items.value;
        inpCalc.value = num;
      }
    } catch (error) {
      inpCalc.value = "Error Click On AC";
    }
  });
});

// team
let teamBtn = document.getElementById("team");
let closeBtn = document.getElementById("close");
let teamSection = document.getElementById("teamSection");

teamBtn.addEventListener("click", () => {
  teamSection.classList.remove("translate-x-[100%]");
});

closeBtn.addEventListener("click", () => {
  teamSection.classList.add("translate-x-[100%]");
});
