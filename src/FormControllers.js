/* eslint-disable no-plusplus */
import { allProjects, createNewProject } from "./project";
import projectSort from "./projectAssign";
import { createNewToDo } from "./toDo";
// eslint-disable-next-line import/no-cycle
import { clearAndDisplayProjects, currentProject } from "./displayProjects";
import { sortAndDisplayTasks } from "./displayAllTasks";
import { addProjectsToStore, addTasksToStorage } from "./storage";

const valiDate = (inputDate) => {
  const parts = inputDate.split(/[/\-.]/);

  if (parts.length < 3) {
    return false;
  }
  const dt = new Date(parts[2], parts[1] - 1, parts[0]);
  return dt && dt.getMonth() === parseInt(parts[1], 10) - 1;
};

const createProjectForm = () => {
  const parent = document.querySelector("main");
  const form = document.createElement("form");
  const newProject = document.querySelector("#createProj");

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
    if (input.value === "") {
      // eslint-disable-next-line no-alert
      alert("Give your project a name");
      return;
    }
    event.preventDefault();
    form.remove();
    createNewProject(input.value);
    addProjectsToStore();
    projectSort();
    clearAndDisplayProjects();
    newProject.disabled = false;
  });
};

const createToDoForm = () => {
  const newToDo = document.querySelector("#createToDo");
  const parent = document.querySelector("main");
  const form = document.createElement("form");
  form.classList.add("to-do-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("input");
  descInput.setAttribute("id", "description");

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");

  const priorityLable = document.createElement("label");
  priorityLable.setAttribute("for", "priority");
  priorityLable.textContent = "Priority: ";

  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("id", "priority");

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("input");
  timeInput.setAttribute("id", "description");

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("input");
  noteInput.setAttribute("id", "notes");

  const doneLabel = document.createElement("label");
  doneLabel.setAttribute("for", "done");
  doneLabel.textContent = "Complete? ";

  const doneInput = document.createElement("input");
  doneInput.setAttribute("id", "done");
  doneInput.setAttribute("type", "checkbox");

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project : ";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");

  const currentProjectName = allProjects[currentProject].getName();

  allProjects.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.name;
    option.textContent = element.name;
    projectInput.appendChild(option);
    if (option.value === currentProjectName) {
      option.setAttribute("selected", "selected");
    }
  });

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    priorityLable,
    priorityInput,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    doneLabel,
    doneInput,
    projectLabel,
    projectInput,
    submit
  );

  submit.addEventListener("click", (event) => {
    valiDate(dueDateInput.value);
    if (!dueDateInput.value) {
      // eslint-disable-next-line no-alert
      alert("please put a valid date");
      return;
    }
    event.preventDefault();
    form.remove();
    createNewToDo(
      nameInput.value,
      descInput.value,
      dueDateInput.value,
      priorityInput.value,
      timeInput.value,
      noteInput.value,
      doneInput.value,
      projectInput.value
    );
    addTasksToStorage();
    projectSort();
    sortAndDisplayTasks(currentProject);
    newToDo.disabled = false;
  });
};

const editTaskPopUp = (task) => {
  const parent = document.querySelector("body");
  const form = document.createElement("form");
  form.classList.add("edit-task-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");
  nameInput.value = task.getTitle();

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("input");
  descInput.setAttribute("id", "description");
  descInput.value = task.getDescription();

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");
  console.log(task.getDueDate());
  dueDateInput.value = task.getDueDate();

  const priorityLable = document.createElement("label");
  priorityLable.setAttribute("for", "priority");
  priorityLable.textContent = "Priority: ";

  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("id", "priority");
  priorityInput.value = task.getPriority();

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("input");
  timeInput.setAttribute("id", "description");
  timeInput.value = task.getTimeAllocate();

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("input");
  noteInput.setAttribute("id", "notes");
  noteInput.value = task.getNotes();

  const doneLabel = document.createElement("label");
  doneLabel.setAttribute("for", "done");
  doneLabel.textContent = "Complete? ";

  const doneInput = document.createElement("input");
  doneInput.setAttribute("id", "done");
  doneInput.setAttribute("type", "checkbox");
  doneInput.value = task.getCheckStat();

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project : ";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");
  projectInput.value = task.getProject();

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    priorityLable,
    priorityInput,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    doneLabel,
    doneInput,
    projectLabel,
    projectInput,
    submit
  );
};

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", () => {
    newProject.disabled = true;
    createProjectForm();
  });

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", () => {
    newToDo.disabled = true;
    createToDoForm();
  });
};

export { eventListeners, createToDoForm, createProjectForm, editTaskPopUp };
