/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo - Holds All
createProject("default");
createProject("proj2");
createProject("projectt");

const resetProjects = () => {
  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].projectToDo = [];
  }
};

const pushToDefault = () => {
  for (let i = 0; i < allToDo.length; i++) {
    allProjects[0].projectToDo.push(allToDo[i]);
  }
};

const assignToDo = () => {
  for (let i = 0; i < allProjects.length; i++) {
    const projects = allProjects[i];
    if (projects === undefined) {
      return;
    }
    for (let j = 0; j < allToDo.length; j++) {
      if (allToDo[j].project === projects.name) {
        projects.projectToDo.push(allToDo[j]);
      }
    }
  }
};

const projectSort = () => {
  resetProjects();
  pushToDefault();
  assignToDo();
};

export default projectSort;
