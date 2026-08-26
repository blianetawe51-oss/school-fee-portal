const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector(".notification-panel");

if (notificationButton && notificationPanel) {
  notificationButton.addEventListener("click", () => {
    const isOpen = notificationButton.getAttribute("aria-expanded") === "true";
    notificationButton.setAttribute("aria-expanded", String(!isOpen));
    notificationPanel.hidden = isOpen;
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".notification-menu")) {
      notificationButton.setAttribute("aria-expanded", "false");
      notificationPanel.hidden = true;
    }
  });
}
