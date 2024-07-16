import "../Footer/Footer.css"
import { Button } from "../Button/Button";

export const Footer = () => `
  <footer>
    <h2>Contacto</h2>
    <div>
      ${Button("../assets/logo llamada.png", "662168668", "tel:662168668")}
      ${Button("../assets/logo GitHub.jfif", "GitHub", "https://github.com/dashboard")}
      ${Button("../public/assets/logo Linkedin.jfif", "LinkedIn", "https://www.linkedin.com/in/ignacio-p%C3%A9rez-alvarez-77b10111b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
    </div>
  </footer>
`;