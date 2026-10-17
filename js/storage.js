export function atualizarPeriodos(periodos) {
  localStorage.setItem("periodos", JSON.stringify(periodos));
}