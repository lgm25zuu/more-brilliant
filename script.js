// ===== 症例一覧: カテゴリフィルター =====
(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".case-card");
  const noResult = document.getElementById("noResult");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const category = btn.dataset.category;
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = category === "all" || card.dataset.category === category;
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });

      if (noResult) noResult.hidden = visibleCount !== 0;
    });
  });
})();

// ===== 症例詳細: カルテタブ切り替え =====
(function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  if (!tabBtns.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));

      btn.classList.add("is-active");
      const target = document.querySelector(
        `[data-tab-panel="${btn.dataset.tab}"]`
      );
      if (target) target.classList.add("is-active");
    });
  });
})();
