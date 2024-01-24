function gotothispath() {
  window.location.href = "/projects";
}

const showSkills = () => {
  window.location.href = "https://ergovind08.github.io/ergovind08/";
};

const toggleDarkMode = () => {
  const bodyback = document.getElementById("card");
  bodyback.style.background =
    "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), " +
    "radial-gradient(at 50% 50%, hsla(225,39%,30%,1) 0, transparent 50%), " +
    "radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)";

  const togb = document.getElementById("togbutton1");
  togb.style.backgroundColor = "white";
  togb.style.color = "black";
  const main = document.getElementById("about");
  main.style.backgroundColor = "linear-gradient(45deg, #ff0000, #0000ff)";
  for (let i = 1; i <= 9; i++) {
    const val = document.getElementById(`o${i}`);
    if (val) {
      val.style.color = "white";
    }
  }
  const im = document.getElementById("meraimg");
  // im.style.boxShadow = "10px 10px 5px 0 rgba(0, 0, 0, 0.4)";

  im.style.filter = "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.9))";

  const k = document.getElementById("tool");
  k.style.backgroundColor = "white";
};

function toggleLightMode() {
  const bodyback = document.getElementById("card");
  bodyback.style.background =
    "linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)";

  const main = document.getElementById("about");
  main.style.backgroundColor = "linear-gradient(45deg, #ff0000, #0000ff)";

  const k = document.getElementsByClassName("skills-button");
  k.sty;

  for (let i = 1; i <= 9; i++) {
    const val = document.getElementById(`o${i}`);
    if (val) {
      val.style.color = "black";
    }
  }
  const im = document.getElementById("meraimg");
  im.style.filter = "drop-shadow(0px 0px 10px rgba(9, 9, 9, 0.5))";
}
