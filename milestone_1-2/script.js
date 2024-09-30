var toggleBtn = document.getElementById("toggle");
var skills = document.querySelector(".about.skills");
toggleBtn.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
