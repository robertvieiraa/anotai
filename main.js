let card = document.querySelectorAll(".card-periodo")
let modal = document.getElementById("modal")
let btnAddPeriodo = document.querySelector(".btn-add-periodo")
let btnFecharModal = document.querySelector(".btn-fechar-modal")
let btnSubmit = document.querySelector('.btn-submit')
let inputModal = document.querySelector('.input-modal')

card.forEach((c) =>
  c.addEventListener("click", () => {
    let periodo = c.dataset.periodo;
    window.location.href = `periodo.html?periodo=${periodo}`;
  }),
);

btnSubmit.addEventListener('click', (evento) => {
evento.preventDefault();
let nomePeriodo = inputModal.value;

if (nomePeriodo === "") {
  alert("Por favor, insira um nome válido.")
} else {
  console.log(nomePeriodo)
  modal.close()
}
})

btnAddPeriodo.addEventListener("click", () => {
  modal.showModal()
});

btnFecharModal.addEventListener("click", () => {
  modal.close()
});