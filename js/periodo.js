import { atualizarEmptyState } from "/js/utils.js";
import { atualizarPeriodos } from "/js/storage.js";

let parametros = new URLSearchParams(window.location.search);
let idPeriodo = parametros.get("periodo");
let h1 = document.querySelector("h1");
let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let corpoTabela = document.querySelector("tbody");
let periodos = JSON.parse(localStorage.getItem("periodos"));
let periodoSelecionado = periodos.find((p) => p.id == idPeriodo);
let movimentacoes = periodoSelecionado.movimentacoes;

atualizarEmptyState(movimentacoes);
h1.textContent = periodoSelecionado.nome;

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  let movimentacao = {
    id: crypto.randomUUID(),
    descricao: inputModal.value,
  };
  let elementoMovimentacao = criarElementoMovimentacao(movimentacao);

  corpoTabela.append(elementoMovimentacao);
  movimentacoes.push(movimentacao);
  atualizarPeriodos(periodos);
  atualizarEmptyState(movimentacoes);
  modal.close();
  inputModal.value = "Saída: R$";
});

movimentacoes.forEach((m) => {
  let elementoMovimentacao = criarElementoMovimentacao(m);
  corpoTabela.append(elementoMovimentacao);
});

function criarElementoMovimentacao(movimentacao) {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = movimentacao.descricao;

  tr.append(td);

  return tr;
}