import "./Navbar.css";

document.body.className = localStorage.getItem("theme") || "";

export const cambioTema = () => {
  const cambioColor = document.querySelector("#cambioColor");
  cambioColor.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.className === "light"){
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "")
    }
    cambioTexto();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <a href="#" id="CVlink">CV</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;
