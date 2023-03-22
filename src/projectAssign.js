/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo
createProject("default");
createProject("proj2");
const assignToDo = () => {
  for (let i = 1; i < allProjects.length; i++) {
    const projects = allProjects[i];
    console.log(projects);
    for (let i = 0; i < allToDo.length; i++) {
      if (allToDo[i].project === projects.name) {
        projects.projectToDo.push(allToDo[i]);
      }
    }
  }
};
assignToDo();
console.log(allProjects);
export default assignToDo;
