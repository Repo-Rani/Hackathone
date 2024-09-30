var form = document.getElementById("form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link");
var shareableLink = document.getElementById("share-link");
var downloadPdf = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var fullName = document.getElementById("fullName")
        .value;
    var email = document.getElementById("email").value;
    var telPhone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institutionName = document.getElementById("institute").value;
    var year = document.getElementById("Year").value;
    // const title = (document.getElementById("company") as HTMLInputElement).value;
    var company = document.getElementById("company").value;
    var years = document.getElementById("years").value;
    var skill1 = document.getElementById("skill-1").value;
    var skill2 = document.getElementById("skill-2").value;
    var skill3 = document.getElementById("skill-3").value;
    var skill4 = document.getElementById("skill-4").value;
    var skill5 = document.getElementById("skill-5").value;
    var resumData = {
        username: username,
        fullName: fullName,
        email: email,
        telPhone: telPhone,
        degree: degree,
        institutionName: institutionName,
        year: year,
        company: company,
        years: years,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4,
        skill5: skill5,
    };
    localStorage.setItem(username, JSON.stringify(resumData));
    var resumeHtml = "\n  \n  <h2><b>Editable Resume</b></h2>\n<h3><b><pre>                 personal Information</pre></b></h3>\n<p><b>Full Name: </b> <span contenteditable=\"true\">".concat(fullName, "</span></p>\n<p><b>Email: </b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone Number: </b> <span contenteditable=\"true\"> ").concat(telPhone, "</span></p>\n<h3><b><pre>                 Education</pre></b></h3>\n<p><b>Degree: </b> <span contenteditable=\"true\">").concat(degree, "</span></p>\n<p><b>Institute Name: </b> <span contenteditable=\"true\">").concat(institutionName, "</span></p>\n<p><b>Year Of Graduation: </b> <span contenteditable=\"true\">").concat(year, "</span></p>\n<h3><b><pre>                 Work Experience</pre></b></h3>\n<p><b>Company: </b> <span contenteditable=\"true\">").concat(company, "</span></p>\n<p><b>Year Of Experience: </b> <span contenteditable=\"true\">").concat(years, "</span></p>\n<h3><b><pre>                 Skills</pre></b></h3>\n<p><b>Skill-1: </b> <span contenteditable=\"true\">").concat(skill1, "</span></p>\n<p><b>Skill-2: </b> <span contenteditable=\"true\">").concat(skill2, "</span></p>\n<p><b>Skill-3: </b> <span contenteditable=\"true\">").concat(skill3, "</span></p>\n<p><b>Skill-4: </b> <span contenteditable=\"true\">").concat(skill4, "</span></p>\n<p><b>Skill-5: </b> <span contenteditable=\"true\">").concat(skill5, "</span></p>\n");
    resumeDisplayElement.innerHTML = resumeHtml;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent, "(username)}");
    shareableLinkContainer.style.display = "block";
    shareableLink.href = shareableURL;
});
downloadPdf.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("fullName").value =
                resumData.fullName;
            document.getElementById("email").value =
                resumData.email;
            document.getElementById("phone").value =
                resumData.telPhone;
            document.getElementById("degree").value =
                resumData.degree;
            document.getElementById("institute").value =
                resumData.institutionName;
            document.getElementById("Year").value =
                resumData.year;
            document.getElementById("company").value =
                resumData.company;
            document.getElementById("years").value =
                resumData.years;
            document.getElementById("skill-1").value =
                resumData.skill1;
            document.getElementById("skill-2").value =
                resumData.skill2;
            document.getElementById("skill-3").value =
                resumData.skill3;
            document.getElementById("skill-4").value =
                resumData.skill4;
            document.getElementById("skill-5").value =
                resumData.skill5;
        }
    }
});
