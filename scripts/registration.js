document.addEventListener("DOMContentLoaded", function() {
  var IS_TOUCH = 'ontouchstart' in window;

  var inputs = document.querySelectorAll('.move-label input');
  for (var i=0; i < inputs.length; i++) {
    setUpInput(inputs[i]);
  }


  function setUpInput(input) {
    var $input = $(input);
    if (IS_TOUCH) {
      return $input.closest('.move-label').addClass('filled');
    }

    if (input.value) {
      $input.closest('.move-label').addClass('filled');
    }

    input.addEventListener('focus', function(event) {
      $(event.target).closest('.move-label').addClass('filled');
    });
    input.addEventListener('blur', function(event) {
      if (!event.target.value) {
        $(event.target).closest('.move-label').removeClass('filled');
      }
    });
  }

  var API_ENDPOINT = 'http://junction.aaltoes.com/register';

  var form = document.querySelector('#registration-form');
  if (!form) return;

  var getData = function() {
    var data = {};
    $(form).serialize().split('&').map(function(param) {
      var pair = param.split('=');
      var key = pair[0];
      var value = pair[1];
      if (key === 'second_choices') {
        data[key] = data[key] || [];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    return data;
  };

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('#done, #error').hide();
    $.ajax({
      type: 'POST',
      url: API_ENDPOINT,
      contentType: 'application/json',
      data: JSON.stringify(getData())
    }).done(function() {
      $(form).hide();
      $('.side-events').hide();
      $("#done").fadeIn(250);
    }).error(function() {
      $("#error").show(250);
    });
  });

});
