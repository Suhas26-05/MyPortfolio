// Edit this file only to add/update projects and internships.
window.PORTFOLIO_DATA = {
  aboutSkills: [
    { type: "icon", className: "fa-brands fa-python fa-2xl" },
    { type: "icon", className: "fa-brands fa-java fa-2xl" },
    { type: "image", src: "images/HTML.png", alt: "HTML" },
    { type: "image", src: "images/CSS3.png", alt: "CSS" },
    { type: "icon", className: "fa-brands fa-js fa-2xl" },
    { type: "image", src: "images/MySQL.png", alt: "MySQL" },
    { type: "image", src: "images/C.png", alt: "C" },
    {
      type: "icon",
      className: "fa-brands fa-git-alt fa-2xl",
      style: "color: #ed2012",
    },
    { type: "icon", className: "fa-brands fa-github fa-2xl" },
    { type: "image", src: "images/django.jpg", alt: "Django" },
    { type: "image", src: "images/bootstrap.png", alt: "Bootstrap" },
  ],
  projects: [
    {
      title: "Simple Calculator",
      tech: "Python, GUI",
      brief:
        "Responsive arithmetic calculator with a clean and approachable interface.",
      desc: "A responsive calculator that supports addition, subtraction, multiplication, and division with clean UI.",
      fullDesc:
        "This calculator project focuses on clean interaction flow, responsive layout behavior, and reliable arithmetic operations. It was built to deliver a smooth user experience across screen sizes, with clear visual hierarchy and quick input feedback for everyday calculations.",
      github: "https://github.com/Suhas26-05/simple-calculator",
      live: "#",
      img: "images/Simple Calculator.jpg",
    },
    {
      title: "Algorithm Visualizer",
      tech: "JavaScript, DSA",
      brief:
        "Step-by-step visualization of core sorting and searching algorithms.",
      desc: "Interactive visualizer that shows sorting and searching algorithms step-by-step.",
      fullDesc:
        "The visualizer demonstrates how core algorithms progress internally by animating comparisons, swaps, and search movement in real time. It is designed to make DSA concepts easier to understand with clear controls, pacing, and visual state transitions.",
      github: "https://github.com/Suhas26-05/Algorithm-Visualizer",
      live: "#",
      img: "images/AlgorithmVisualizer.png",
    },
    {
      title: "To-Do App",
      tech: "React, Local Storage",
      brief:
        "Lightweight task manager with persistent storage and quick editing.",
      desc: "Task manager with add, edit, delete features and persistent storage.",
      fullDesc:
        "This task manager provides a focused productivity workflow with create, update, and delete operations backed by local persistence. It emphasizes simplicity, predictable state updates, and a minimal UI that keeps users focused on task execution.",
      github: "https://github.com/Suhas26-05/To-Do-List",
      live: "#",
      img: "images/to-do.avif",
    },
    {
      title: "College Management System",
      tech: "Django, MySQL, HTML, CSS",
      brief:
        "Multi-role ERP platform for academic operations and communication.",
      desc: "Complete college ERP with HOD, Staff, Student and Parent portals.",
      fullDesc:
        "The system models a full academic management workflow through role-based portals for HOD, staff, students, and parents. It centralizes operations such as records, communication, and coordination, improving transparency and reducing manual administrative work.",
      github: "https://github.com/Suhas26-05/Campconnect",
      live: "#",
      img: "images/college-management.jpg",
    },
    {
      title: "Banking App",
      tech: "Spring Boot, MySQL",
      brief:
        "Backend-focused banking workflow with transactions and history tracking.",
      desc: "Banking system with account creation, transactions, and history.",
      fullDesc:
        "This banking application handles core financial operations including account onboarding, transaction execution, and history tracking. The project prioritizes backend clarity, reliable request processing, and maintainable service-layer structure for scalable feature growth.",
      github: "https://github.com/Suhas26-05/Banking-App",
      live: "#",
      img: "images/Banking.png",
    },
    {
      title: "Weather App",
      tech: "API, Chart.js",
      brief:
        "Real-time weather dashboard with API integration and chart visuals.",
      desc: "Weather dashboard using OpenWeather API with real-time charts.",
      fullDesc:
        "The weather app integrates external API data and transforms it into clear visual summaries using chart components and structured metrics. It provides a real-time snapshot view while emphasizing readable data presentation and responsive dashboard behavior.",
      github: "https://github.com/Suhas26-05/-VarshamVibes",
      live: "https://suhas26-05.github.io/VarshamVibes/",
      img: "images/Weather_App.jpg",
    },
  ],
  internships: [
    {
      featured: true,
      period: "Feb 2024 - Apr 2024",
      title: "Full Stack Web Developer Intern",
      company: "Edunet Foundation x AICTE",
      summary:
        "During my Full Stack Web Development internship at Ernst & Young through Edunet Foundation and AICTE, I independently designed and developed a complete Bus Reservation System using Python (Django), HTML, CSS, and MySQL. I implemented key features such as user authentication, dynamic route selection, real-time seat availability, and booking confirmation. This internship helped me strengthen my backend development skills, understand scalable application architecture, and gain hands-on experience in building real-world web applications.",
      tags: ["Python", "Django", "MySQL", "Full-Stack"],
    },
    {
      featured: false,
      period: "2024",
      title: "Data Visualization Intern",
      company: "Deloitte",
      summary:
        "As a Data Visualization Intern at Deloitte, I worked on creating interactive dashboards and analytical reports using Tableau. I analyzed datasets to support data-driven decision-making and improved my ability to present business insights through effective visualizations.",
      tags: ["Tableau", "Data Visualization", "Dashboards"],
    },
    {
      featured: false,
      period: "2026",
      title: "Software Development Intern",
      company: "Prodigy InfoTech",
      summary:
        "During my Software Development Internship at Prodigy InfoTech, I completed a structured, project-based program focused on developing GUI-based applications using Python. I built four applications as part of weekly deliverables, implemented UI components and input validation, and followed a milestone-based workflow. Through consistent performance and dedication, I received a Letter of Recommendation.",
      tags: ["Python", "GUI Development", "Tkinter", "Problem Solving"],
    },

    {
      featured: true,
      period: "Oct 2024 - Nov 2024",
      title: "Industrial IoT Intern",
      company: "Siemens Centre of Excellence, NIT Warangal",
      summary:
        "As an Industrial IoT Intern at Siemens Centre of Excellence, NIT Warangal, I worked on real-time embedded systems and IoT-based automation projects using Arduino Uno and Embedded C. I integrated multiple sensors including IR sensors, servo motors, hydrometers, and load cells, and developed control algorithms for sensor fusion. I also designed a modular fuel detection system with a focus on reliability and automation. This internship enhanced my understanding of embedded programming, hardware-software integration, and real-time system design",
      tags: ["Embedded C", "Arduino Uno", "Sensors", "Automation"],
    },
    {
      featured: false,
      period: "May 2025 - Jun 2025",
      title: "AI Azure Intern",
      company: "Microsoft (via Edunet Foundation & AICTE)",
      summary:
        "I completed a 4-week AI Azure internship under a Microsoft initiative, implemented by Edunet Foundation in collaboration with AICTE. During this internship, I learned the fundamentals of Artificial Intelligence and Machine Learning, including data handling and model development. I worked on a loan prediction project where I applied machine learning techniques to build a predictive model. This internship strengthened my understanding of AI/ML workflows and real-world applications.",
      tags: ["AI", "Machine Learning", "Python", "Loan Prediction"],
    },
  ],
};
