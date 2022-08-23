const tabs = document.querySelectorAll(".details-tab button");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (document.querySelector(".details-tab button.active")) {
      document
        .querySelector(".details-tab button.active")
        .classList.remove("active");
    }

    tab.classList.add("active");
  });
});
