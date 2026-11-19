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
    renderSourcesTables();
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
    const ctaEmailBtn = document.getElementById("cta-email-btn");
    if (ctaEmailBtn && dict.ctaMailSubject) {
      ctaEmailBtn.href = `mailto:uniociutadana@proton.me?subject=${encodeURIComponent(dict.ctaMailSubject)}`;
    }
    const downloadBtn = document.getElementById("download-pdf-btn");
    if (downloadBtn && dict.downloadHref) {
      downloadBtn.href = dict.downloadHref;
      downloadBtn.setAttribute("download", dict.downloadFile);
    }
    const joinName = document.getElementById("join-name");
    const joinDistrict = document.getElementById("join-district");
    if (joinName && dict.joinPlaceholderName) joinName.placeholder = dict.joinPlaceholderName;
    if (joinDistrict && dict.joinPlaceholderDistrict) joinDistrict.placeholder = dict.joinPlaceholderDistrict;
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

  function renderSourcesTables() {
    const container = document.getElementById("sources-tables");
    if (!container) return;
    const tables = UC_DATA[currentLang].sourcesTables || [];
    container.innerHTML = tables
      .map(
        (tbl) => `
      <div class="source-card">
        <div class="source-card-title">${tbl.title}</div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>${tbl.cols.map((c) => `<th>${c}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${tbl.rows.map((r) => `<tr>${r.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `
      )
      .join("");
  }

  function loadTallyWidget() {
    const widgetSrc = "https://tally.so/widgets/embed.js";
    if (typeof Tally !== "undefined") {
      Tally.loadEmbeds();
    } else if (!document.querySelector(`script[src="${widgetSrc}"]`)) {
      const s = document.createElement("script");
      s.src = widgetSrc;
      s.onload = () => typeof Tally !== "undefined" && Tally.loadEmbeds();
      s.onerror = () => {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
          el.src = el.dataset.tallySrc;
        });
      };
      document.body.appendChild(s);
    }
  }

  function renderTallyAction() {
    const container = document.getElementById("tally-action-area");
    if (!container) return;
    const dict = UC_DATA[currentLang];
    const embedUrl = typeof TALLY_EMBEDS !== "undefined" ? (TALLY_EMBEDS[currentLang] || "").trim() : "";

    if (embedUrl !== "") {
      container.innerHTML = `
        <div class="tally-embed-wrap">
          <iframe
            data-tally-src="${embedUrl}"
            src="${embedUrl}"
            loading="lazy"
            width="100%"
            height="650"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="${dict.tallyTitle}"
          ></iframe>
        </div>
      `;
      loadTallyWidget();
    } else {
      container.innerHTML = `
        <div class="tally-pending-note">
          <p>${dict.tallyPending}</p>
          ${currentLang === "ca" && TALLY_EMBEDS.es ? `<button type="button" class="btn btn-outline tally-switch-btn" id="tally-switch-es">${dict.tallySwitchToEs}</button>` : ""}
        </div>
      `;
      const switchBtn = document.getElementById("tally-switch-es");
      if (switchBtn) {
        switchBtn.addEventListener("click", () => setLanguage("es"));
      }
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

  const joinForm = document.getElementById("join-form");
  if (joinForm) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = UC_DATA[currentLang];
      const name = (document.getElementById("join-name")?.value || "").trim();
      const district = (document.getElementById("join-district")?.value || "").trim();
      const roleSelect = document.getElementById("join-role");
      const role = roleSelect ? roleSelect.options[roleSelect.selectedIndex].text : "";

      const lines =
        currentLang === "ca"
          ? [
              "Hola equip d'Unió Ciutadana Sabadell,",
              "",
              "M'agradaria posar-me en contacte per unir-me o col·laborar amb el projecte:",
              `- Nom / Àlies: ${name || "(no especificat)"}`,
              `- Barri / Districte: ${district || "(no especificat)"}`,
              `- Com puc ajudar: ${role}`,
              "",
              "Comentaris addicionals:",
              ""
            ]
          : [
              "Hola equipo de Unió Ciutadana Sabadell,",
              "",
              "Me gustaría ponerme en contacto para unirme o colaborar con el proyecto:",
              `- Nombre / Alias: ${name || "(no especificado)"}`,
              `- Barrio / Distrito: ${district || "(no especificado)"}`,
              `- Cómo puedo ayudar: ${role}`,
              "",
              "Comentarios adicionales:",
              ""
            ];

      const mailto = `mailto:uniociutadana@proton.me?subject=${encodeURIComponent(dict.joinMailSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      window.location.href = mailto;
    });
  }

  // Initial render
  setLanguage(currentLang);
})();
