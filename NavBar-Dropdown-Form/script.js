$(document).ready(function() {
  $('#btnRegister').click(function() {
    $('#contain').toggleClass('gone');
    $('body').toggleClass('add');
  });
  $('.close').click(function() {
    $('#contain').removeClass('gone');
    $('body').removeClass('add');
  });

  $('#btnLogin').click(function() {
    var dropdown = $('.dropdown-content');
    var arrow = $('.arrow');
    $('body').toggleClass('add');
    dropdown.toggleClass('down');
    arrow.toggleClass('gone');
  });

  $('input').blur(function() {
    var current = $(this);
    var parent = current.parent().parent();
    var warning = current.parent().parent().next().children();
    if (current.val() === "") {
      parent.addClass("has-error");
      warning.html("The " + current.attr('name') + " is required.");
      current.next().addClass("glyphicon glyphicon-remove form-control-feedback");
    } else {
      warning.html("");
      parent.removeClass("has-error").addClass("has-success");
      current.next().removeClass().addClass("glyphicon glyphicon-ok form-control-feedback");
    }
  });
  $('#repwd').blur(function() {
    if ($('#repwd').val() !== $('#pwd').val()) {
      $('#warning4').html("Confirm password doesn't match");
      $("#divRePassword").removeClass("has-success").addClass("has-error");
      $('#repwd').next().removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
    }
  });
});