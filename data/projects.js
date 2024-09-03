export const projects = [
  {
    title: "Web de Componentes JavaScript",
    description: "aqui vemos otra forma mas de como ordenar colocar y usar los distintos componentes",
    image: "./assets/proyectoComponentes.png",
    tech: ["HTML5", "CSS3", "JavaScript", "VITE",],
    github: "https://github.com/IgnacioP46/Proyecto-Web-Componente.git",
    link: "https://cvignacioperez.netlify.app/",
    tipo: "Proyecto"
  },
  {
    title: "Web Asincrona",
    description: "aqui vemos el uso de las llamadas a apis",
    image: "../assets/proyectoWebAsincrona.png",
    tech: ["HTML5", "CSS3", "JavaScript", "VITE", "unsplash"],
    github: "https://github.com/IgnacioP46/Proyecto-Web-Asincrona.git",
    link: "https://webasincrona.netlify.app/",
    tipo: "Proyecto"
  },
  {
    title: "Porfolio",
    description: "montamos una SPA con nuestros trabajos y CV",
    image: "./assets/proyectoPorfolio.png",
    tech: ["HTML5", "CSS3", "JavaScript", "VITE"],
    github: "https://github.com/IgnacioP46/Porfolio.git",
    link: "https://ignacioperez.netlify.app",
    tipo: "Proyecto"
  },
  {
    title: "Color Flipper",
    description: "primera pagina usando VITE",
    image: "./assets/proyectoColorFlipper.png",
    tech: ["HTML5", "CSS3", "JavaScript", "VITE"],
    github: "https://github.com/IgnacioP46/VITE-ColorFlipper.git",
    link: "http://127.0.0.1:5500/VITE/COLOR%20FLIPPER/color-flipper/index.html/",
    tipo: "proyecto"
  },
  {
    title: "proyecto DOM",
    description: "Aqui vemos la misma pagina que antes, pero aqui esta montada con java unido al HTML y CSS",
    image: "./assets/proyetoDOM.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/IgnacioP46/Pr-ctica-DOM.git",
    link: "https://discosrizos.netlify.app/",
    tipo: "proyecto"
  },
];
  

 
export const CVInfo = {
  nombre: "Ignacio Pérez",
  contacto: {
    telefono: "662 168 668",
    email: "ignacioperez9946@gmail.com",
    direccion: "Madrid"
  },
  objetivoProfesional: "Profesional con más de 10 años de experiencia en el ámbito culinario, incluyendo 6 años como jefe de cocina y 1 año como chef ejecutivo. Actualmente, estoy en proceso de transición hacia el desarrollo web, área en la que estoy adquiriendo nuevas habilidades técnicas. Mi objetivo es combinar mi experiencia en liderazgo, gestión de equipos, ambición y resolución de problemas con mis conocimientos en tecnología para aportar soluciones creativas y eficientes en el desarrollo de proyectos web.",
  idiomas: [
    { idioma: "Castellano", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Nivel bajo" }
  ],
  formacionAcademica: [
    { grado: "Master en Desarrollo Web", institucion: "The Power", periodo: "Mayo 2024 - actual" },
    { grado: "Grado superior en DAW", institucion: "The Power", periodo: "septiembre 2024 - actual" },
    { grado: "Grado superior en dirección de cocina", institucion: "I.E.S. María de Zayas y Sotomayor", periodo: "Septiembre 2012 - Junio 2015" },
    { grado: "Grado medio en cocina", institucion: "I.E.S. Santa María Del Castillo", periodo: "Septiembre 2009 - Junio 2011" }

  ],
  experienciaProfesional: [
    { puesto: "Jefe de cocina", empresa: "Compass Group Eurest - Colegio Highlands School El Encinar", periodo: "Septiembre 2023 - Actual" },
    { puesto: "Jefe de cocina - Chef Ejecutivo", empresa: "Compass Group Eurest", periodo: "Marzo 2022 - Julio 2023", detalles: "Equipo de aperturas" },
    { puesto: "Segundo de cocina", empresa: "Salas VIP de AENA - Viandas Selección", periodo: "Septiembre 2021 - Marzo 2022", detalles: "Con el cocinero Rodrigo de la Calle, cocinero con estrella Michelin" },
    { puesto: "Cocinero", empresa: "SerUnion", periodo: "Abril 2021 - Agosto 2021" },
    { puesto: "Jefe de cocina", empresa: "Cyrclo", periodo: "Octubre 2020 - Abril 2021", detalles: "donde ayude a iniciar un proyecto nuevo de un restaurante de cocina  abaja temperatura" },
    { puesto: "Segundo de cocina", empresa: "Salas VIP de AENA - Building Big Bussines", periodo: "Septiembre 2018 - Marzo 2020", detalles: "Con el cocinero Andreu Genestra, cocinero con estrella Michelin" },
    { puesto: "Ayudante de cocina", empresa: "Salas VIP de AENA - Viandas Selección", periodo: "Octubre 2017 - Septiembre 2018", detalles: "Con el cocinero Andreu Genestra, cocinero con estrella Michelin" },
    { puesto: "Segundo de cocina", empresa: "Dr. Crocket gourmet", periodo: "Julio 2016 - Septiembre 2017" },
    { puesto: "Cocinero", empresa: "Restaurante voltereta", periodo: "Diciembre 2015 - Junio 2016", detalles:"restaurante gastronomico que busca la estrella Michelin" },
    { puesto: "Ayudante de cocina", empresa: "Hotel Wellington", periodo: "Junio 2015 - Noviembre 2015" },
    { puesto: "Alumno en prácticas", empresa: "Hotel Wellington", periodo: "Marzo 2015 - Junio 2015" },
    { puesto: "Alumno en prácticas", empresa: "Hotel AC Cuzco", periodo: "Marzo 2011 - Junio 2011" },
  ],
  cursos: [
    "Figma",
    "Título de manipulador de alimentos",
    "Curso de cata de aceites"
  ],
  skills: [
    "HTML5",
    "CSS",
    "JavaScript",
    "VITE"
  ],
  informacionAdicional: [
    "Carné de conducir B1 y A",
    "Vehículo propio",
    "tSpoonLab: nivel avanzado",
    "Microsoft Office nivel avanzado",
    "Disponibilidad total"
  ],
  sitioWeb: [
    { linkedin: "https://www.linkedin.com/in/ignacio-perez-alvarez/" },
    { Portfolio: "https://ignacioperez.netlify.app" }
  ],

  foto: "../assets/miFotoCV.png"
};

export default CVInfo;
