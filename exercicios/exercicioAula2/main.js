// No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.

const eventoClique = document.querySelector("#calcular");

eventoClique.addEventListener("click", () => {
  console.log("Fui clicado!");
});
