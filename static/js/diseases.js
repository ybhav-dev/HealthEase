document.addEventListener("DOMContentLoaded", function () {
  const chips = document.querySelectorAll(".chip");
  const searchInput = document.getElementById("disease-search-input");
  const cards = document.querySelectorAll(".disease-card");
  const emptyNote = document.getElementById("disease-empty");

  let activeCategory = "all";

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach((card) => {
      const cardCategory = card.dataset.category; // e.g. "cold_flu"
      const cardName = (card.dataset.name || "").toLowerCase();

      const matchesCategory =
        activeCategory === "all" || cardCategory === activeCategory;

      const matchesSearch = query === "" || cardName.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyNote) {
      emptyNote.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      activeCategory = chip.dataset.category || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }
});
