export class Project {
  constructor(name) {
    this.name = name;
    this.projectToDo = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

const allProjects = [];

const pushProject = (project) => {
  allProjects.push(project);
};

const createNewProject = (name) => {
  const proj = new Project(name);
  pushProject(proj);
};

const deleteProject = (index) => {
  allProjects.splice(index, 1);
};
const defaultProjects = () => {
  createNewProject("All");
  createNewProject("School");
  createNewProject("Personal");
};

export { createNewProject, allProjects, deleteProject, defaultProjects };
