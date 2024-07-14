import "../pages/Home.css";
import {cleanPage} from "../utils/cleanPage"

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hola, me llamo</p>
    <h1>Ignacio Pérez</h1>
    <p>Soy un entusiasta del desarrollo web con una sólida base en cocina profesional, donde he desarrollado habilidades cruciales como la atención al detalle, la gestión del tiempo y la resolución de problemas bajo presión. Actualmente, estoy enfocando mi carrera en el apasionante mundo del desarrollo web, donde combino mi creatividad con habilidades técnicas para crear soluciones web innovadoras y funcionales.</p>

    <p>Mi viaje en el desarrollo web comenzó con cursos y proyectos personales que me han permitido adquirir conocimientos en HTML, CSS, JavaScript, y otras tecnologías web. Estoy continuamente aprendiendo y mejorando mis habilidades para mantenerme al día con las últimas tendencias y prácticas en la industria.
    </p>

    <p>En este portafolio, encontrarás una selección de mis proyectos que demuestran mi capacidad para transformar ideas en productos web tangibles y efectivos. Cada proyecto representa un paso en mi camino hacia la excelencia en el desarrollo web, y estoy emocionado por la oportunidad de llevar mi carrera al siguiente nivel trabajando en un entorno profesional desafiante y colaborativo.</p>

    <p>Si estás buscando un desarrollador web dedicado y apasionado, que esté listo para aportar su creatividad y habilidades técnicas a tu equipo, ¡me encantaría hablar contigo!</p>

    <a href="mailto:ignacio9046@hotmail.com">contactame por correo →</a>
    </section>`;
};