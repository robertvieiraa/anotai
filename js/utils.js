let modal = document.getElementById("modal");
let btnAbrirModal = document.querySelector(".btn-abrir-modal");
let btnFecharModal = document.querySelector(".btn-fechar-modal");
let inputModal = document.querySelector(".input-modal");
let opcoesDeValorInput = document.querySelectorAll('[name="valor-input"]');

export function atualizarEmptyState(array) {
  let paragrafo = document.querySelector(".p-empty-state");
  if (array.length == 0) {
    paragrafo.style.display = "block";
  } else {
    paragrafo.style.display = "none";
  }
}

opcoesDeValorInput.forEach((opcao) =>
  opcao.addEventListener("click", alterarValorInput),
);

export function alterarValorInput() {
  let opcaoAtivar = document.querySelector("#radio-valor-ativo");

  if (opcaoAtivar.checked == true) {
    inputModal.value = "Saída: R$ ";
  } else {
    inputModal.value = "";
  }
}

btnAbrirModal.addEventListener("click", () => {
  alterarValorInput();
  modal.showModal();
});

btnFecharModal.addEventListener("click", () => {
  modal.close();
});