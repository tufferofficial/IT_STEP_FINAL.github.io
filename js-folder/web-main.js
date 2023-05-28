$(document).ready(function () {
  var $menuToggle = $("#menu-toggle");
  var $menu = $(".menu");

  $menuToggle.click(function () {
    $menu.toggle();
  });

  $(document).click(function (event) {
    var $target = $(event.target);

    if (!$target.closest("nav").length) {
      $menu.hide();
    }
  });
});
