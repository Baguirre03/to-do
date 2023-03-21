import pageLoad from "./pageLoad";
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

const another = new ToDo("1", "2", "3", "4", "5");

pushToDo(getThis);
pushToDo(another);
