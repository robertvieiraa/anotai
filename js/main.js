import { atualizarEmptyState } from "/js/utils.js";
import { atualizarPeriodos } from "/js/storage.js";

let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let listaPeriodos = document.querySelector(".lista-periodos");
let periodos = JSON.parse(localStorage.getItem("periodos")) || [];

atualizarEmptyState(periodos);

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  let nomePeriodo = inputModal.value;
  let periodo = {
    id: crypto.randomUUID(),
    nome: nomePeriodo,
    movimentacoes: [],
  };

  periodos.push(periodo);
  let elementoPeriodo = criarElementoPeriodo(periodo);
  listaPeriodos.append(elementoPeriodo);
  atualizarPeriodos(periodos);
  atualizarEmptyState(periodos);
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
  li.dataset.periodo = periodo.id;

  let capa = document.createElement("div");
  capa.classList.add("capa-periodo");

  let nome = document.createElement("p");
  nome.classList.add("nome-periodo");
  nome.textContent = periodo.nome;

  li.append(capa, nome);
  capa.addEventListener("click", () => {
    let periodo = li.dataset.periodo;
    window.location.href = `periodo.html?periodo=${periodo}`;
  });

  return li;
}