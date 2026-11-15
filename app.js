(() => {
  let currentLang = localStorage.getItem("uc_lang") || "ca";
  let activeAxisId = 1;
  let activeDistrictId = 1;

  const langButtons = document.querySelectorAll(".lang-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const annexToggle = document.getElementById("annex-toggle");
  const annexContent = document.getElementById("annex-content");

  function setLanguage(lang) {
    currentLang = UC_DATA[lang] ? lang : "ca";
    localStorage.setItem("uc_lang", currentLang);
    document.documentElement.lang = currentLang;
    document.title = UC_DATA[currentLang].metaTitle;

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });

    renderStaticTranslations();
    renderAxes();
    renderTusTable();
    renderTaxCards();
    renderDistricts();
    renderEconomyTables();
    renderAnnex();
    renderTallyAction();
  }

  function renderStaticTranslations() {
    const dict = UC_DATA[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });
  }

  function renderAxes() {
    const axes = UC_DATA[currentLang].axes;
    const tabsEl = document.getElementById("axes-tabs");
    const panelEl = document.getElementById("axis-detail-panel");

    tabsEl.innerHTML = axes
      .map(
        (axis) => `
      <button
        type="button"
        class="axis-tab ${axis.id === activeAxisId ? "active" : ""}"
        role="tab"
        aria-selected="${axis.id === activeAxisId}"
        data-axis-id="${axis.id}"
      >
        <span class="axis-num">${axis.id}</span>
        <span class="axis-tab-title">${axis.shortTitle}</span>
      </button>
    `
      )
      .join("");

    tabsEl.querySelectorAll(".axis-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeAxisId = Number(btn.dataset.axisId);
        renderAxes();
      });
    });

    const selected = axes.find((a) => a.id === activeAxisId) || axes[0];
    panelEl.innerHTML = `
      <div class="axis-panel-header">
        <h3>${selected.title}</h3>
        <span class="axis-budget-pill">${selected.budget}</span>
      </div>
      <p class="axis-panel-intro">${selected.intro}</p>
      <div class="measures-list">
        ${selected.measures
          .map(
            (m) => `
          <div class="measure-item">
            <h4>${m.title}</h4>
            <p>${m.desc}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderTusTable() {
    const rows = UC_DATA[currentLang].tusRows;
    const tbody = document.getElementById("tus-table-body");
    tbody.innerHTML = rows
      .map(
        (r) => `
      <tr>
        <td><strong>${r.title}</strong></td>
        <td>${r.current}</td>
        <td><span class="badge-uc">${r.uc}</span></td>
        <td>${r.impact}</td>
      </tr>
    `
      )
      .join("");
  }

  function renderTaxCards() {
    const cards = UC_DATA[currentLang].taxCards;
    const container = document.getElementById("tax-cards");
    container.innerHTML = cards
      .map(
        (c) => `
      <div class="tax-mini-card">
        <div class="tax-mini-val">${c.val}</div>
        <div class="tax-mini-tag">${c.tag}</div>
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>
    `
      )
      .join("");
  }

  function renderDistricts() {
    const districts = UC_DATA[currentLang].districts;
    const selector = document.getElementById("districts-selector");
    const card = document.getElementById("district-card");

    selector.innerHTML = districts
      .map(
        (d) => `
      <button
        type="button"
        class="district-btn ${d.id === activeDistrictId ? "active" : ""}"
        role="tab"
        aria-selected="${d.id === activeDistrictId}"
        data-district-id="${d.id}"
      >
        ${d.name}
      </button>
    `
      )
      .join("");

    selector.querySelectorAll(".district-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeDistrictId = Number(btn.dataset.districtId);
        renderDistricts();
      });
    });

    const selected = districts.find((d) => d.id === activeDistrictId) || districts[0];
    card.innerHTML = `
      <div class="district-card-top">
        <h3>${selected.name}</h3>
        <span class="district-barris">${selected.barris}</span>
      </div>
      <div class="district-commitments">
        ${selected.text}
      </div>
    `;
  }

  function renderEconomyTables() {
    const dict = UC_DATA[currentLang];
    document.getElementById("resources-table-body").innerHTML = dict.resourcesRows
      .map((r) => `<tr><td>${r.label}</td><td>${r.val}</td></tr>`)
      .join("");
    document.getElementById("investment-table-body").innerHTML = dict.investmentRows
      .map((r) => `<tr><td>${r.label}</td><td>${r.val}</td></tr>`)
      .join("");
  }

  function renderAnnex() {
    const items = UC_DATA[currentLang].annexItems;
    document.getElementById("annex-grid").innerHTML = items
      .map(
        (item) => `
      <div class="annex-item">
        <strong>${item.k}:</strong> ${item.v}
      </div>
    `
      )
      .join("");
  }

  function renderTallyAction() {
    const container = document.getElementById("tally-action-area");
    if (!container) return;
    const dict = UC_DATA[currentLang];
    if (typeof TALLY_FORM_URL !== "undefined" && TALLY_FORM_URL.trim() !== "") {
      container.innerHTML = `<a href="${TALLY_FORM_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${dict.tallyBtn}</a>`;
    } else {
      container.innerHTML = `<div class="tally-pending-note">${dict.tallyPending}</div>`;
    }
  }

  // Event Listeners
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  annexToggle.addEventListener("click", () => {
    const expanded = annexToggle.getAttribute("aria-expanded") === "true";
    annexToggle.setAttribute("aria-expanded", String(!expanded));
    annexContent.hidden = expanded;
    annexToggle.querySelector(".annex-icon").textContent = expanded ? "+" : "−";
  });

  // Initial render
  setLanguage(currentLang);
})();
