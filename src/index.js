import pageLoad from "./pageLoad";
import assignToDo from "./projectAssign";
import "./style.css";
import { createNewToDo } from "./toDo";

pageLoad();
createNewToDo(
  "need this done",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "default"
);
createNewToDo(
  "YEEE",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "proj2"
);
createNewToDo(
  "neDD",
  "get this  done by friday",
  "11/11",
  "Now",
  "allocate 2 hours",
  "note here",
  "done",
  "projectt"
);
assignToDo();
