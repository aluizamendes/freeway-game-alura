// Variáveis do ator
let xAtor = 250;
let yAtor = 365;

let larguraAtor = 30;
let alturaAtor = 30;


// velocidade do ator
let velocidadeAtor = 3;


// pontuação
let meusPontos = 0;


// Funções

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  
  // movimenta ator pra cima
  if(keyIsDown(UP_ARROW) || keyIsDown(87)) { 
    yAtor -= velocidadeAtor;
  }
  
  // movimenta ator pra baixo
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) { 
    if(podeSeMoverPraBaixo()) {
      yAtor += velocidadeAtor;
    }
  }
  
  // movimenta ator pra direita
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { 
    xAtor += velocidadeAtor;
  }
  
  // movimenta ator pra esquerda
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) { 
    xAtor -= velocidadeAtor;
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 365;
}

function podeSeMoverPraBaixo() {
  return yAtor < 366;
}

function verificaColisaoDoAtorCarros() {
  for (i = 0; i < imagemCarros.length; i += 1) {
    
    if (yAtor < yCarros[i] + alturaCarro && 
      xAtor + larguraAtor > xCarros[i] &&
      xAtor < xCarros[i] + alturaCarro &&
      yAtor + alturaAtor > yCarros[i]) {
      
      somDaColisao.play();
    
      voltaAtorPosicaoInicial(); // volta à posição inicial
      
      if (meusPontos > 0) {
        meusPontos -= 1; // perde 1 ponto
      }
    }
  }
}

function incluiPontos() {
  fill(0)
  rect(76, 0, 50, 34)
  textAlign(CENTER);
  textSize(24);
  fill(255,140,0);
  text(Pontuação, 10, 26)
  text(meusPontos, width / 5, 26);
  
}

function marcarPontos() {
  if (yAtor < 10 ) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}


