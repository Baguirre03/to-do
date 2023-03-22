import { allToDo, createNewToDo } from "./toDo";
import { allProjects, createProject } from "./project";

// defaultToDo
createProject("default");
const assignToDo = () => {
  for (let i = 0; i < allToDo.length; i++) {
    console.log(allToDo[i]);
  }
};

export default assignToDo;
