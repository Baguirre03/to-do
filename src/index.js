import displayToDos from "./DOM-controller";
import eventListeners from "./eventListeners";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import "./style.css";
import { allToDo, createNewToDo } from "./toDo";

pageLoad();
createNewProject("default");
createNewToDo("bawd", "123", "1232", "1", "213", "123", "22", "proj2");
console.log(allToDo);
displayToDos();
eventListeners();
