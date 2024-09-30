const toggleButton = document.getElementById("toggle") as HTMLButtonElement;
const skillsSelection = document.querySelector(".about.skills") as HTMLElement;

toggleButton.addEventListener("click", () => {
  if (skillsSelection.style.display === "none") {
    skillsSelection.style.display = "block";
  } else {
    skillsSelection.style.display = "none";
  }
});
