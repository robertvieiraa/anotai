let modal = document.getElementById("modal");
let btnAbrirModal = document.querySelector(".btn-abrir-modal");
let btnFecharModal = document.querySelector(".btn-fechar-modal");

export function atualizarEmptyState(array) {
  let paragrafo = document.querySelector(".p-empty-state");
  if (array.length == 0) {
    paragrafo.style.display = "block";
  } else {
    paragrafo.style.display = "none";
  }
}

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnFecharModal.addEventListener("click", () => {
  modal.close();
});