import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import { eventListeners } from "./FormControllers";
import displayAllTasks from "./displayAllTasks";
import displayProjects from "./displayProjects";

pageLoad();
createNewProject("default");
createNewProject("proj2");
createNewToDo("first", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("second", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("third", "123", "1232", "1", "213", "123", "22", "bleh");
createNewToDo("fourt", "123", "1232", "1", "213", "123", "22", "proj2");
displayAllTasks("0");
displayProjects();
eventListeners();
