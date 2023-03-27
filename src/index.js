import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { eventListeners } from "./FormControllers";
import { clearAndDisplayProjects } from "./displayProjects";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { checkStorage, storeTasks } from "./storage";

pageLoad();
createNewProject("default");
createNewProject("school");
createNewProject("personal");
checkStorage();
sortAndDisplayTasks("0");
clearAndDisplayProjects();
eventListeners();
