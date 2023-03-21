import pageLoad from "./pageLoad";
import { allProjects, createProject, Project } from "./project";
import "./style.css";
import { createNewToDo, toDoholder } from "./toDo";

pageLoad();
createNewToDo(
  "need this done",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "this project"
);

createProject("hello");
createProject("three");

createNewToDo("1", "2", "3", "4", "5");

console.log(allProjects);
console.log(toDoholder);

allProjects[0].projectHolder.push(toDoholder[0]);

console.log(allProjects);
