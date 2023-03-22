import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import { displayTasks, eventListeners, updateDelete } from "./DOM-controller";

pageLoad();
createNewProject("default");
createNewToDo("bawd", "123", "1232", "1", "213", "123", "22", "proj2");
displayTasks();
eventListeners();
updateDelete();
