import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import { eventListeners } from "./FormControllers";
import { displayProjects } from "./displayProjects";
import { displayTasks } from "./displayAllTasks";

pageLoad();
createNewProject("default");
createNewProject("proj2");
createNewToDo("first", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("second", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("third", "123", "1232", "1", "213", "123", "22", "bleh");
createNewToDo("fourt", "123", "1232", "1", "213", "123", "22", "BLEH");
displayTasks("0");
displayProjects();
eventListeners();
