let $ = document;
let menuBtn = $.querySelector(".menu-btn");
let menu = $.querySelector(".nav-links");
let menuLinks = $.querySelectorAll(".nav-links li a");
let homeSection = $.querySelector(".home");
let btn = $.getElementById("button");
let nav = $.getElementById("navBar");
let social = $.getElementById("social");
let educationDiv = $.getElementById("education");
let skillsDiv = $.getElementById("skills");
const portfolio = $.getElementById("portfolio");

const socialData = [
  {
    link: "https://github.com/GabrielCastro1221",
    title: "Acceso directo a GitHUb",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.linkedin.com/in/gabriel-castro-ramirez-937142332/",
    title: "Acceso directo a Linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://api.whatsapp.com/send/?phone=3146381395",
    title: "Contacto via WhatsApp",
    icon: "fa-brands fa-whatsapp",
  },
];

const education = [
  {
    id: "edu-1",
    startingDate: "sept 2023",
    endingDate: "",
    school: "Instituto Argentino de Computacion (IAC)",
    degree: "Desarrollo web",
    desc: "El curso de desarrollo web cubre HTML, CSS y JavaScript, enseña los fundamentos de cómo construir sitios web interactivos y estilizados. Al final del curso se debe ser capaz de crear sitios web completos que no solo tengan una estructura y estilo atractivo, sino que también interactúen con el usuario de manera dinámica.",
  },
  {
    id: "edu-2",
    startingDate: "sept 2023",
    endingDate: "",
    school: "CoderHouse",
    degree: "Carrera Desarrollo FrontEnd React Js",
    desc: "La carrera de Frontend con React.js se enfoca en el desarrollo de interfaces de usuario (UI) para aplicaciones web modernas utilizando tecnologías del lado del cliente.",
  },
  {
    id: "edu-3",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Desarrollo Full Stack",
    desc: "La carrera de Desarrollo Full Stack abarca tanto el desarrollo frontend (del lado del cliente) como el backend (del lado del servidor), lo que significa que como desarrollador full stack puedes trabajar en todas las capas de una aplicación web.",
  },
  {
    id: "edu-4",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "Carrera Data Science",
    desc: "La carrera en Data Science (Ciencia de Datos) sirve para trabajar con grandes volúmenes de datos, utilizando herramientas y técnicas estadísticas, matemáticas y computacionales para extraer conocimiento y obtener insights útiles para la toma de decisiones.",
  },
  {
    id: "edu-5",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    school: "CoderHouse",
    degree: "SQL",
    desc: "El curso de SQL (Structured Query Language) está diseñado para saber cómo interactuar con bases de datos relacionales.",
  },
];

const skills = [
  {
    id: "exp-1",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Desarrollo Web",
    skills:
      "El desarrollo web abarca una amplia gama de habilidades que permiten crear y mantener aplicaciones y sitios web: HTML, CSS, JavaScript, Bootstrap, Tailwind, Fetch Api, Git, GitHub, Sass",
  },
  {
    id: "exp-2",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Desarrollo FrontEnd React Js",
    skills:
      "En la carrera de desarrollo frontend se estudiaron una amplia gama de habilidades que permiten crear y mantener aplicaciones y sitios web: JSX, Componentes, Props, States, Hooks, React Router, Context, Firebase",
  },
  {
    id: "exp-3",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Desarrollo Full Stack",
    skills:
      "Estas habilidades están orientadas a la creación de la lógica y funcionalidad de una aplicación web en el servidor: Node Js, Express, RestFul Api, Autenticacion y autorizacion(JWT, OAuth), MongoDB, cookies, session storage, patrones de diseño, patrones de arquitectura.",
  },
  {
    id: "exp-4",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "Carrera Data Science",
    skills:
      "Estas habilidades están orientadas a la creación de modelos de aprendizaje automatico:  Matematica, estadistica, Python, Pandas, Numpy, MatplotLib, Sklearn, Data Wrangling(Limpieza de datos), EDA(analisis exploratorio de datos), Machine Learning(Regresion lineal y logistica, Arboles de decision y bosques aleatorios, Maquinas de soporte vectorial, K-NN), Deep Learning(Redes Neuronales(ANN), Redes neuronales convolucionales(CNN), Redes neuronales recurrentes(RNN)), Procesamiento de lenguaje natural(NLP).",
  },
  {
    id: "exp-5",
    startingDate: "sept 2023",
    endingDate: "sept 2024",
    degree: "SQL",
    skills:
      "El esquema de habilidades enseñadas en el curso de SQL es el siguiente: Consultas, subconsultas, Operadores y funciones, Consultas avanzadas, Manipulacion de datos(DML), Definicion de datos (DDL), Funciones y procedimientos almacenados, Vistas, Trigger, Backups",
  },
];

