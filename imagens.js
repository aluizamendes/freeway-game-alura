// Variáveis das imagens 
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// Sons do jogo
let somDaTrilha;
let somDoPonto;
let somDaColisao;


// Função para carregar as imagens no arquivo
function preload() {
  
  // Carrega as imagens
  imagemEstrada = loadImage('imagens/estrada.png');
  imagemAtor = loadImage('imagens/ator-1.png');
  imagemCarro1 = loadImage('imagens/carro-1.png');
  imagemCarro2 = loadImage('imagens/carro-2.png');
  imagemCarro3 = loadImage('imagens/carro-3.png');
  
  // Array com as imagens dos carros
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  
  // Carrega os sons
  somDaTrilha = loadSound('sons/trilha.mp3');
  somDoPonto = loadSound('sons/pontos.wav');
  somDaColisao = loadSound('sons/colidiu.mp3');
}