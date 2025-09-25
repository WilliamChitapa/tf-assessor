if (window.location.pathname.endsWith("index.html")) {
  const newPath = window.location.pathname.replace(/index\.html$/, "");
  window.location.replace(newPath);
}
const lang = navigator.language || navigator.userLanguage;

const isInsideLang =
  window.location.pathname.startsWith("/i/br/") ||
  window.location.pathname.startsWith("/i/en/") ||
  window.location.pathname.startsWith("/i/es/") ||
  window.location.pathname.startsWith("/i/zh/"); // 👈 adicionado

if (!isInsideLang) {
  let redirectUrl = "/i/br/";

  if (lang.startsWith("en")) redirectUrl = "/i/en/";
  if (lang.startsWith("es")) redirectUrl = "/i/es/";
  if (lang.startsWith("zh")) redirectUrl = "/i/zh/"; // 👈 adicionado

  window.location.href = redirectUrl;
}

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const dropdown = languageButton.querySelector(".language-dropdown");

  languageButton.addEventListener("click", () => {
    languageButton.classList.toggle("active");
  });

  dropdown.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", () => {
      const flagImg = option.querySelector(".flag-icon");
      const languageButtonImg = languageButton.querySelector(".flag-icon");
      languageButtonImg.src = flagImg.src;
      languageButtonImg.alt = flagImg.alt;
      languageButton.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!languageButton.contains(e.target)) {
      languageButton.classList.remove("active");
    }
  });
});
