import { resumeProps } from "@/interface/IResume";

const summary: string = `I joined Indra, being part of the URA project team (Vivo), the development of URA took place through the Genesys platform and development of APIs using JSP/Java through Servlets and Client Rest.

During this period I also participated in the development/maintenance of PROC (Oracle/SQL Server), Web Service (Rest/SOAP), implementation in Glassfish in Linux environments.

Later, I was hired by A5 Solutions, working as a full-stack developer on Web projects. In the back-end we use Java Spring Boot and the front-end is more diverse, containing vanilla projects (HTML/CSS/JS) and NodeJs projects (Angular /React).`;

export const myResume: resumeProps = {
  name: "André Carlos M. de Oliveira",
  objective: "Software Engineer",
  summary: summary,
  language: [
    {
      name: "Portuguese",
      proficiency: "Native",
    },
    {
      name: "English",
      proficiency: "Intermediary",
    },
  ],
  academic: [
    {
      degree: "High-school",
      organization: "E.E. Jacques klein",
      conclusion: "2015",
    },
    {
      degree: "Bachelor's degree",
      organization: "FMU",
      conclusion: "2022",
      link: "https://drive.google.com/file/d/1LD96Irt6iZDLb8bjYXC2cUopEZM3Teya/view?usp=sharing",
    },
  ],
  experience: [
    {
      company: "A5 Solutions",
      position: "Full-stack Developer",
      period: "October 2020 – December 2023",
      keyResponsability: [
        "Develop WebServices with Java Spring-boot",
        "Develop vanila projects - HTML / CSS / JS",
        "Develop front with NodeJs using Typescript",
        "Use Frameworks Web applications (Angular / React)",
        "Develop Middleware with NodeJs using Express",
        "Build applications Cloud Native with Docker",
        "Develop Procedure / Advanced Query's with Postgres",
      ],
    },
    {
      company: "Indra Company",
      position: "Junior Developer",
      period: "April 2018 – January 2020",
      keyResponsability: [
        "Develop API's for consume in the URA",
        "WebServices - REST / SOAP",
        "PL-SQL (OracleDB / SQL Server)",
        "Develop IVR with Genesys Compose",
        "Web Logic (EAR / WAR / JAR)",
        "Release on Linux environments",
      ],
    },
    {
      company: "Pinturas FLorença",
      position: "Office Assistant",
      period: "May 2014 – June 2017",
      keyResponsability: [
        "MsOffice",
        "GFIP / Payroll",
        "Manage Excel spreadsheets using VBA",
      ],
    },
  ],
  skills: [
    {
      category: "Programming language & Other",
      skills: [
        "Java",
        "Python",
        "VBA",
        "C / C++",
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Frameworks",
      skills: ["Spring Boot", "Django", "React", "Angular", "NextJs"],
    },
    {
      category: "Package Manager",
      skills: ["Maven (mvn)", "Node Package Manager (npm)", "Python Package Index (pip)"],
    },
    {
      category: "Web-Container / Web-Servers",
      skills: ["Tomcat", "Glassfish", "Web Logic", "Nginx", "Apache", "IIS"],
    },
    {
      category: "Database",
      skills: ["Postgres", "MySQL", "SQL Server", "Oracle DB", "Firebase"],
    },
    {
      category: "Code versioning",
      skills: ["GIT", "SVN"],
    },
    {
      category: "Test",
      skills: ["JUnit", "Mockito", "testcontainers", "Jest"],
    },
    {
      category: "DevOps Tools",
      skills: ["Docker", "Jenkins"],
    },
  ],
  badges: [
    {
      name: "AWS",
      link: "https://www.credly.com/users/andre-marques.abbbe29b/badges",
    },
    {
      name: "GCP",
      link: "https://www.cloudskillsboost.google/public_profiles/d24adbba-0315-45a7-bea1-9a72a94d8760",
    },
  ],
};
