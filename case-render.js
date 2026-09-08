// カテゴリでフィルタしてカードを生成する共通関数
function renderCaseCards(containerId, categoryFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = categoryFilter
    ? CASES.filter(c => c.category === categoryFilter)
    : CASES;

  container.innerHTML = list.map(c => `
    <a href="case-detail.html?id=${c.id}" class="case-card" data-category="${c.category}">
      <div class="case-thumb">
        <img src="${c.thumbnail || ''}" alt="症例サムネイル">
        <span class="case-tag">${c.categoryLabel}</span>
      </div>
      <div class="case-card-body">
        <h3 class="case-title">${c.title}</h3>
        <p class="case-summary">${c.summary}</p>
        <div class="case-meta">
          <span>治療期間: ${c.period}</span>
          <span>費用: ${c.price}</span>
        </div>
      </div>
    </a>
  `).join('');
}
