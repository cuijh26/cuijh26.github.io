(function () {
  "use strict";

  var buttons = Array.prototype.slice.call(document.querySelectorAll(".paper-code[data-repo]"));
  if (!buttons.length) return;

  var cacheKey = "homepage-github-stars";
  var cacheTTL = 12 * 60 * 60 * 1000;
  var cacheURL = document.currentScript.getAttribute("data-cache-url");
  var cache = {};
  var repos = [];

  try {
    var stored = JSON.parse(sessionStorage.getItem(cacheKey));
    if (stored && typeof stored === "object") cache = stored;
  } catch (error) {
    // Star counts also work when browser storage is unavailable.
  }

  function validCount(count) {
    return typeof count === "number" && isFinite(count) && count >= 0 && Math.floor(count) === count;
  }

  function render(repo, count) {
    buttons.forEach(function (button) {
      if (button.getAttribute("data-repo") !== repo) return;
      var countNode = button.querySelector(".github-stars-count");
      if (!countNode) return;
      countNode.textContent = count > 0 ? String(count) : "";
      countNode.hidden = count === 0;
      button.title = count.toLocaleString("en-US") + " GitHub stars";
      button.setAttribute("aria-label", repo.split("/")[1] + " code on GitHub, " + count.toLocaleString("en-US") + " stars");
    });
  }

  function saveCache() {
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify(cache));
    } catch (error) {
      // Keep the count on the page even if storage is full or disabled.
    }
  }

  buttons.forEach(function (button) {
    var repo = button.getAttribute("data-repo");
    if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || repos.indexOf(repo) !== -1) return;
    repos.push(repo);
    if (cache[repo] && validCount(cache[repo].count)) render(repo, cache[repo].count);
  });

  // The daily repository snapshot supplies a fallback without a third-party badge.
  if (cacheURL) {
    fetch(cacheURL)
      .then(function (response) {
        if (!response.ok) throw new Error("Star snapshot unavailable");
        return response.json();
      })
      .then(function (snapshot) {
        repos.forEach(function (repo) {
          if (cache[repo] && validCount(cache[repo].count)) return;
          var entry = snapshot && snapshot.repos && snapshot.repos[repo];
          var count = typeof entry === "number" ? entry : entry && entry.stargazers_count;
          if (validCount(count)) render(repo, count);
        });
      })
      .catch(function () {});
  }

  repos.forEach(function (repo) {
    var entry = cache[repo];
    if (entry && validCount(entry.count) && Date.now() - entry.timestamp < cacheTTL) return;

    fetch("https://api.github.com/repos/" + repo, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("GitHub stars unavailable");
        return response.json();
      })
      .then(function (data) {
        if (!validCount(data.stargazers_count)) return;
        cache[repo] = { count: data.stargazers_count, timestamp: Date.now() };
        render(repo, data.stargazers_count);
        saveCache();
      })
      .catch(function () {});
  });
})();
