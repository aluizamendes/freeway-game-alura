// Variáveis do carro

let larguraCarro = 50;
let alturaCarro = 40;

// Lista (Array) com os valores X e Y
//        carro1 carro2 carro3
let xCarros= [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 265, 320];

// Velocidade dos carros
let velocidadeCarros = [5, 3, 4, 3.5, 6, 2];



// Funções
function mostraCarro() {
  // atribuimos uma variável para indicar o índice do Array = 0
  // checar se o i é menor que o número de imagemCarros (Array com 3) -> vai parar quando i chegar em 3
  // então adicionamos +1 ao i -> 0, 0+1, 1+1
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
  
}

function movimentaCarro() { 
  for (i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (i = 0; i < xCarros.length; i++) {
    if(carroPassouBordaDaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function carroPassouBordaDaTela(xCarro) {
  return xCarro < -50;
  // o return faz com que a função devolva um valor que ficará acessível fora do seu escopo
}

