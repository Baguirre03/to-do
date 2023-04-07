/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { sortAndDisplayTasks } from "./displayAllTasks";
import { clearAndDisplayProjects } from "./displayProjects";
import { allProjects, defaultProjects, Project } from "./project";
import { allToDo, defaultTasks, ToDo } from "./toDo";

// Task storage
const addTasksToStorage = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
};

const displayTasksFromStore = () => {
  const storageData = JSON.parse(localStorage.getItem("allTasks"));

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
};

// on page load
const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    defaultTasks();
    addTasksToStorage();
    sortAndDisplayTasks("0");
  } else if (storage.length !== 0) {
    displayTasksFromStore();
    sortAndDisplayTasks("0");
  }
};

// Project storage
const addProjectsToStore = () => {
  localStorage.setItem("projects", JSON.stringify(allProjects));
};

const displayProjectsFromStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("projects"));

  storageData.map((data) =>
    allProjects.push(new Project(data.name, data.projectToDo))
  );
  clearAndDisplayProjects();
};

// For page load
const checkProjStorage = () => {
  const storage = localStorage.getItem("projects");
  if (storage === null) {
    defaultProjects();
    addProjectsToStore();
    clearAndDisplayProjects();
  } else if (storage.length !== 0) {
    displayProjectsFromStorage();
  }
};

export {
  addTasksToStorage,
  checkStorage,
  addProjectsToStore,
  checkProjStorage,
};
