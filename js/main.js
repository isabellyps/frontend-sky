$(document).ready(function () {
  const btnMenu = document.querySelector('.menu-principal__btn');
  btnMenu.addEventListener("click", openCloseMenu);

  const btnsFooter = document.querySelectorAll('.menu-rodape__btn');
  const menusFooter = document.querySelectorAll('.menu-rodape');

  for (let index = 0; index < btnsFooter.length; index++) {
    const btnFooter = btnsFooter[index];
    const menuFooter = menusFooter[index];

    btnFooter.addEventListener("click", function () {
      openCloseFooter(menuFooter);
    });
  }



  getMovies();
});

function renderMovies(movies, mainDiv) {

  let firstMovie = movies[0];
  let secondMovie = movies[1];

  let divActive = document.createElement("div");
  divActive.classList.add("swiper-slide");
  divActive.classList.add("swiper-slide-active");
  divActive.style.marginRight = "30px";
  divActive.style.width = "300px";

  let linkImageActive = document.createElement("a");
  linkImageActive.classList.add("lista-filmes__item");

  let movieImageActive = document.createElement("img");
  movieImageActive.classList.add("lista-filmes__img--principal");
  movieImageActive.src = firstMovie.images[0].url;
  movieImageActive.alt = "movie";

  linkImageActive.appendChild(movieImageActive);

  divActive.appendChild(linkImageActive);

  let divNext = document.createElement("div");
  divNext.classList.add("swiper-slide");
  divNext.classList.add("swiper-slide-next");
  divNext.style.marginRight = "30px";
  divNext.style.width = "300px";

  let linkImageNext = document.createElement("a");
  linkImageNext.classList.add("lista-filmes__item");

  let movieImageNext = document.createElement("img");
  movieImageNext.classList.add("lista-filmes__img--principal");
  movieImageNext.src = secondMovie.images[0].url;
  movieImageNext.alt = "movie";

  linkImageNext.appendChild(movieImageNext);

  divNext.appendChild(linkImageNext);

  mainDiv.appendChild(divActive);
  mainDiv.appendChild(divNext);

  for (let index = 2; index < movies.length; index++) {
    const movie = movies[index];

    let divMovie = document.createElement("div");
    divMovie.classList.add("swiper-slide");
    divMovie.style.marginRight = "30px";
    divMovie.style.width = "300px";

    let linkImageMovie = document.createElement("a");
    linkImageMovie.classList.add("lista-filmes__item");

    let movieImageMovie = document.createElement("img");
    movieImageMovie.classList.add("lista-filmes__img--principal");
    movieImageMovie.src = movie.images[0].url;
    movieImageMovie.alt = "movie";

    linkImageMovie.appendChild(movieImageMovie);

    divMovie.appendChild(linkImageMovie);

    mainDiv.appendChild(divMovie);
  }
}

function getMovies() {
  const url = "https://sky-frontend.herokuapp.com/movies";

  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      let moviesResponse = JSON.parse(xhttp.responseText);
      console.log(moviesResponse);

      let highlights = moviesResponse[0].items;
      let divMoviesDestaques = document.getElementById("destaques");
      renderMovies(highlights, divMoviesDestaques);

      let infantil = moviesResponse[2].movies.filter((movie) => movie.categories.includes("Infantil"));
      let divMoviesintantil = document.getElementById("infantil");
      renderMovies(infantil, divMoviesintantil);

      let drama = moviesResponse[2].movies.filter((movie) => movie.categories.includes("Drama"));
      let divMoviesDrama = document.getElementById("drama");
      renderMovies(drama, divMoviesDrama);

      let ficcaoCientifica = moviesResponse[2].movies.filter((movie) => movie.categories.includes("Ficção Científica"));
      let divMoviesFiccao = document.getElementById("ficcaocientifica");
      renderMovies(ficcaoCientifica, divMoviesFiccao);

      let comedia = moviesResponse[2].movies.filter((movie) => movie.categories.includes("Comédia"));
      let divMoviesComedia = document.getElementById("comedia");
      renderMovies(comedia, divMoviesComedia);
    }
  }

  xhttp.send();
}

function openCloseMenu(event) {
  let menuPrincipal = document.querySelector('.menu-principal');
  menuPrincipal.classList.toggle('menu-principal--fechado')
}

function openCloseFooter(menuFooter) {
  menuFooter.classList.toggle('menu-rodape--fechado')
}

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});