const projects = [
  {
    _id: "project-01",
    img: "../assets/images/cardiopatia.jpg",
    title: "Simulacion Cardiopatia",
    description:
      "Este proyecto consiste en un modelo de predicción de enfermedades cardíacas desarrollado con Python en Google Colab. El objetivo del modelo es predecir la probabilidad de que una persona tenga una enfermedad cardíaca basándose en diversas métricas de salud.",
    repository_link:
      "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook.git",
    deploy_link:
      "https://github.com/GabrielCastro1221/Simulacion_Cardiopatia_jupyter_notebook/blob/main/simulacion_cardiopatia.ipynb",
    category: "python",
  },
  {
    _id: "project-02",
    img: "../assets/images/icalculadora.jpg",
    title: "Calculadora Cientifica",
    description:
      "Calculadora cientifica con botones que permiten realizar varias operaciones matemáticas, desde simples sumas y restas hasta funciones más complejas como factoriales y potencias. Además, maneja ángulos en radianes o grados y tiene funciones trigonométricas.",
    repository_link:
      "https://github.com/GabrielCastro1221/Calculadora_cientifica.git",
    deploy_link: "https://calculadora-cientifica.onrender.com/",
    category: "frontend",
  },
  {
    _id: "project-03",
    img: "../assets/images/nbai.jpeg",
    title: "Simulacion Juegos NBA",
    description:
      "Este proyecto consiste en un modelo de simulación de partidos entre dos equipos de la NBA, desarrollado con técnicas de Machine Learning. El objetivo del modelo es predecir el resultado de un partido basándose en diversas métricas y estadísticas de los equipos.",
    repository_link:
      "https://github.com/GabrielCastro1221/Simulacion_Partidos_NBA_jupyter_notebook.git",
    deploy_link:
      "https://github.com/GabrielCastro1221/Simulacion_Partidos_NBA_jupyter_notebook/blob/main/ProyectoDS_GabrielCastroRamirez.ipynb",
    category: "python",
  },
  {
    _id: "project-05",
    img: "../assets/images/fakeNews.jpg",
    title: "Detector Fake News",
    description:
      "Este proyecto consiste en un modelo de detección de noticias falsas desarrollado utilizando una red neuronal LSTM (Long Short-Term Memory). El objetivo del modelo es clasificar noticias como verdaderas o falsas basándose en su contenido textual.",
    repository_link:
      "https://colab.research.google.com/drive/1N81w_WpW2_Qubyxcl6lMBIl1Pg3bjBnZ",
    deploy_link:
      "https://colab.research.google.com/drive/1N81w_WpW2_Qubyxcl6lMBIl1Pg3bjBnZ",
    category: "python",
  },
  {
    _id: "project-06",
    img: "../assets/images/chati.jpg",
    title: "Chat comunitario",
    description:
      "Este proyecto consiste en un chat comunitario en tiempo real desarrollado con Node.js, Express y Socket.io.El objetivo del proyecto es permitir a los usuarios comunicarse entre sí de manera instantánea en un entorno seguro y accesible.",
    repository_link:
      "https://github.com/GabrielCastro1221/Chat_mongoDB_socket.io.git",
    deploy_link: "https://comunitary-chat.onrender.com/",
    category: "backend",
  },
  {
    _id: "project-07",
    img: "../assets/images/ecommerce.jpg",
    title: "Ecommerce Nodejs - MongoDB - Handlebars",
    description:
      "Este proyecto consiste en una plataforma de ecommerce especializada en la venta de productos para skaters, desarrollada con Node.js, MongoDB y Handlebars. El objetivo del proyecto es proporcionar una experiencia de compra en línea fluida y personalizada para los entusiastas del skateboarding.",
    repository_link:
      "https://github.com/GabrielCastro1221/Ecommerce-nodeJs-MongoDB-Handlebars.git",
    deploy_link: "https://ecommerce-nodejs-mongodb-handlebars.onrender.com/",
    category: "backend",
  },
  {
    _id: "project-08",
    img: "../assets/images/trainners.jpg",
    title: "Plataforma de entrenadores",
    description:
      "La plataforma de entrenadores es tu destino integral para todo lo relacionado con el fitness y el deporte. Nuestra plataforma ofrece una experiencia completa y personalizada para usuarios y entrenadores, con múltiples funcionalidades diseñadas para satisfacer todas tus necesidades.",
    repository_link: "https://github.com/GabrielCastro1221/trainners.git",
    deploy_link: "https://trainners.onrender.com/",
    category: "backend",
  },
  {
    _id: "project-09",
    img: "../assets/images/booking.png",
    title: "Booking Medico - Health Point",
    description:
      "HealthPoint es una plataforma de agendamiento de citas médicas que ofrece paneles y perfiles autoadministrables. Permite a los usuarios agendar citas tanto online como presenciales, y cuenta con funcionalidad de video consulta. Desarrollada con MongoDB, Node.jsy Handlebars.",
    repository_link: "https://github.com/GabrielCastro1221/bookingMedico.git",
    deploy_link: "https://healthpoint-manizales.onrender.com/",
    category: "backend",
  },
];

