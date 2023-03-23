/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
import displayTasks from "./displayAllTasks";
import { allProjects } from "./project";
import projectSort from "./projectAssign";

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

let currentProject = "";

const displayProjects = () => {
  const projectHolder = document.querySelector(".projects-holder");
  clearProjects();
  for (let i = 0; i < allProjects.length; i++) {
    const project = document.createElement("button");
    project.textContent = allProjects[i].name;
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    project.addEventListener("click", () => {
      displayTasks(project.id);
      currentProject = project.id;
      console.log(currentProject);
    });
  }
};

export { displayProjects, currentProject };
