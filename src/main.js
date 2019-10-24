

jQuery(function($) {

  $(document).ready(function () {

    $('.check-yes input').on('click', function () {

      console.log('YEP');

      $('.check-yes').toggleClass('not-active');
    });

  });

});


