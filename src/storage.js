/* eslint-disable import/no-cycle */
import { sortAndDisplayTasks } from "./displayAllTasks";
import { clearAndDisplayProjects } from "./displayProjects";
import { allProjects, defaultProjects, Project } from "./project";
import { allToDo, defaultTasks, ToDo } from "./toDo";

// Task storage
const addTasksToStorage = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));
};

const displayTasksFromStore = () => {
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

// on page load
const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    console.log("empty");
    defaultTasks();
    addTasksToStorage();
    sortAndDisplayTasks("0");
  } else if (storage.length !== 0) {
    displayTasksFromStore();
  } else {
    console.log("error");
  }
};

// Project storage
const addProjectsToStore = () => {
  localStorage.setItem("projects", JSON.stringify(allProjects));
  console.log("allProjects :", localStorage.getItem("projects"));
};

const displayProjectsFromStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("projects"));
  console.log("Projects Data:", storageData);

  storageData.map((data) =>
    allProjects.push(new Project(data.name, data.projectToDo))
  );
  clearAndDisplayProjects();
};

// For page load
const checkProjStorage = () => {
  const storage = localStorage.getItem("projects");
  if (storage === null) {
    console.log("default projects display");
    defaultProjects();
    addProjectsToStore();
    clearAndDisplayProjects();
  } else if (storage.length !== 0) {
    displayProjectsFromStorage();
  } else {
    console.log("error");
  }
};

export {
  addTasksToStorage,
  checkStorage,
  addProjectsToStore,
  checkProjStorage,
};
