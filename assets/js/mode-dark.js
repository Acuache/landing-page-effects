window.addEventListener("DOMContentLoaded", () => {
  let darkBoolean = false;
  const modeDark = document.querySelector(".mode__dark");

  let head = document.head;
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "assets/css/dark.css";

  // Seleccionar ambos logos (móvil y principal)
  let logoMobile = document.querySelector(".menu-mobile__container-logo");
  let logoMain = document.querySelector(".navbar__link-logo");

  modeDark.addEventListener("click", () => {
    if (darkBoolean) {
      modeDark.innerHTML = `<i class=" icon__dark fa-solid fa-moon"></i> `;
      modeDark.style.background = "#5956e9";
      darkBoolean = false;
      link.remove();
      // Cambiar a logo claro en ambos menús
      logoMobile.innerHTML = `<img class="menu-mobile__logo" src="assets/img/logo1.png" alt="Logo Acuache">`;
      logoMain.innerHTML = `<img class="navbar__link-light" src="assets/img/logo1.png" alt="Logo Acuache">`;
    } else {
      modeDark.style.background = "#000";
      modeDark.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      darkBoolean = true;
      head.appendChild(link);
      // Cambiar a logo oscuro en ambos menús
      logoMobile.innerHTML = `<img class="menu-mobile__logo" src="assets/img/logo2.png" alt="Logo Acuache">`;
      logoMain.innerHTML = `<img class="navbar__link-light" src="assets/img/logo2.png" alt="Logo Acuache">`;
    }
  });
});
