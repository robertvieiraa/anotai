let card = document.querySelectorAll(".card-periodo");
let modal = document.getElementById("modal");
let btnAddPeriodo = document.querySelector(".btn-add-periodo");
let btnFecharModal = document.querySelector(".btn-fechar-modal");
let btnSubmit = document.querySelector(".btn-submit");
let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let listaPeriodos = document.querySelector(".lista-periodos");

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  let nomePeriodo = inputModal.value;
  let elementoPeriodo = criarElementoPeriodo(nomePeriodo);

  modal.close();
  listaPeriodos.append(elementoPeriodo);
  inputModal.value = "";
});

function criarElementoPeriodo(nomePeriodo) {
  let li = document.createElement("li");
  li.classList.add("card-periodo");
  li.dataset.periodo = crypto.randomUUID();

  let capa = document.createElement("div");
  capa.classList.add("capa-periodo");

  let nome = document.createElement("p");
  nome.classList.add("nome-periodo");
  nome.textContent = nomePeriodo;

  li.append(capa, nome);
  li.addEventListener("click", () => {
    let periodo = li.dataset.periodo;
    window.location.href = `periodo.html?periodo=${periodo}`;
  });

  return li;
}

btnAddPeriodo.addEventListener("click", () => {
  modal.showModal();
});

btnFecharModal.addEventListener("click", () => {
  modal.close();
});