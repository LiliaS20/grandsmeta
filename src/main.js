

jQuery(function($) {

  $(document).ready(function () {

    $('.check-yes').on('click', function () {

      console.log('YEP');

      $('.check-yes').toggleClass('not-active');
    });

  });

});


