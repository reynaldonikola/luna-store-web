(function () {
  "use strict";

  /* ---------------- Mobile navigation ---------------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------- Catalog filter ---------------- */
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
  var productCards = Array.prototype.slice.call(document.querySelectorAll(".product-card"));
  var noResults = document.getElementById("no-results");

  function applyFilter(category) {
    var visibleCount = 0;

    productCards.forEach(function (card) {
      var matches = category === "all" || card.getAttribute("data-category") === category;
      card.classList.toggle("is-hidden", !matches);
      if (matches) {
        visibleCount += 1;
      }
    });

    if (noResults) {
      noResults.classList.toggle("is-visible", visibleCount === 0);
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.setAttribute("aria-pressed", "false");
      });
      button.setAttribute("aria-pressed", "true");
      applyFilter(button.getAttribute("data-filter"));
    });
  });

  /* ---------------- FAQ accordion ---------------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) {
      return;
    }

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var otherQuestion = other.querySelector(".faq-question");
        if (otherQuestion) {
          otherQuestion.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------- Back to top ---------------- */
  var backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 480);
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------- Scroll reveal (proceso steps) ---------------- */
  var stepCards = Array.prototype.slice.call(document.querySelectorAll(".steps .step-card"));

  if (stepCards.length && "IntersectionObserver" in window) {
    stepCards.forEach(function (card) {
      card.classList.add("reveal");
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepCards.forEach(function (card) {
      revealObserver.observe(card);
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
