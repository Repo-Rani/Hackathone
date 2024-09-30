var form = document.getElementById("form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName")
        .value;
    var email = document.getElementById("email").value;
    var telPhone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institutionName = document.getElementById("institute").value;
    var year = document.getElementById("Year").value;
    var title = document.getElementById("company").value;
    var company = document.getElementById("years").value;
    var years = document.getElementById("years").value;
    var skill1 = document.getElementById("skill-1").value;
    var skill2 = document.getElementById("skill-2").value;
    var skill3 = document.getElementById("skill-3").value;
    var skill4 = document.getElementById("skill-4").value;
    var skill5 = document.getElementById("skill-5").value;
    var resumeHtml = "\n  \n  <h2><b>Resume</b></h2>\n<h3><b><pre>                 personal Information</pre></b></h3>\n<p><b>Full Name: </b>  ".concat(fullName, "</p>\n<p><b>Email: </b>  ").concat(email, "</p>\n<p><b>Phone Number: </b>  ").concat(telPhone, "</p>\n<h3><b><pre>                 Education</pre></b></h3>\n<p><b>Degree: </b>  ").concat(degree, "</p>\n<p><b>Institute Name: </b>  ").concat(institutionName, "</p>\n<p><b>Year Of Graduation: </b>  ").concat(year, "</p>\n<h3><b><pre>                 Work Experience</pre></b></h3>\n<p><b>Company: </b>  ").concat(company, "</p>\n<p><b>Year Of Experience: </b>  ").concat(years, "</p>\n<h3><b><pre>                 Skills</pre></b></h3>\n<p><b>Skill-1: </b>  ").concat(skill1, "</p>\n<p><b>Skill-2: </b>  ").concat(skill2, "</p>\n<p><b>Skill-3: </b>  ").concat(skill3, "</p>\n<p><b>Skill-4: </b>  ").concat(skill4, "</p>\n<p><b>Skill-5: </b>  ").concat(skill5, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("The resume display elements is missing");
    }
});
