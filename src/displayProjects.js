/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */
import { allProjects } from "./project";
import { clearToDoDisplay, sortAndDisplayTasks } from "./displayAllTasks";
import { addProjectsToStore, addTasksToStorage } from "./storage";
import { allToDo } from "./toDo";

let currentProject = "0";

const changeCurrentProject = (projectNumber) => {
  currentProject = projectNumber;
  return currentProject;
};

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
    project.textContent = allProjects[i].getName();
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    project.addEventListener("click", () => {
      changeCurrentProject(project.id);
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
  const priority = document.querySelector("#priority");

  allTasks.addEventListener("click", () => {
    changeCurrentProject("0");
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  today.addEventListener("click", () => {
    changeCurrentProject("today");
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  week.addEventListener("click", () => {
    changeCurrentProject("week");
    clearToDoDisplay();
    sortAndDisplayTasks(currentProject);
  });

  priority.addEventListener("click", () => {
    changeCurrentProject("priority");
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
  const parent = document.querySelector(".proj-display-container");
  if (currentProject === "0") {
    return;
  }
  const currentProj = allProjects[currentProject].getName();
  const formHolder = document.createElement("h3");
  formHolder.classList.add("change-proj-name-form");
  const form = document.createElement("form");
  form.classList.add("change-proj-name");

  const input = document.createElement("input");
  input.value = currentProj;
  const submit = document.createElement("button");
  submit.textContent = "+";

  form.append(input, submit);

  event.target.textContent = "";

  formHolder.appendChild(form);
  parent.append(formHolder);

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      reAssignProjects(allToDo, input.value);
      allProjects[currentProject].setName(input.value);
      // eslint-disable-next-line no-use-before-define
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

  if (
    currentProject === "week" ||
    currentProject === "today" ||
    currentProject === "priority"
  ) {
    titleDisplay.textContent =
      currentProject.charAt(0).toUpperCase() + currentProject.substring(1);
    titleDisplay.classList.remove("can-edit-name");
  } else {
    titleDisplay.textContent = allProjects[currentProject].getName();
    titleDisplay.classList.add("can-edit-name");
  }

  if (currentProject === "0") {
    titleDisplay.classList.remove("can-edit-name");
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

const highlightAllTaskOnDOM = () => {
  document.querySelector("#all").click();
};

export {
  clearAndDisplayProjects,
  currentProject,
  navBarEvents,
  selectedProj,
  addProjectTitleToDOM,
  highlightAllTaskOnDOM,
  changeCurrentProject,
};
