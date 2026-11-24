// ============================================================
//  YOUR PORTFOLIO CONTENT — this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \".
//   • To remove an optional section, set it to an empty list: []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, check quotes and commas.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Bibi Enayat Zada",
  tagline: "Software Engineering Technology Student | Software Engineer Intern",

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  // For example: photo: "assets/bibi.jpg",
  photo: "assets/Photo.jpeg",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "I build web applications, backend services, and database systems using C#, .NET, SQL, and AWS. I am studying Software Engineering Technology at Conestoga College and gaining hands-on experience at NAVBLUE. I also help students learn and connect through Google Developer Group at Conestoga.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly
    //   "techy"   = dark terminal, one tab per section
    //   "fancy"   = big serif headings and swipeable project cards
    style: "classic",

    // Presets: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // You can also use a hex color like "#ff6b9d".
    accent: "ocean",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "modern",

    // "auto" follows the visitor's device.
    // You can also choose "light" or "dark".
    // The "techy" look is always dark.
    mode: "auto",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email, just write the address, e.g. "you@example.com".
  links: [
    {
      label: "GitHub",
      url: "https://github.com/BibiMurwared",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bibi-enayat-zada-a9707a331",
    },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  skills: [
    "C#",
    "Python",
    "SQL",
    "C",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "ASP.NET Core",
    ".NET",
    "WPF",
    "REST APIs",
    "TCP/IP sockets",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Database Design",
    "AWS",
    "CloudFormation",
    "SNS & SQS",
    "CloudWatch",
    "Automated Testing",
    "Git",
    "GitHub",
    "GitLab CI/CD",
    "Azure DevOps",
    "Postman",
  ],

  // ---------- Projects ----------
  // Link to the GitHub repo. A live demo is optional.
  // tags are optional.
  projects: [
    {
      title: "Fog Lamp Production Tracking System",
      description:
        "Built a C# and SQL Server application for production tracking and workflow monitoring. Designed a relational database with views, stored procedures, and triggers, and added data visualization to support reporting.",
      url: "https://github.com/BibiMurwared/Fog-Lamp-Production-Tracking-System",
      tags: ["C#", "SQL Server", "Database Design"],
    },
    {
      title: "Hospital Management System",
      description:
        "Developed a desktop application using C#, .NET, WPF, and MySQL to manage structured records. Used object-oriented programming, database schema design, CRUD operations, and parameterized SQL, with testing and debugging to improve reliability.",
      url: "https://github.com/BibiMurwared/Hospital-Management-System-",
      tags: ["C#", ".NET", "WPF", "MySQL"],
    },
    {
      title: "Task Tracker Application",
      description:
        "Built a web application using ASP.NET, C#, and JavaScript to create and track tasks. Used REST APIs, validated features, and managed tasks and bugs through Azure DevOps.",
      url: "https://github.com/BibiMurwared/Task-Tracker-Application-",
      tags: ["ASP.NET", "C#", "JavaScript", "REST APIs", "Azure DevOps"],
    },
  ],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College",
      degree: "Advanced Diploma, Software Engineering Technology Co-op",
      years: "September 2024 – April 2028",
      details:
        "GPA: 3.85 / 4.00. Studies include software development, object-oriented programming, relational databases, and structured data.",
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [
    {
      role: "Software Engineer Intern",
      org: "NAVBLUE (Airbus Skywise)",
      years: "May 2026 – Present",
      description:
        "Help build a backend product using C#, ASP.NET Core, PostgreSQL, and AWS. Built a GitLab CI/CD pipeline and wrote unit, functional, integration, and end-to-end tests. Used CloudFormation, SNS, SQS, and CloudWatch for cloud infrastructure and messaging, and updated database routing to send reads to an Amazon RDS read replica and writes to the primary database.",
    },
  ],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [
    {
      role: "Executive Lead",
      org: "Google Developer Group @ Conestoga College",
      years: "February 2026 – Present",
      description:
        "Coordinated logistics, documentation, and team communication for The Growth Summit 2026, with over 200 attendees and 15 startups. Helped more than 30 students with setup, debugging, and troubleshooting during Build with AI workshops.",
    },
  ],
};