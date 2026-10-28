import { atualizarEmptyState } from "/js/utils.js";
import { atualizarPeriodos } from "/js/storage.js";

let parametros = new URLSearchParams(window.location.search);
let idPeriodo = parametros.get("periodo");
let h1 = document.querySelector("h1");
let inputModal = document.querySelector(".input-modal");
let formModal = document.querySelector(".form-modal");
let corpoTabela = document.querySelector("tbody");
let periodos = JSON.parse(localStorage.getItem("periodos"));
let periodoAtual = periodos.find((p) => p.id == idPeriodo);
let movimentacoes = periodoAtual.movimentacoes;

atualizarEmptyState(movimentacoes);
renderizarMovimentacoes();
h1.textContent = periodoAtual.nome;

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
  inputModal.value = "Saída: R$ ";
});

function renderizarMovimentacoes() {
  movimentacoes.forEach((m) => {
    let elementoMovimentacao = criarElementoMovimentacao(m);
    corpoTabela.append(elementoMovimentacao);
  });
}

function criarElementoMovimentacao(movimentacao) {
  let tr = document.createElement("tr");
  tr.setAttribute("id", movimentacao.id);

  let td = document.createElement("td");

  let div = document.createElement("div");

  let paragrafo = document.createElement("p");
  paragrafo.textContent = movimentacao.descricao;
  paragrafo.onclick = () => {
    let novaDescricao = prompt("Digite a nova descrição da movimentação:");
    if (novaDescricao) {
      paragrafo.textContent = novaDescricao;
      movimentacao.descricao = novaDescricao;
      atualizarPeriodos(periodos);
    }
  };

  let excluir = document.createElement("img");
  excluir.src = "imagens/icones/excluir.svg";
  excluir.onclick = excluirMovimentacao;

  div.append(paragrafo, excluir);
  td.append(div);
  tr.append(td);

  return tr;
}

function excluirMovimentacao(evento) {
  let movimentacao = evento.target.closest("tr");
  let idMovimentacao = movimentacao.id;
  document.querySelectorAll("tr").forEach((elemento) => {
    elemento.remove();
  });
  movimentacoes = movimentacoes.filter((m) => m.id != idMovimentacao);
  periodoAtual.movimentacoes = movimentacoes;
  atualizarPeriodos(periodos);
  renderizarMovimentacoes();
}
