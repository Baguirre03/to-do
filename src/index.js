import "./style.css";
import eventListeners from "./eventListeners";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import { displayTasks } from "./DOM-controller";

pageLoad();
createNewProject("default");
createNewToDo("bawd", "123", "1232", "1", "213", "123", "22", "proj2");
displayTasks();
eventListeners();
