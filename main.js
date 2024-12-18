import './style.css'
import { cambioTema } from './components/Navbar/Navbar';
import {linkPage} from './utils/linkPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from "./components/Footer/Footer";
import {Home} from './pages/Home';
import { Projects } from './pages/projects';
import { CV } from './pages/CV';
import { Divider } from './components/Diver/Diver';




const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#CVlink", CV);


Home();

changeTheme();


footer.insertAdjacentHTML("beforebegin", Divider());
