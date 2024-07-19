import "../Footer/Footer.css"
import { Button } from "../Button/Button";

export const Footer = () => `
  <footer>
    <h2>Contacto</h2>
    <div>
      ${Button("../assets/logo llamada.png", "662168668", "tel:662168668")}
      ${Button("./assets/logo GitHub.png", "GitHub", "https://github.com/dashboard")}
      ${Button("./assets/logo Linkedin.png", "LinkedIn", "https://www.linkedin.com/in/ignacio-perez-alvarez/")}
    </div>
  </footer>
`;
