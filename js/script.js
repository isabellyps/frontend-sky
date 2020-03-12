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