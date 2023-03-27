import { checkForDuplicates, sortAndDisplayTasks } from "./displayAllTasks";
import { currentProject } from "./displayProjects";
import { allToDo, ToDo } from "./toDo";

export const storeTasks = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));
};

const exist = () => {
  sortAndDisplayTasks("0");
  console.log(allToDo);

  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));
};

export const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    console.log("empty");
    storeTasks();
  } else if (storage.length !== 0) {
    console.log("existing");
    exist();
  } else {
    console.log("error");
  }
};
