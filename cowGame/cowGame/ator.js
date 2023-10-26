//variável do ator
let xAtor = 85;
let yAtor =  365;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);

}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
       yAtor += 3;
    }
   
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    
    if(colisao){
      voltarPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}

function voltarPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 69, 0))
  text(pontos, width / 5, 26);
}

function marcaPonto(){
  if(yAtor < 15){
    pontos += 1;
    somDoPonto.play();
    voltarPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}






