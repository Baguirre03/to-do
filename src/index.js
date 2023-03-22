import eventListeners from "./eventListeners";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import "./style.css";

pageLoad();
createNewProject("default");
eventListeners();
