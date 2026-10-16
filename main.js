let card = document.querySelectorAll(".card-periodo");
let modal = document.getElementById("modal");
let btnAddPeriodo = document.querySelector(".btn-add-periodo");
let btnFecharModal = document.querySelector(".btn-fechar-modal");
let btnSubmit = document.querySelector(".btn-submit");
let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let listaPeriodos = document.querySelector(".lista-periodos");
let periodos = JSON.parse(localStorage.getItem("periodos")) || [];

function atualizarPeriodos() {
  localStorage.setItem("periodos", JSON.stringify(periodos));
}

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  let nomePeriodo = inputModal.value;
  let periodo = {
    nome: nomePeriodo,
  };

  periodos.push(periodo);
  let elementoPeriodo = criarElementoPeriodo(periodo);
  listaPeriodos.append(elementoPeriodo);
  atualizarPeriodos();
  modal.close();
  inputModal.value = "";
});

periodos.forEach((p) => {
  let elementoPeriodo = criarElementoPeriodo(p);
  listaPeriodos.append(elementoPeriodo);
});

function criarElementoPeriodo(periodo) {
  let li = document.createElement("li");
  li.classList.add("card-periodo");
  li.dataset.periodo = crypto.randomUUID();

  let capa = document.createElement("div");
  capa.classList.add("capa-periodo");

  let nome = document.createElement("p");
  nome.classList.add("nome-periodo");
  nome.textContent = periodo.nome;

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