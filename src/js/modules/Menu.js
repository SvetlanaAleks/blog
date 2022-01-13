import noScroll from "../global/noScroll";
const Menu = (function () {
  "use strict";
  const burgerMenu = $(".js-burger");
  const overlay = $(".js-overlay");

  function scroll(target) {
    const top = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: top,
      },
      800
    );
  }
  return {
    showMobileMenu: function () {
      burgerMenu.click(function (e) {
        e.preventDefault();
        const target = $($(this).data("target"));
        target.toggleClass("menu-mobile--active");
        burgerMenu.toggleClass("burger--active");
        overlay.toggleClass("active");
        noScroll.toggle();
      });
    },
    init: function () {
      Menu.showMobileMenu();
    },
  };
})();

export default Menu;
