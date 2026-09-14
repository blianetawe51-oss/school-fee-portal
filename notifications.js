const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector(".notification-panel");

if (notificationButton && notificationPanel) {
  notificationButton.addEventListener("click", () => {
    const isHidden = notificationPanel.hidden;
    notificationPanel.hidden = !isHidden;
    notificationButton.setAttribute("aria-expanded", !isHidden);
  });

  // Close notification panel when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".notification-menu")) {
      notificationPanel.hidden = true;
      notificationButton.setAttribute("aria-expanded", false);
    }
  });
}
