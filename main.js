const controleAjuste = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

function manipulaDados(operacao, controleContador) {
  const peca = controleContador.querySelector("[data-contador]");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

controleAjuste.forEach((element) => {
  element.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    atualizaEstatistica(event.target.dataset.peca);
    //textContent = retorna o conteudo do "click" quando usar string
    //dataset.controle = retorna o conteudo do dado quando usar data-* ou seja, o atributo do dado.
    //parent.node = retorna o elemento pai correspondente
  });
});

function atualizaEstatistica(peca) {
  estatisticas.forEach((element) => {
    element.textContent =
      parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    //parseInt(element.textContent): seleciona os números do elemento selecionado conf const estatistica
    //pecas[peca][element.dataset.estatistica]: percorre o array de peças para buscar os valores do objeto selecionado
  });
}
