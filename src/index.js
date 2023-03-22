import pageLoad from "./pageLoad";
import { allProjects } from "./project";
import assignToDo from "./projectAssign";
import "./style.css";
import { createNewToDo } from "./toDo";

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
assignToDo();
console.log(allProjects);
