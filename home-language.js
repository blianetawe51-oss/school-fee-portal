const languageSelect = document.querySelector("#language-select");
const translatedElements = document.querySelectorAll("[data-en][data-fr]");
const savedLanguage =
  window.localStorage.getItem("scholarEasyPayLanguage") || "en";

function applyLanguage(language) {
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.documentElement.lang = language;
  languageSelect.value = language;
  window.localStorage.setItem("scholarEasyPayLanguage", language);
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
  applyLanguage(savedLanguage);
}
