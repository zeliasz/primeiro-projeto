function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/gengarbranco.png")
    alt: "foto do pokemon gengar mega evoluido"
  } else {
    img.setAttribute("src", "./assets/gengar.png")
    alt: "foto do pokemon gengar"
  }
}
