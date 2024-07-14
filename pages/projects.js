import "../pages/projects.css";
import {cleanPage} from "../utils/cleanPage";
import { projects } from "../data/projects";
import {ProjectCard} from "../components/ProjectCard/ProjectCard";
import {Divider} from "../components/Diver/Diver";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <h2>Mis Proyectos y Trabajos</h2>
    ${Divider()}
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};

function targetasTrabajo(project) {
  const targeta = document.createElement('div');
  targeta.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = project.image;
  targeta.appendChild(img);

  const title = document.createElement('h3');
  nombre.textContent = project.title;
  targeta.appendChild(title);

  const description = document.createElement('p');
  description.textContent = project.description;
  targeta.appendChild(description);

  const tech = document.createElement('p');
  tech.textContent = project.tech;
  targeta.appendChild(tech);

  const github = document.createElement('p');
  github.textContent = project.github;
  targeta.appendChild(github);

  const link = document.createElement('p');
  link.textContent = project.link;
  targeta.appendChild(link);
 

  return targeta;
}

