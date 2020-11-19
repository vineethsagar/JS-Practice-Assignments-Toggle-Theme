function swapTheme() {
  console.log("swap theme");
  let div = document.getElementById("app");
  let btn = document.getElementById("swap");

  if (div.className === "day") {
    div.className = "night";
  } else {
    div.className = "day";
  }

  if (btn.className === "button_day") {
    btn.className = "button_night";
  } else {
    btn.className = "button_day";
  }
}
