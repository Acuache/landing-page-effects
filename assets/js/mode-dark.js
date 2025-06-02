window.addEventListener("DOMContentLoaded", () => {
  let darkBoolean = false;
  const modeDark = document.querySelector(".mode__dark");
  modeDark.addEventListener("click", () => {
    if (darkBoolean) {
      modeDark.innerHTML = `<i class=" icon__dark fa-solid fa-moon"></i> `;
      modeDark.style.background = "#5956e9";
      darkBoolean = false;
    } else {
      modeDark.style.background = "#000";
      modeDark.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      darkBoolean = true;
    }
  });
});
