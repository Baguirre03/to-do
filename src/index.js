import "./style.css";
import pageLoad from "./pageLoad";
import { eventListeners } from "./FormControllers";
import { clearAndDisplayProjects } from "./displayProjects";
import { checkProjStorage, checkStorage } from "./storage";

pageLoad();
checkProjStorage();
checkStorage();
clearAndDisplayProjects();
eventListeners();
