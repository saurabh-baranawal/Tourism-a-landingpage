$(document).ready(function () {
  var menuIcon = $(".menu-icon");

  menuIcon.click(function () {
    menuIcon.toggleClass("active");

    $(".right").toggle();
  });
});
