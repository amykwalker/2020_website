$(document).ready(function () {

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString('en'));
            }
        });
    });

});

// Show the expand icon on hover
$('.image-container').hover(function() {
    $(this).find('.expand-icon').fadeIn();
  }, function() {
    $(this).find('.expand-icon').fadeOut();
  });
  
  // Open the modal on click
  $('.expand-icon').click(function() {
    $('#imageModal').modal('show');
  });
  