const portfolioContainer = document.getElementById("portfolio");
const filterButtons = document.querySelectorAll(".btn-card");

const displayProjects = (projects) => {
  portfolioContainer.innerHTML = "";
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.classList.add("project-item");
    projectElement.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${project.img}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title text-center sub border-bottom">${project.title}</h5>
          <div class="modal-category d-flex align-items-center justify-content-center mb-2">
            <span class="badge bg-warning-subtle text-success border border-success text-capitalize">
              ${project.category}
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-2">
            <button class="btn-card" data-bs-toggle="modal" data-bs-target="#modal-${project._id}">
              Detalle del proyecto
            </button>
          </div>
        </div>
      </div>
      <!-- Modal para mostrar más detalles del proyecto -->
      <div class="modal fade" id="modal-${project._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title sub">${project.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body row">
              <div class="col-md-6">
                <img src="${project.img}" alt="${project.title}" class="img-fluid rounded shadow-sm" />
              </div>
              <div class="col-md-6">
                <div class="modal-category mb-2">
                  <span class="badge bg-warning-subtle text-success border border-success text-capitalize">
                    ${project.category}
                  </span>
                </div>
                <p>${project.description}</p>
              </div>
            </div>
            <div class="modal-footer">
              <a href="${project.repository_link}" target="_blank" class="btn-card">Código fuente</a>
              <a href="${project.deploy_link}" target="_blank" class="btn-card">Ver Página Web</a>
            </div>
          </div>
        </div>
      </div>
    `;
    portfolioContainer.appendChild(projectElement);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    const filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);
    displayProjects(filteredProjects);
  });
});

displayProjects(projects);

menuBtn.addEventListener("click", activeClass);
function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.add("active");
  }
}

function actualizarEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  $.getElementById("edad").textContent = edad + " años";
}
actualizarEdad("1988-09-14");

socialData.forEach((item) => {
  let a = $.createElement("a");
  a.href = item.link;
  a.title = item.title;
  a.target = "_blank";
  let i = $.createElement("i");
  i.className = item.icon;
  a.appendChild(i);
  social.appendChild(a);
});

let educationContentHTML = "";
education.forEach((edu) => {
  educationContentHTML += `
    <div class="box-resume" id="${edu.id}">
      <h3 class="fw-bold">${edu.degree}</h3>
      <p><strong>Institución:</strong> ${edu.school}</p>
      <p><strong>Fechas:</strong> ${edu.startingDate} - ${
    edu.endingDate || "Actualidad"
  }</p>
      <p>${edu.desc}</p>
    </div>
  `;
});
educationDiv.innerHTML = educationContentHTML;

let skillsContentHTML = "";
skills.forEach((skill) => {
  skillsContentHTML += `
    <div class="box-resume" id="${skill.id}">
      <h3 class="fw-bold">${skill.degree}</h3>
      <p><strong>Fechas:</strong> ${skill.startingDate} - ${skill.endingDate}</p>
      <p><strong>Habilidades:</strong> ${skill.skills}</p>
    </div>
  `;
});
skillsDiv.innerHTML = skillsContentHTML;

$.getElementById("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  const btnC = $.getElementById("button-contact");
  emailjs.init("oAK3ECG81WXECBdp8");
  btnC.value = "Enviando Mensaje...";

  try {
    const serviceID = "service_ukdnwle";
    const templateID = "template_5gyemyk";
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btnC.value = "Enviar Email";
        Toastify({
          text: "Mensaje enviado con éxito!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#28a745",
          className: "toast-success",
        }).showToast();
      },
      (err) => {
        btnC.value = "Enviar Email";
        Toastify({
          text: "Error al enviar el mensaje. Inténtalo de nuevo.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#dc3545",
          className: "toast-error",
        }).showToast();
        console.error("Error al enviar el mensaje:", err);
      }
    );
  } catch (error) {
    btnC.value = "Enviar Email";
    Toastify({
      text: "Error al enviar el mensaje. Inténtalo más tarde.",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#dc3545",
      className: "toast-error",
    }).showToast();
    console.error("Error:", error);
  }
});
