/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo - Holds All
createProject("default");
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

export default assignToDo;
