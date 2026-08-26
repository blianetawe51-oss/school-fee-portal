const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", () => {
    window.localStorage.setItem("scholarEasyPayLoggedIn", "true");
  });
}

const authMenus = document.querySelectorAll("[data-auth-menu]");

if (window.localStorage.getItem("scholarEasyPayLoggedIn") === "true") {
  authMenus.forEach((menu) => {
    const loginLink = menu.querySelector('a[href="login.html"]');
    const registerLink = menu.querySelector('a[href="register.html"]');
    const profileLink = document.createElement("a");

    profileLink.className = "profile-menu";
    profileLink.href = "dashboard.html";
    profileLink.setAttribute("aria-label", "Open profile");
    profileLink.innerHTML =
      '<span class="avatar">KB</span><span>Profile</span>';

    loginLink?.remove();
    registerLink?.remove();
    menu.append(profileLink);
  });
}
