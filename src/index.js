import pageLoad from "./pageLoad";
import Project from "./project";
import "./style.css";
import { pushToDo, ToDo } from "./toDo";

pageLoad();
const getThis = new ToDo(
  "need this done",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "this project"
);

const thisIsAProject = new Project("name", "hold");
console.log(thisIsAProject);

thisIsAProject.holder.push(getThis);
console.log(thisIsAProject);

const another = new ToDo("1", "2", "3", "4", "5");

pushToDo(getThis);
pushToDo(another);
