const form = document.getElementById("form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

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

  const resumeHtml = `
  
  <h2><b>Resume</b></h2>
<h3><b><pre>                 personal Information</pre></b></h3>
<p><b>Full Name: </b>  ${fullName}</p>
<p><b>Email: </b>  ${email}</p>
<p><b>Phone Number: </b>  ${telPhone}</p>
<h3><b><pre>                 Education</pre></b></h3>
<p><b>Degree: </b>  ${degree}</p>
<p><b>Institute Name: </b>  ${institutionName}</p>
<p><b>Year Of Graduation: </b>  ${year}</p>
<h3><b><pre>                 Work Experience</pre></b></h3>
<p><b>Company: </b>  ${company}</p>
<p><b>Year Of Experience: </b>  ${years}</p>
<h3><b><pre>                 Skills</pre></b></h3>
<p><b>Skill-1: </b>  ${skill1}</p>
<p><b>Skill-2: </b>  ${skill2}</p>
<p><b>Skill-3: </b>  ${skill3}</p>
<p><b>Skill-4: </b>  ${skill4}</p>
<p><b>Skill-5: </b>  ${skill5}</p>
`;
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.log("The resume display elements is missing");
  }
});
