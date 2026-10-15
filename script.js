const portfolioData = window.PORTFOLIO_DATA;

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function renderExperience() {
  const list = document.getElementById("experienceList");
  if (!list || !portfolioData) return;

  list.innerHTML = (portfolioData.experience || [])
    .map(
      (item) => `
        <li class="experience-item">
          <div class="experience-period"><span class="timeline-pin" aria-hidden="true"></span>${escapeHtml(item.period)}</div>
          <div>
            <h3 class="experience-role">${escapeHtml(item.role)}</h3>
            <p class="experience-company">${escapeHtml(item.company)}</p>
            ${
              item.details && item.details.length
                ? `<ul class="experience-details">${item.details
                    .map((detail) => `<li>${escapeHtml(detail)}</li>`)
                    .join("")}</ul>`
                : ""
            }
          </div>
          <div class="experience-tags" aria-label="Skills used">
            ${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </li>
      `,
    )
    .join("");
}

function renderProjectPreview(type) {
  const previews = {
    campus: `
      <div class="preview-window campus-window">
        <div class="preview-toolbar"><span>campconnect</span><span>ACADEMIC PORTAL</span></div>
        <div class="campus-layout">
          <div class="campus-sidebar"><i></i><i></i><i></i><i></i></div>
          <div class="campus-main">
            <span class="preview-eyebrow">MONDAY · OVERVIEW</span>
            <strong>Good morning, Ananya</strong>
            <div class="campus-metrics"><i></i><i></i><i></i></div>
            <div class="campus-table"><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>`,
    weather: `
      <div class="preview-window weather-window">
        <div class="weather-location">HYDERABAD, IN <span>LIVE</span></div>
        <div class="weather-now"><div><span>MONDAY · 2:30 PM</span><strong>29°</strong><small>Partly cloudy</small></div><i class="weather-sun"></i></div>
        <div class="weather-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="weather-days"><i></i><i></i><i></i><i></i></div>
      </div>`,
    banking: `
      <div class="preview-window banking-window">
        <div class="bank-card"><span>EVERGREEN BANK</span><i>•••• 2048</i><strong>₹ 84,250.00</strong><small>AVAILABLE BALANCE</small><b>VISA</b></div>
        <div class="bank-transactions"><span>RECENT ACTIVITY</span><i><b>◉</b> Market Street <strong>− ₹ 1,250</strong></i><i><b>↙</b> Salary credit <strong class="credit">+ ₹ 42,000</strong></i></div>
      </div>`,
    algorithms: `
      <div class="preview-window algorithm-window">
        <div class="algorithm-toolbar"><span>SORTING LAB</span><span>MERGE SORT · STEP 08</span></div>
        <div class="algorithm-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="algorithm-controls"><span>◀</span><i><b></b></i><span>▶</span><small>08 / 24</small></div>
      </div>`,
    tasks: `
      <div class="preview-window tasks-window">
        <div class="tasks-heading"><span>MY DAY · 04</span><strong>Make room<br />for good work.</strong></div>
        <div class="task-line"><i class="task-checked">✓</i><span>Review project notes</span><small>DONE</small></div>
        <div class="task-line"><i></i><span>Sketch new ideas</span><small>11:30</small></div>
        <div class="task-line"><i></i><span>Ship the small thing</span><small>14:00</small></div>
      </div>`,
    calculator: `
      <div class="preview-window calculator-window">
        <div class="calculator-display"><span>128 × 4</span><strong>512</strong></div>
        <div class="calculator-keys"><i>AC</i><i>±</i><i>%</i><i class="key-op">÷</i><i>7</i><i>8</i><i>9</i><i class="key-op">×</i><i>4</i><i>5</i><i>6</i><i class="key-op">−</i><i>1</i><i>2</i><i>3</i><i class="key-op">+</i></div>
      </div>`,
  };

  return previews[type] || "";
}

