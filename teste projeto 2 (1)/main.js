const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Loop para trocar abas
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    // Remove "ativo" de todos os botões e abas
    botoes.forEach((botao) => botao.classList.remove("ativo"));
    textos.forEach((texto) => texto.classList.remove("ativo"));

    // Adiciona "ativo" ao botão e aba clicados
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");

    // Inicia novo contador
    const contador = textos[i].querySelector(".contador");
    const tempo = parseInt(contador.dataset.tempo);
    iniciarContagem(contador, tempo);
  });
}

// Função que inicia o contador regressivo
function iniciarContagem(elemento, tempo) {
  if (!elemento) return;

  clearInterval(elemento.intervalId); // Evita contadores duplicados
  let tempoRestante = tempo;

  elemento.textContent = `⏳ Restam ${tempoRestante} segundos`;

  elemento.intervalId = setInterval(() => {
    tempoRestante--;
    elemento.textContent = `⏳ Restam ${tempoRestante} segundos`;

    if (tempoRestante <= 0) {
      clearInterval(elemento.intervalId);
      elemento.textContent = "✅ Objetivo concluído!";
    }
  }, 1000);
}

// Iniciar contagem da aba ativa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const abaAtiva = document.querySelector(".aba-conteudo.ativo .contador");
  if (abaAtiva) {
    const tempoInicial = parseInt(abaAtiva.dataset.tempo);
    iniciarContagem(abaAtiva, tempoInicial);
  }
});

