import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { eventListeners } from "./FormControllers";
import { clearAndDisplayProjects } from "./displayProjects";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { checkStorage } from "./storage";
import { createNewToDo } from "./toDo";

pageLoad();
createNewProject("default");
createNewProject("school");
createNewProject("personal");
checkStorage();
clearAndDisplayProjects();
eventListeners();
