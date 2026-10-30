// Language toggle and the demo window. No framework; the page works without this file
// except for switching language.
(function () {
  var root = document.documentElement;
  var demo = document.getElementById("demo");
  var fullDemo = document.getElementById("full-demo");

  function syncDemo() {
    // only the landing page has the demo window
    if (!demo) return;
    var src = "demo/?lang=" + root.lang;
    if (demo.getAttribute("src") !== src) demo.setAttribute("src", src);
    fullDemo.setAttribute("href", src);
  }

  document.getElementById("lang").addEventListener("click", function () {
    root.lang = root.lang === "th" ? "en" : "th";
    try {
      localStorage.setItem("deskbit.lang", root.lang);
    } catch (e) {
      // not remembered; still switched for this visit
    }
    syncDemo();
  });

  // The office zooms on scroll; keep the page scrollable until someone asks to play.
  var wake = document.getElementById("wake");
  if (wake)
    wake.addEventListener("click", function () {
      wake.hidden = true;
      demo.focus();
    });

  syncDemo();
})();
