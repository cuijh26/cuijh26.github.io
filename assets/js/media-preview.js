(function () {
  "use strict";

  var enabled = window.matchMedia("(min-width: 961px) and (hover: hover) and (pointer: fine)");
  var frames = Array.prototype.slice.call(document.querySelectorAll(".paper-box-image > div"));

  frames.forEach(function (frame) {
    var card = frame.closest(".paper-box");
    var host = frame.parentElement;
    if (!card) return;

    function reset() {
      frame.classList.remove("is-zoomed");
      card.classList.remove("is-previewing");
    }

    host.addEventListener("pointerenter", function (event) {
      if (!enabled.matches || event.pointerType === "touch") return;

      var bounds = host.getBoundingClientRect();
      var scale = Math.min(2.2, (window.innerWidth - bounds.left - 24) / bounds.width,
        (window.innerHeight - 104) / bounds.height);
      if (scale <= 1) return;

      var height = bounds.height * scale;
      var top = Math.max(80, Math.min(bounds.top - (height - bounds.height) / 2,
        window.innerHeight - 24 - height));

      frame.style.setProperty("--preview-scale", scale);
      frame.style.setProperty("--preview-offset-y", (top - bounds.top) + "px");
      frame.classList.add("is-zoomed");
      card.classList.add("is-previewing");
    });

    host.addEventListener("pointerleave", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("scroll", reset, { passive: true });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") reset();
    });
  });
})();
