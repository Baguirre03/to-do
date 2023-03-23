import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import displayAllTasks from "./displayAllTasks";
import { eventListeners } from "./FormControllers";

pageLoad();
createNewProject("default");
createNewToDo("first", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("second", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("third", "123", "1232", "1", "213", "123", "22", "proj2");
createNewToDo("fourt", "123", "1232", "1", "213", "123", "22", "proj2");
displayAllTasks();
eventListeners();
