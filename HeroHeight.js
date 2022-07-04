function resizeHero() {
  var $headerWrapper = $('#header-wrapper');
  $headerWrapper.css('height', '' + $(window).height());
}

$(document).ready(function() {
  if($(window).width() > 1080) resizeHero();
  $(window).bind('resize', resizeHero);
})(jQuery);
