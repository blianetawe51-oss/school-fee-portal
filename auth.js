const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const identityField = document.querySelector("#identity");
    const passwordField = document.querySelector("#password");
    
    // Null checks for form fields
    if (!identityField || !passwordField) {
      console.error("Form fields not found");
      return;
    }
    
    const identity = identityField.value.trim();
    const password = passwordField.value;

    // Basic validation
    if (!identity || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Store login state
    try {
      window.localStorage.setItem("scholarEasyPayLoggedIn", "true");
      window.localStorage.setItem("studentIdentity", identity);
      window.localStorage.setItem("studentId", identity.startsWith("STU-") ? identity : "STU-2026-0142");
      
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Error storing login data:", error);
      alert("An error occurred during login. Please try again.");
    }
  });
}

const authMenus = document.querySelectorAll("[data-auth-menu]");

if (authMenus.length > 0) {
  const isLoggedIn = window.localStorage && window.localStorage.getItem("scholarEasyPayLoggedIn") === "true";
  
  if (isLoggedIn) {
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
}
