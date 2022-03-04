const containerJobs = document.querySelector("#container-jobs");

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const renderJobs = () => {
  jobs.map((job) => {
    const html = `
    <section class="card">
        <div class="column-1">
          <img src=${job.logo} alt="" />
        </div>
        <div class="column-2">
          <div>
            <span class="title">${job.company}&nbsp;&nbsp;</span>
            ${
              job.new
                ? `<span class="bagde-primary">&nbsp;&nbsp;new!&nbsp;&nbsp;</span>`
                : ``
            }

            ${
              job.featured
                ? `<span class="bagde-secondary">&nbsp;&nbsp;featured&nbsp;&nbsp;</span>`
                : ``
            }
          </div>
          <div>
            <h4>${job.position}</h4>
          </div>
          <div>
            <span class="text-dark"> ${job.postedAt} . ${job.contract} . ${
      job.location
    }</span>
          </div>
        </div>
        <div class="column-3">
          ${job.languages.map(
            (language) => `<span class="skill">${language}</span>&nbsp;&nbsp;`
          )}
          ${job.tools.map(
            (tool) => `<span class="skill">${tool}</span>&nbsp;&nbsp;`
          )}
        </div>
      </section>
    `;

    // la funcion replace y replaceAll sirve para poder reemplazar
    // como parametro recibo el elemento que va a buscar y como segundo parametro
    // por el elemento que lo va a reemplzar
    containerJobs.innerHTML += html.replaceAll(",", "");
  });
};

const selectLanguage = document.querySelector("#select-languages");
// recuerden para los selects debemos utilizar el evento onchange
selectLanguage.onchange = function (event) {
  console.log(event.target.value);
};

renderJobs();
