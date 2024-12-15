const nameItems = document.querySelectorAll(".name-item");
const nameRows = {
  "RI": document.querySelectorAll(".RI"),
  "ZN": document.querySelectorAll(".ZN"),
  "SA": document.querySelectorAll(".SA"),
  "AZ": document.querySelectorAll(".AZ"),
  "RS": document.querySelectorAll(".RS"),
};

nameItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Reset styles for all items
    nameItems.forEach((el) => el.classList.remove("bg-primary"));

    // Highlight the selected item
    item.classList.add("bg-primary");

    // Get the selected name
    const selectedname = item.dataset.name;

    // Toggle visibility of name rows
    Object.keys(nameRows).forEach((name) => {
      if (name === selectedname) {
        nameRows[name].forEach((el) => el.classList.add("bg-primary")); // Show selected name
      } else {
        nameRows[name].forEach((el) => el.classList.remove("bg-primary")); // Hide others
      }
    });
  });
});
