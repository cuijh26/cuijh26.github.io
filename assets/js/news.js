(function () {
  "use strict";

  Array.prototype.forEach.call(document.querySelectorAll(".news-panel[data-visible-count]"), function (panel) {
    var list = panel.querySelector(".news-timeline");
    var viewport = panel.querySelector(".news-viewport");
    if (!list || !viewport) return;

    var items = Array.prototype.slice.call(list.querySelectorAll(".news-item"));
    var visibleCount = parseInt(panel.getAttribute("data-visible-count"), 10) || 5;
    if (!items.length) return;

    function measureViewport() {
      var scrollTop = viewport.scrollTop;
      var lastVisible = items[Math.min(visibleCount, items.length) - 1];
      items.forEach(function (item, index) {
        item.hidden = index >= visibleCount;
      });
      lastVisible.classList.add("is-measure-last");
      viewport.style.height = Math.ceil(list.getBoundingClientRect().height) + "px";
      lastVisible.classList.remove("is-measure-last");
      items.forEach(function (item) {
        item.hidden = false;
      });
      viewport.scrollTop = scrollTop;
    }

    measureViewport();

    if ("ResizeObserver" in window) {
      var lastWidth = viewport.getBoundingClientRect().width;
      new ResizeObserver(function (entries) {
        var width = entries[0].contentRect.width;
        if (Math.abs(width - lastWidth) < .5) return;
        lastWidth = width;
        measureViewport();
      }).observe(viewport);
    } else {
      window.addEventListener("resize", measureViewport);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measureViewport);
    }
  });
})();
