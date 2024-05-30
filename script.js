(() => {
  const toggleSwitch = document.querySelector("#switch");

  toggleSwitch.addEventListener("click", toggle);

  function toggle() {
    const body = document.body;
    body.classList.toggle("light");

    const img = document.querySelector("#profile img");

    body.classList.contains("light")
      ? img.setAttribute("src", "./assets/avatar-light.png")
      : img.setAttribute("src", "./assets/avatar.png");
  }
})();
