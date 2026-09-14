const languageSelect = document.querySelector("#language-select");
const translatedElements = document.querySelectorAll("[data-en][data-fr]");

// Safely retrieve saved language from localStorage
let savedLanguage = "en";
try {
  savedLanguage = window.localStorage?.getItem("scholarEasyPayLanguage") || "en";
} catch (error) {
  console.warn("Cannot access localStorage:", error);
}

function applyLanguage(language) {
  if (!translatedElements || translatedElements.length === 0) {
    return;
  }
  
  translatedElements.forEach((element) => {
    if (element.dataset[language]) {
      element.textContent = element.dataset[language];
    }
  });
  
  document.documentElement.lang = language;
  
  if (languageSelect) {
    languageSelect.value = language;
  }
  
  try {
    window.localStorage?.setItem("scholarEasyPayLanguage", language);
  } catch (error) {
    console.warn("Cannot save language preference:", error);
  }
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
  applyLanguage(savedLanguage);
}