function renderProjects() {
  const list = document.getElementById("projectsList");
  if (!list || !portfolioData) return;

  list.innerHTML = (portfolioData.projects || [])
    .map(
      (project, index) => `
        <article class="project-entry project-${escapeHtml(project.preview || "default")}">
          <div class="project-preview" aria-hidden="true">${renderProjectPreview(project.preview)}</div>
          <div class="project-title">
            <span class="project-number">${String(index + 1).padStart(2, "0")} / PROJECT</span>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-stack">${escapeHtml(project.stack)}</p>
          </div>
          <div class="project-detail">
            <p class="project-description">${escapeHtml(project.description)}</p>
            ${
              project.points && project.points.length
                ? `<ul class="project-points">${project.points
                    .map((point) => `<li>${escapeHtml(point)}</li>`)
                    .join("")}</ul>`
                : ""
            }
            <div class="project-links">
              ${
                project.github
                  ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>`
                  : ""
              }
              ${
                project.live
                  ? `<a href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer">Live project <span aria-hidden="true">↗</span></a>`
                  : ""
              }
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderInternships() {
  const list = document.getElementById("internshipList");
  if (!list || !portfolioData) return;

  list.innerHTML = (portfolioData.internships || [])
    .map(
      (internship, index) => `
        <li class="internship-item${internship.featured ? " internship-featured" : ""}">
          <details class="internship-entry"${internship.featured ? " open" : ""}>
            <summary>
              <span class="internship-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="internship-period">${escapeHtml(internship.period)}</span>
              <span class="internship-heading">
                <strong>${escapeHtml(internship.role)}</strong>
                <span>${escapeHtml(internship.company)}</span>
              </span>
              <span class="internship-toggle" aria-hidden="true"></span>
            </summary>
            <div class="internship-detail">
              <p class="internship-summary">${escapeHtml(internship.summary)}</p>
              <div class="internship-tags" aria-label="Skills used">
                ${(internship.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
              </div>
            </div>
          </details>
        </li>
      `,
    )
    .join("");
}

function renderSkillsAndCredentials() {
  if (!portfolioData) return;

  const skillGroups = document.getElementById("skillGroups");
  if (skillGroups) {
    skillGroups.innerHTML = (portfolioData.skillGroups || [])
      .map(
        (group) => `
          <article class="skill-group">
            <h3>${escapeHtml(group.title)}</h3>
            <p>${escapeHtml(group.skills)}</p>
          </article>
        `,
      )
      .join("");
  }

  const credentials = document.getElementById("credentials");
  if (credentials) {
    credentials.innerHTML = (portfolioData.credentials || [])
      .map(
        (group) => `
          <article class="credential-group">
            <h3>${escapeHtml(group.title)}</h3>
            <ul>${(group.items || [])
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>
          </article>
        `,
      )
      .join("");
  }
}

renderExperience();
renderInternships();
renderProjects();
renderSkillsAndCredentials();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('[type="submit"]');
    if (!(submitButton instanceof HTMLButtonElement)) {
      throw new Error("Contact form submit button was not found.");
    }

    submitButton.disabled = true;
    formStatus.dataset.state = "sending";
    formStatus.textContent = "Sending your message...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(contactForm),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || `Message submission failed (${response.status}).`,
        );
      }

      formStatus.dataset.state = "success";
      formStatus.textContent = "Thanks, your message has been sent.";
      contactForm.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      formStatus.dataset.state = "error";
      formStatus.textContent =
        "Your message could not be sent. Please try again or email me directly.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

const motionElements = document.querySelectorAll(
  ".experience-item, .project-entry",
);

if (
  motionElements.length &&
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const motionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  motionElements.forEach((element) => {
    element.classList.add("motion-enter");
    motionObserver.observe(element);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("siteNav");

function closeNavigation() {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("open");
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    siteNav.classList.toggle("open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNavigation();
  });
}

const portraitStage = document.querySelector("[data-tilt]");
const finePointerMotion = window.matchMedia(
  "(pointer: fine) and (prefers-reduced-motion: no-preference)",
);

if (portraitStage && finePointerMotion.matches) {
  portraitStage.addEventListener("pointermove", (event) => {
    const bounds = portraitStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portraitStage.style.setProperty("--rotate-x", `${-y * 7}deg`);
    portraitStage.style.setProperty("--rotate-y", `${x * 7}deg`);
  });

  portraitStage.addEventListener("pointerleave", () => {
    portraitStage.style.setProperty("--rotate-x", "0deg");
    portraitStage.style.setProperty("--rotate-y", "0deg");
  });
}

const footerYear = document.getElementById("footerYear");
if (footerYear) footerYear.textContent = String(new Date().getFullYear());

let scrollFrame = 0;
window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress}%`,
      );
      scrollFrame = 0;
    });
  },
  { passive: true },
);
