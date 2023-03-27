import { sortAndDisplayTasks } from "./displayAllTasks";
import { allToDo, defaultTasks, ToDo } from "./toDo";

export const storeTasks = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));
  sortAndDisplayTasks("0");
};

export const addTaskToStorage = () => {
  sortAndDisplayTasks("0");

  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));
};

const displayStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("allTasks"));
  console.log("storageData", storageData);

  storageData.map((data) =>
    allToDo.push(
      new ToDo(
        data.title,
        data.description,
        data.dueDate,
        data.priority,
        data.timeAllocate,
        data.notes,
        data.checkStat,
        data.project
      )
    )
  );
  sortAndDisplayTasks("0");
};

export const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    console.log("empty");
    defaultTasks();
    storeTasks();
  } else if (storage.length !== 0) {
    displayStorage();
  } else {
    console.log("error");
  }
};
