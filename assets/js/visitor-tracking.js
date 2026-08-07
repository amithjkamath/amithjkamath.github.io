// Invisible visitor counting, loaded on every page.
//
// MapMyVisitors only registers a visit as a side effect of its widget running,
// so the widget has to run — but it runs inside a hidden, sandboxed iframe
// (assets/html/visitor-counter.html) rather than in this page. The sandbox has
// no allow-same-origin, so that document gets an opaque origin: the vendor's
// script cannot read the DOM, storage or anything else of the site around it.
// Nothing is shown to the visitor; the counts live only in the private
// dashboard.
//
// Verified: the counter needs the real widget. Calling MapMyVisitors'
// widget_call_home.js directly left the pageview count untouched, while three
// sandboxed loads moved it by exactly three.
(function () {
  var el = document.currentScript || document.querySelector("script[data-visitor-counter]");
  var src = el && el.getAttribute("data-visitor-counter");

  if (!src) {
    return;
  }

  // Don't pollute the stats with local previews (jekyll serve / 127.0.0.1).
  var host = window.location.hostname;
  if (!host || host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.endsWith(".local")) {
    return;
  }

  function loadCounter() {
    var frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.setAttribute("aria-hidden", "true");
    frame.setAttribute("tabindex", "-1");
    frame.setAttribute("title", "");
    // Off-screen at a real size rather than display:none, because the widget
    // measures itself before reporting; visibility:hidden on top of that keeps
    // it out of find-in-page and text selections.
    frame.style.cssText = "position: absolute; left: -9999px; top: 0; width: 300px; height: 220px; border: 0; visibility: hidden";
    frame.src = src;
    document.body.appendChild(frame);
  }

  // Nothing here is displayed, so let the page finish settling first rather
  // than competing with it for bandwidth.
  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadCounter, { timeout: 1500 });
  } else {
    window.setTimeout(loadCounter, 1000);
  }
})();
