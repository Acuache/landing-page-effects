window.addEventListener("DOMContentLoaded", () => {
  const btn__open = document.querySelector(".navbar__mobile-btn");
  const btn__close = document.querySelector(".menu-mobile__close");
  const bg__menu = document.querySelector(".bg__menu-mobile");
  const body__mobile = document.querySelector(".menu-mobile");

  //   // Si estamos en pantallas grandes
  //   if (window.innerWidth > 560) {
  //     body__mobile.style.transform = "translateX(-100%)";
  //     body__mobile.style.visibility = "hidden";
  //     bg__menu.style.visibility = "hidden";
  //     bg__menu.style.opacity = "0";
  //   }

  // Ocultar menú inicialmente
  body__mobile.style.transform = "translateX(-100%)";
  body__mobile.style.visibility = "hidden";
  bg__menu.style.visibility = "hidden";
  bg__menu.style.opacity = "0";

  // Abrir menú
  btn__open.addEventListener("click", () => {
    // Mostrar fondo con blur
    bg__menu.style.visibility = "visible";
    bg__menu.style.opacity = "1";

    // Mostrar y deslizar menú
    body__mobile.style.visibility = "visible";
    body__mobile.style.transform = "translateX(0)";
  });

  // Cerrar menú
  btn__close.addEventListener("click", () => {
    // Ocultar menú
    body__mobile.style.transform = "translateX(-100%)";

    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      body__mobile.style.visibility = "hidden";
      bg__menu.style.visibility = "hidden";
      bg__menu.style.opacity = "0";
    }, 300);
  });

  // Manejo de submenús
  const mobileTitles = document.querySelectorAll(".mobile__title");

  mobileTitles.forEach((title) => {
    title.addEventListener("click", (e) => {
      // Solo si el título tiene submenú
      const hasSubmenu = title.querySelector(".mobile__icon");
      if (!hasSubmenu) return;

      const submenu = title.parentElement.querySelector(".mobile__submenu");
      const icon = title.querySelector(".mobile__icon");

      // Toggle del submenú
      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        icon.style.transform = "rotate(0deg)";
      } else {
        submenu.style.display = "block";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
