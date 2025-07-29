document.addEventListener("DOMContentLoaded", () => {
  const recadosLista = document.querySelector(".recados-lista");
  const botaoMostrarFormulario = document.getElementById("mostrar-formulario");
  const formulario = document.getElementById("form-recado");

  // Mostrar/ocultar o formulário
  botaoMostrarFormulario.addEventListener("click", () => {
    formulario.classList.toggle("escondido");
  });

  // Botões de excluir dos recados fixos
  document.querySelectorAll(".btn-excluir").forEach(botao => {
    botao.addEventListener("click", () => {
      botao.parentElement.remove();
    });
  });

  // Comportamento do formulário: apenas limpa e esconde
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = formulario.nome.value.trim();
    const mensagem = formulario.mensagem.value.trim();

    if (nome && mensagem) {
      // Simula envio (não adiciona nada)
      alert("Mensagem enviada!"); // você pode remover isso se quiser
      formulario.reset();
      formulario.classList.add("escondido");
    }
  });
});
