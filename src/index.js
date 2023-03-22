import pageLoad from "./pageLoad";
import { allProjects, deleteProject } from "./project";
import projectSort from "./projectAssign";
import "./style.css";
import { allToDo, createNewToDo, deleteTask } from "./toDo";

pageLoad();
createNewToDo(
  "1proj2Ass(1)",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "proj2"
);
createNewToDo(
  "2proj2Ass(1)",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "projectt"
);
