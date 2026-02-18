async function sendMail(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      showToast("Mail Sent Successfully!");
      event.target.reset();
    } else {
      showToast("Error sending mail. Try again.");
    }
  } catch (error) {
    showToast("Something went wrong!");
    console.error(error);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => (toast.className = toast.className.replace("show", "")), 3000);
}

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close-btn");
const aboutSkillsGrid = document.getElementById("aboutSkillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const internshipsGrid = document.getElementById("internshipsGrid");
const projectsCompletedValue = document.getElementById("projectsCompletedValue");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGithub = document.getElementById("modalGithub");
const modalLive = document.getElementById("modalLive");

const portfolioData = window.PORTFOLIO_DATA || { projects: [], internships: [] };

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

function renderAboutSkills() {
  if (!aboutSkillsGrid) return;

  aboutSkillsGrid.innerHTML = (portfolioData.aboutSkills || [])
    .map((skill) => {
      if (skill.type === "icon") {
        const safeClass = escapeHtml(skill.className || "");
        const safeStyle = skill.style ? ` style="${escapeHtml(skill.style)}"` : "";
        return `<i class="${safeClass}"${safeStyle}></i>`;
      }

      if (skill.type === "image") {
        return `<img src="${escapeHtml(skill.src || "")}" alt="${escapeHtml(skill.alt || "Skill")}" />`;
      }

      return "";
    })
    .join("");
}
function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article
          class="project-card"
          data-title="${escapeHtml(project.title)}"
          data-tech="${escapeHtml(project.tech)}"
          data-desc="${escapeHtml(project.desc)}"
          data-full-desc="${escapeHtml(project.fullDesc || project.desc || "")}" 
          data-github="${escapeHtml(project.github)}"
          data-live="${escapeHtml(project.live || "#")}" 
          data-img="${escapeHtml(project.img)}"
          tabindex="0"
          role="button"
          aria-label="Open project details for ${escapeHtml(project.title)}"
        >
          <div class="project-media">
            <img src="${escapeHtml(project.img)}" alt="${escapeHtml(project.title)} preview" loading="lazy" />
          </div>
          <div class="project-content">
            <p class="project-tech">${escapeHtml(project.tech)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-full-desc">${escapeHtml(project.desc || "")}</p>
            <div class="project-card-links">
              ${project.github && project.github !== "#"
                ? `<a class="project-link-btn" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
                : `<span class="project-link-btn disabled" aria-disabled="true">GitHub Unavailable</span>`}
              ${project.live && project.live !== "#"
                ? `<a class="project-link-btn" href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer">Live Demo</a>`
                : `<span class="project-link-btn disabled" aria-disabled="true">Live Unavailable</span>`}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderInternships() {
  if (!internshipsGrid) return;

  internshipsGrid.innerHTML = portfolioData.internships
    .map(
      (item, index) => `
        <article class="internship-card ${item.featured ? "featured" : ""}">
          <div class="internship-top">
            <span class="internship-index">${String(index + 1).padStart(2, "0")}</span>
            <p class="internship-date">${escapeHtml(item.period)}</p>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          ${item.company ? `<p class="internship-company">${escapeHtml(item.company)}</p>` : ""}
          <p class="internship-summary">${escapeHtml(item.summary)}</p>
          <div class="internship-tags">
            ${(item.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

renderAboutSkills();
renderProjects();
renderInternships();

const cards = document.querySelectorAll(".project-card");

if (projectsCompletedValue) {
  projectsCompletedValue.textContent = String(cards.length);
}

function openProjectModal(card) {
  if (!modal) return;
  modal.style.display = "flex";

  modalImg.src = card.dataset.img;
  modalImg.alt = card.dataset.title + " preview";
  modalTitle.innerText = card.dataset.title;
  modalDesc.innerText = card.dataset.fullDesc || card.dataset.desc || "";
  modalGithub.href = card.dataset.github;

  if (card.dataset.live && card.dataset.live !== "#") {
    modalLive.style.display = "inline-flex";
    modalLive.href = card.dataset.live;
  } else {
    modalLive.style.display = "none";
  }
}

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest(".project-card-links")) return;
    openProjectModal(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectModal(card);
    }
  });
});

if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("siteNav");
const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sectionTargets = document.querySelectorAll("section[id]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickInsideNav = siteNav.contains(event.target);
    const clickToggle = navToggle.contains(event.target);
    if (!clickInsideNav && !clickToggle) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const linkMap = {};
sectionLinks.forEach((link) => {
  linkMap[link.getAttribute("href")] = link;
});

const setActiveLink = (id) => {
  sectionLinks.forEach((link) => link.classList.remove("active"));
  const active = linkMap[`#${id}`];
  if (active) active.classList.add("active");
};

if (sectionTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.01,
    },
  );

  sectionTargets.forEach((section) => observer.observe(section));
}

setActiveLink("home");

const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

