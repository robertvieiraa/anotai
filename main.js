let card = document.querySelectorAll(".card-periodo");
let modal = document.getElementById("modal");
let btnAbrirModal = document.querySelector(".btn-abrir-modal");
let btnFecharModal = document.querySelector(".btn-fechar-modal");

card.forEach((c) =>
  c.addEventListener("click", () => {
    let periodo = c.dataset.periodo;

    window.location.href = `periodo.html?periodo=${periodo}`;
  }),
);

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnFecharModal.addEventListener("click", () => {
  modal.close();
});