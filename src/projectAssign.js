/* eslint-disable no-plusplus */
import { allToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo
createProject("first");
createProject("default");
createProject("proj2");
createProject("project4");
const assignToDo = () => {
  for (let i = 0; i < allProjects.length; i++) {
    const projects = allProjects[i];
    console.log(projects);
    for (let j = 0; j < allToDo.length; j++) {
      if (allToDo[i].project === projects.name) {
        projects.projectToDo.push(allToDo[i]);
      }
    }
  }
};
assignToDo();
console.log(allProjects);
export default assignToDo;
