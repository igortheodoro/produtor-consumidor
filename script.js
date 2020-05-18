const input = document.querySelector("input");
var tempoDeConsumo = 2000;

// O input sempre ficar focado para o usuário sempre poder inserir dados
$(window).mouseover(function () {
  input.focus();
});

//Funções do botão para alterar a velocidade de consumo
$(".decrementar").click(function () {
  tempoDeConsumo -= 100;
  $(".textConsumo").text(`Tempo do consumidor: ${tempoDeConsumo}`);
});

$(".incrementar").click(function () {
  tempoDeConsumo += 100;
  $(".textConsumo").text(`Tempo do consumidor: ${tempoDeConsumo}`);
});

//Intervalo em que o valor do input será inserido no H1
//Este é o produtor
setInterval(function () {
  $(".show").text(input.value);
}, 100);

//Função que faz o papel do consumidor e retirar os dados do input no tempo
function consumidor() {
  if (input.value.length > 0) {
    var primeiroCaractere = input.value[0];
    var valor = input.value.replace(primeiroCaractere, "");

    $(input).val(valor);
  }

  setTimeout(consumidor, tempoDeConsumo);
}

consumidor();