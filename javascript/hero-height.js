// Dynamically resize Hero section to 100% of the viewport height on all devices except mobile
function resizeHero() {
  var $headerWrapper = $('#header-wrapper');
  $headerWrapper.css('height', '' + $(window).height());
};

$(document).ready(function () {
  if ($(window).width() > 980) {
    resizeHero();
    $(window).bind('resize', resizeHero);
  }
});
