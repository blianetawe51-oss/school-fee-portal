const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const identity = document.querySelector("#identity").value.trim();
    const password = document.querySelector("#password").value;

    // Basic validation
    if (!identity || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Store login state
    window.localStorage.setItem("scholarEasyPayLoggedIn", "true");
    window.localStorage.setItem("studentIdentity", identity);
    window.localStorage.setItem("studentId", identity.startsWith("STU-") ? identity : "STU-2026-0142");
    
    // Redirect to dashboard
    window.location.href = "dashboard.html";
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
