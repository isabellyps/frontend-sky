// //requisição API
var url = "https://sky-frontend.herokuapp.com/movies";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function () {//Função a ser chamada quando a requisição retornar do servidor
  if (xhttp.readyState == 4 && xhttp.status == 200) {//Verifica se o retorno do servidor deu certo
    console.log(xhttp.responseText);
  }
}

xhttp.send();//A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor

//Abrir/Fechar Menu
let botaoMenu = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');

botaoMenu.addEventListener("click", abreFechaMenu);

function abreFechaMenu(evento){
  menuPrincipal.classList.toggle('menu-principal--fechado')
}

//Abrir/Fechar Rodape
let botaoRodape = document.querySelector('.menu-rodape__btn');
let menuRodape = document.querySelector('.menu-rodape');

botaoRodape.addEventListener("click", abreFechaMenu);

function abreFechaMenu(evento){
  menuRodape.classList.toggle('menu-rodape--fechado')
}


//carousel
$('.carousel').slick({
  centerMode: true,
  centerPadding: '5px',
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 0
      }
    }
  ]
});

//   $('.carousel').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     variableWidth: true
//   });

