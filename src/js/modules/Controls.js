const Controls = (function () {
  "use strict";
  const tabs = $(".js-tab");
  const articles = $(".js-articles");
  return {
    showInfoTab: function () {
      tabs.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        tabs.removeClass("active");
        _this.addClass("active");
        const target = $(_this.data("target"));
        articles.removeClass("active");
        target.addClass("active");
      });
    },
    init: function () {
      Controls.showInfoTab();
    },
  };
})();

export default Controls;
