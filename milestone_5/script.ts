const form = document.getElementById("form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

const shareableLinkContainer = document.getElementById(
  "shareable-link"
) as HTMLDivElement;

const shareableLink = document.getElementById(
  "share-link"
) as HTMLAnchorElement;

const downloadPdf = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const fullName = (document.getElementById("fullName") as HTMLInputElement)
    .value;

  const email = (document.getElementById("email") as HTMLInputElement).value;

  const telPhone = (document.getElementById("phone") as HTMLInputElement).value;

  const degree = (document.getElementById("degree") as HTMLInputElement).value;

  const institutionName = (
    document.getElementById("institute") as HTMLInputElement
  ).value;

  const year = (document.getElementById("Year") as HTMLInputElement).value;

  const company = (document.getElementById("company") as HTMLInputElement).value;
  const years = (document.getElementById("years") as HTMLInputElement).value;

  const skill1 = (document.getElementById("skill-1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill-2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill-3") as HTMLInputElement).value;
  const skill4 = (document.getElementById("skill-4") as HTMLInputElement).value;
  const skill5 = (document.getElementById("skill-5") as HTMLInputElement).value;

  const resumData = {
    username,
    fullName,
    email,
    telPhone,
    degree,
    institutionName,
    year,
    company,
    years,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
  };
  localStorage.setItem(username, JSON.stringify(resumData));
  const resumeHtml = `
  
  <h2><b>Editable Resume</b></h2>
<h3><b><pre>                 personal Information</pre></b></h3>
<p><b>Full Name: </b> <span contenteditable="true">${fullName}</span></p>
<p><b>Email: </b> <span contenteditable="true">${email}</span></p>
<p><b>Phone Number: </b> <span contenteditable="true"> ${telPhone}</span></p>
<h3><b><pre>                 Education</pre></b></h3>
<p><b>Degree: </b> <span contenteditable="true">${degree}</span></p>
<p><b>Institute Name: </b> <span contenteditable="true">${institutionName}</span></p>
<p><b>Year Of Graduation: </b> <span contenteditable="true">${year}</span></p>
<h3><b><pre>                 Work Experience</pre></b></h3>
<p><b>Company: </b> <span contenteditable="true">${company}</span></p>
<p><b>Year Of Experience: </b> <span contenteditable="true">${years}</span></p>
<h3><b><pre>                 Skills</pre></b></h3>
<p><b>Skill-1: </b> <span contenteditable="true">${skill1}</span></p>
<p><b>Skill-2: </b> <span contenteditable="true">${skill2}</span></p>
<p><b>Skill-3: </b> <span contenteditable="true">${skill3}</span></p>
<p><b>Skill-4: </b> <span contenteditable="true">${skill4}</span></p>
<p><b>Skill-5: </b> <span contenteditable="true">${skill5}</span></p>
`;

  resumeDisplayElement.innerHTML = resumeHtml;
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent}(username)}`;

  shareableLinkContainer.style.display = "block";
  shareableLink.href = shareableURL;
});

downloadPdf.addEventListener("click", () => {
  window.print();
});
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("fullName") as HTMLInputElement).value =
        resumData.fullName;
      (document.getElementById("email") as HTMLInputElement).value =
        resumData.email;
      (document.getElementById("phone") as HTMLInputElement).value =
        resumData.telPhone;
      (document.getElementById("degree") as HTMLInputElement).value =
        resumData.degree;
      (document.getElementById("institute") as HTMLInputElement).value =
        resumData.institutionName;
      (document.getElementById("Year") as HTMLInputElement).value =
        resumData.year;
      (document.getElementById("company") as HTMLInputElement).value =
        resumData.company;
      (document.getElementById("years") as HTMLInputElement).value =
        resumData.years;
      (document.getElementById("skill-1") as HTMLInputElement).value =
        resumData.skill1;
      (document.getElementById("skill-2") as HTMLInputElement).value =
        resumData.skill2;
      (document.getElementById("skill-3") as HTMLInputElement).value =
        resumData.skill3;
      (document.getElementById("skill-4") as HTMLInputElement).value =
        resumData.skill4;
      (document.getElementById("skill-5") as HTMLInputElement).value =
        resumData.skill5;
    }
  }
});
