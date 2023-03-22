/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo - Holds All
createProject("default");
createProject("proj2");
createProject("projectt");
const assignToDo = () => {
  for (let i = 0; i < allToDo.length; i++) {
    const projects = allProjects[i];
    for (let j = 0; j < allToDo.length; j++) {
      if (projects === undefined) {
        return;
      }
      if (allToDo[j].project === projects.name) {
        projects.projectToDo.push(allToDo[j]);
      }
    }
  }
};
console.log(allProjects);

export default assignToDo;
