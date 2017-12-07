$.noConflict();

(function($) {
  var doorbell = new Audio('media/doorbell.mp3');

  $('#doorbell').on('click', function() {
    doorbell.play();
  });

})(jQuery);
