var albumCarousel = document.querySelector('#spotify-carousel');

if (window.matchMedia('(min-width: 768px)').matches) {
  var carousel = new bootstrap.Carousel(albumCarousel, {
    interval: false,
  });
  var carouselWidth = $('.carousel-inner')[0].scrollWidth;
  var cardWidth = $('.carousel-item').width();
  var scrollPosition = 0;
  $('#spotify-carousel .carousel-control-next').on('click', function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $('#spotify-carousel .carousel-inner').animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $('#spotify-carousel .carousel-control-prev').on('click', function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $('#spotify-carousel .carousel-inner').animate(
        { scrollLeft: scrollPosition },
        600
      );
    } else if ((scrollPosition = 1)) return;
  });
} else {
  $(albumCarousel).addClass('slide');
}
