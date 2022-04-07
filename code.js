window.onload = function () {
  const body = document.querySelector("body");
  const menu = document.querySelector(".menu-toggle");

  menu.addEventListener("click", function (e) {
    body.classList.toggle("open");
  });
};
