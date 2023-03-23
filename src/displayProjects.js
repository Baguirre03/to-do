/* eslint-disable no-plusplus */
import { allProjects } from "./project";

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const displayProjects = () => {
  const projectHolder = document.querySelector(".projects-holder");
  clearProjects();
  for (let i = 0; i < allProjects.length; i++) {
    const project = document.createElement("button");
    project.textContent = allProjects[i].name;
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    const selections = document.querySelectorAll(".project");

    selections.forEach((selection) => {
      selection.addEventListener("click", (event) => {
        console.log(selection.id);
      });
    });
  }
};

export default displayProjects;
