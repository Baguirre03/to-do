/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */
import { allProjects } from "./project";
import { clearToDoDisplay, sortAndDisplayTasks } from "./displayAllTasks";
import projectSort from "./projectAssign";
import { addProjectsToStore, addTasksToStorage } from "./storage";
import { allToDo } from "./toDo";

let currentProject = "0";

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const displayProjects = () => {
  const projectHolder = document.querySelector(".projects-holder");
  for (let i = 1; i < allProjects.length; i += 1) {
    const project = document.createElement("button");
    project.textContent = allProjects[i].name;
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    project.addEventListener("click", () => {
      currentProject = project.id;
      sortAndDisplayTasks(currentProject);
    });
  }
};

const clearAndDisplayProjects = () => {
  clearProjects();
  displayProjects();
};

const navBarEvents = () => {
  const allTasks = document.querySelector("#all");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");
  const priority = document.querySelector("#sort-prior");

  allTasks.addEventListener("click", () => {
    currentProject = "0";
    projectSort();
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  today.addEventListener("click", () => {
    currentProject = "today";
    projectSort();
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  week.addEventListener("click", () => {
    currentProject = "week";
    projectSort();
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  priority.addEventListener("click", () => {
    currentProject = "priority";
    projectSort();
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });
};

const reAssignProjects = (tasks, newProject) => {
  const taskArray = tasks;
  taskArray.forEach((task) => {
    if (task.getProject() === allProjects[currentProject].getName()) {
      task.setProject(newProject);
    }
  });
};

const removeNameChangeForm = () => {
  if (document.querySelector(".change-proj-name") === null) {
    /* empty */
  } else {
    document.querySelector(".change-proj-name").remove();
  }
};

const changeProjName = (event) => {
  const parent = document.querySelector(".to-do-container");
  if (currentProject === "0") {
    return;
  }
  const currentProj = allProjects[currentProject].getName();
  const form = document.createElement("form");
  form.classList.add("change-proj-name");

  const input = document.createElement("input");
  input.value = currentProj;
  const submit = document.createElement("button");
  submit.textContent = "submit";

  form.append(input, submit);

  event.target.textContent = "";

  parent.append(form);

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      reAssignProjects(allToDo, input.value);
      allProjects[currentProject].setName(input.value);
      addProjectTitleToDOM();
      clearAndDisplayProjects();
      addProjectsToStore();
      addTasksToStorage();
      form.remove();
    },
    { once: true }
  );
};

const addProjectTitleToDOM = () => {
  const titleDisplay = document.querySelector(".proj-display");

  if (currentProject === "week") {
    titleDisplay.textContent = "Week";
  } else if (currentProject === "today") {
    titleDisplay.textContent = "Today";
  } else if (currentProject === "priority") {
    titleDisplay.textContent = "Priority";
  } else {
    titleDisplay.textContent = allProjects[currentProject].getName();
  }
  removeNameChangeForm();
  titleDisplay.addEventListener("click", changeProjName);
};

const selectedProj = () => {
  const buttons = document.querySelectorAll(".project");
  buttons.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    }
    if (btn.id === currentProject.toString()) {
      btn.classList.add("selected");
    } else if (btn.id === "all" && currentProject === "0") {
      btn.classList.add("selected");
    }
  });
};

const setCurrentProjToZero = () => {
  currentProject = 0;
};

const setCurrentProj = (number) => {
  currentProject = number;
};

const highlightAllTaskOnDOM = () => {
  document.querySelector("#all").click();
};

export {
  clearAndDisplayProjects,
  currentProject,
  navBarEvents,
  selectedProj,
  addProjectTitleToDOM,
  setCurrentProjToZero,
  highlightAllTaskOnDOM,
  setCurrentProj,
};
