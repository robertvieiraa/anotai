import { atualizarEmptyState } from "/js/utils.js";
import { atualizarPeriodos } from "/js/storage.js";

let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let listaPeriodos = document.querySelector(".lista-periodos");
let periodos = JSON.parse(localStorage.getItem("periodos")) || [];

atualizarEmptyState(periodos);
renderizarPeriodos();
alterarTitulo();

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

function renderizarPeriodos() {
  periodos.forEach((p) => {
    let elementoPeriodo = criarElementoPeriodo(p);
    listaPeriodos.append(elementoPeriodo);
  });
}

function criarElementoPeriodo(periodo) {
  let li = document.createElement("li");
  li.classList.add("card-periodo");
  li.dataset.periodo = periodo.id;

  let capa = document.createElement("div");
  capa.classList.add("capa-periodo");

  let div = document.createElement("div");
  div.classList.add("info-periodo");

  let nome = document.createElement("p");
  nome.classList.add("nome-periodo");
  nome.textContent = periodo.nome;

  let iconeMais = document.createElement("img");
  iconeMais.src = "../imagens/icones/mais.svg";
  iconeMais.onclick = () => {
    popUp.classList.toggle("ativa");
  };

  let popUp = document.createElement("div");
  popUp.classList.add("pop-up-acoes");

  let editar = document.createElement("div");
  editar.classList.add("acao-editar");
  editar.classList.add("acao");
  editar.onclick = () => {
    let novoNome = prompt("Digite o novo nome do período:", periodo.nome);
    if (novoNome) {
      nome.textContent = novoNome;
      periodo.nome = novoNome;
      atualizarPeriodos(periodos);
    }
  };

  let iconeEditar = document.createElement("img");
  iconeEditar.src = "../imagens/icones/editar.svg";

  let paragrafoEditar = document.createElement("p");
  paragrafoEditar.textContent = "Editar";

  let excluir = document.createElement("div");
  excluir.classList.add("acao-excluir");
  excluir.classList.add("acao");
  excluir.onclick = excluirPeriodo;

  let iconeExcluir = document.createElement("img");
  iconeExcluir.src = "../imagens/icones/excluir.svg";

  let paragrafoExcluir = document.createElement("p");
  paragrafoExcluir.textContent = "Excluir";

  editar.append(iconeEditar, paragrafoEditar);
  excluir.append(iconeExcluir, paragrafoExcluir);
  popUp.append(editar, excluir);
  div.append(nome, iconeMais, popUp);
  li.append(capa, div);
  capa.addEventListener("click", () => {
    let id = li.dataset.periodo;
    window.location.href = `periodo.html?periodo=${id}`;
  });

  return li;
}

function excluirPeriodo(evento) {
  let periodo = evento.target.closest(".card-periodo");
  let idPeriodo = periodo.dataset.periodo;
  document.querySelectorAll(".card-periodo").forEach((elemento) => {
    elemento.remove();
  });
  periodos = periodos.filter((p) => p.id != idPeriodo);
  atualizarPeriodos(periodos);
  renderizarPeriodos();
}

function alterarTitulo() {
  let titulo = document.querySelector("h1");
  let hora = new Date().getHours();
  if (hora < 12) {
    titulo.textContent = "Bom dia";
  } else if (hora <= 18) {
    titulo.textContent = "Boa tarde";
  } else {
    titulo.textContent = "Boa noite";
  }
}