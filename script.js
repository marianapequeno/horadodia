const data = new Date();
const hora = data.getHours();
const minuto = data.getMinutes(2);

const horas = (hora<10) ? `0${hora}` : hora;
const minutos = (minuto<10) ? `0${minuto}` : minuto;

let horario = document.getElementById("horario");
horario.innerHTML = `Agora são ${horas}h${minutos}.`;

const imagem = document.querySelector("img");
const varCss = document.documentElement.style;
if(hora>=6 && hora<12){
  imagem.src="imagens/manha.jpg";
  varCss.setProperty("--cor-fundo", "#7C379E");
  varCss.setProperty("--cor-textos", "#C06AEB");
  varCss.setProperty("--cor-hover", "#A955D4");
}else if(hora>=12 && hora<18){
  imagem.src="imagens/tarde.jpg";
  imagem.setAttribute("alt", "Foto de uma tarde em dia ensolarado")
  varCss.setProperty("--cor-fundo", "#EEEB53");
  varCss.setProperty("--cor-textos", "#9E9C08");
  varCss.setProperty("--cor-hover", "#B8B509");
}else{
  imagem.src="imagens/noite.jpg";
  imagem.setAttribute("alt", "Foto da cidade à noite")
  varCss.setProperty("--cor-fundo", "#4F429E");
  varCss.setProperty("--cor-textos", "#7563EB");
  varCss.setProperty("--cor-hover", "#5B4DB8");
}