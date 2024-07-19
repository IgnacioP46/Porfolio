import "../pages/CV.css";
import { cleanPage } from "../utils/cleanPage";
import { CVInfo } from "../data/projects";

export const CV = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
        <div class="CV">
            <img class="imagen" src="./assets/miFotoCV.png" alt="miFotoCV">
            
            <div class="contacto">
                <h2>Contacto</h2>
                <p>Teléfono: ${CVInfo.contacto.telefono}</p>
                <p>Email: ${CVInfo.contacto.email}</p>
                <p>Dirección: ${CVInfo.contacto.direccion}</p>
                <p>${CVInfo.fechaNacimiento}</p>
            </div>
             <div class="objetivo">
            <h2>Objetivo Profesional</h2>
            <p">${CVInfo.objetivoProfesional}</p>
            </div>
            <div class="formacion">
            <h2>Formación Académica</h2>
            <ul>
                ${CVInfo.formacionAcademica.map(formacion => `<li>${formacion.grado} en ${formacion.institucion} (${formacion.periodo})</li>`).join('')}
            </ul>
            </div>
            <div class="experiencia">
            <h2>Experiencia Profesional</h2>
            <ul>
                ${CVInfo.experienciaProfesional.map(experiencia => `<li>${experiencia.puesto} en ${experiencia.empresa} (${experiencia.periodo})${experiencia.detalles ? ' - ' + experiencia.detalles : ''}</li>`).join('')}
            </ul>
            </div>
            <div class="cursos">
            <h2>Cursos</h2>
            <ul>
                ${CVInfo.cursos.map(curso => `<li>${curso}</li>`).join('')}
            </ul>
            </div>
            <div class="informacion">
            <h2>Información Adicional</h2>
            <ul>
                ${CVInfo.informacionAdicional.map(info => `<li>${info}</li>`).join('')}
            </ul>
            </div>
            <div class="idiomas">
            <h2>Idiomas</h2>
            <ul">
                ${CVInfo.idiomas.map(idioma => `<li>${idioma.idioma} - ${idioma.nivel}</li>`).join('')}
            </ul>
            </div>
            <div class="sitio">
            <h2>Sitio Web</h2>
            <p class="enlace"><a href="${CVInfo.sitioWeb}" target="_blank">${CVInfo.sitioWeb}</a></p>
            </div>
        </div>
    `;
};

CV();
