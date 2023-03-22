class Project {
  constructor(name) {
    this.name = name;
    this.projectToDo = [];
  }
}

const allProjects = [];

const pushProject = (project) => {
  allProjects.push(project);
};

const createProject = (name) => {
  const proj = new Project(name);
  pushProject(proj);
};

const deleteProject = (index) => {
  allProjects.splice(index, 1);
};

export { createProject, allProjects, deleteProject };
