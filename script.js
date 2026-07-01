const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Solicitação enviada! Em breve a Mercadin entrará em contato.");
});
