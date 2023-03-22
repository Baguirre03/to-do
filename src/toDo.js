import { allProjects } from "./project";

export class ToDo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    timeAllocate,
    notes,
    checkStat,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.timeAllocate = timeAllocate;
    this.notes = notes;
    this.checkStat = checkStat;
    this.project = project;
  }
}

const allToDo = [];

const pushToDo = (toDo) => {
  allToDo.push(toDo);
};

const createNewToDo = (
  title,
  description,
  dueDate,
  priority,
  timeAllocate,
  notes,
  checkStat,
  project
) => {
  const holder = new ToDo(
    title,
    description,
    dueDate,
    priority,
    timeAllocate,
    notes,
    checkStat,
    project
  );
  pushToDo(holder);
  allProjects[0].projectToDo.push(holder);
};

export { createNewToDo, allToDo };
