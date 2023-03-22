import { allProjects, createNewProject } from "./project";

const createProjectForm = () => {
  const parent = document.querySelector("main");
  const form = document.createElement("form");
  form.classList.add("project-form");

  parent.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "project-name");
  label.textContent = "Project Name: ";

  const input = document.createElement("input");
  input.setAttribute("id", "project-name");

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submit);

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    createNewProject(input.value);
    console.log(allProjects);
  });
};

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", createProjectForm);

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", () => {});
};
export default eventListeners;
