import "./style.css";
import pageLoad from "./pageLoad";
import { createNewProject } from "./project";
import { createNewToDo } from "./toDo";
import { eventListeners } from "./FormControllers";
import { clearAndDisplayProjects } from "./displayProjects";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { checkStorage, storeTasks } from "./storage";

pageLoad();
createNewProject("default");
createNewProject("school");
createNewProject("personal");
createNewToDo(
  "Do Homework",
  "ASAP",
  "2023",
  "priority 1",
  "2 Hours",
  "No Notes",
  "complete",
  "school"
);
createNewToDo(
  "Code",
  "every day!",
  "2023",
  "priority 1",
  "200 Hours",
  "Shoutout TOP",
  "incomplete",
  "personal"
);
createNewToDo(
  "Read a book",
  "choose my fav book",
  "2023",
  "priority 3",
  "1 Hour",
  "NA",
  "incomplete",
  "personal"
);
createNewToDo(
  "Work Hard",
  "this usual",
  "2023",
  "priority 2",
  "1 Hours",
  "You got this",
  "incomplete",
  "school"
);
storeTasks();
sortAndDisplayTasks("0");
clearAndDisplayProjects();
eventListeners();
