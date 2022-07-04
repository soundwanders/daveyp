function resizeHero() {
  var $headerWrapper = $('#header-wrapper');
  $headerWrapper.css('height', '' + $(window).height() - 40);
}

$(document).ready(function() {
  if($(window).width() > 1080) resizeHero();
  $(window).bind('resize', resizeHero);
})(jQuery);