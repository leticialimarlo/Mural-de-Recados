document.addEventListener("DOMContentLoaded", () => {
  const recadosLista = document.querySelector(".recados-lista");
  const botaoMostrarFormulario = document.getElementById("mostrar-formulario");
  const formulario = document.getElementById("form-recado");

  botaoMostrarFormulario.addEventListener("click", () => {
  formulario.classList.remove("escondido"); 
  botaoMostrarFormulario.style.display = "none"; 
});


  document.querySelectorAll(".btn-excluir").forEach(botao => {
  botao.addEventListener("click", () => {
    botao.closest(".recado").remove();
  });
});


  formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = formulario.nome.value.trim();
  const mensagem = formulario.mensagem.value.trim();

  if (nome && mensagem) {
    alert("Mensagem enviada!");
    formulario.reset();
    formulario.classList.add("escondido");
    botaoMostrarFormulario.style.display = "inline-block";
  }
});
});
