$(document).on('ready', function() {
     

  $(".top-selling").slick({
    dots: false,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 2,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false,
        }
      }
      
    ]
   
    
  });

});





