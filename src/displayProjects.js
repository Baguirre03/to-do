/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-plusplus */
import { allProjects } from "./project";
import { displayTasks } from "./displayAllTasks";

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

let currentProject = "0";

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
    });
  }
};

export { displayProjects, currentProject };
