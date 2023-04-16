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

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getTimeAllocate() {
    return this.timeAllocate;
  }

  setTimeAllocate(time) {
    this.timeAllocate = time;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  getNotes() {
    return this.notes;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  setCheckStat(checkStat) {
    this.checkStat = checkStat;
  }

  getCheckStat() {
    return this.checkStat;
  }

  getProject() {
    return this.project;
  }

  setProject(project) {
    this.project = project;
  }

  getInfo() {
    return `Description: ${this.description} </br> Notes: ${this.notes} </br> Time Allocation: ${this.timeAllocate} </br> Project: ${this.project}`;
  }
}

const allToDo = [];

const pushToDo = (holder) => {
  allToDo.push(holder);
};

const deleteTask = (index) => {
  allToDo.splice(index, 1);
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
};

const defaultTasks = () => {
  createNewToDo(
    "Edit the title of a project (hint: click it)",
    "Looks like you found the more info!",
    "2023-04-05",
    "one",
    "1 hour",
    "And some notes can go in here!",
    false,
    "Personal"
  );
  createNewToDo(
    "Homework",
    "Mark HW",
    "2023-04-05",
    "one",
    "1 hour",
    "No Notes",
    false,
    "School"
  );
  createNewToDo(
    "Code",
    "Get it done every day!",
    "2023-03-10",
    "two",
    "2 Hours",
    "You can figure it out!",
    true,
    "Personal"
  );
  createNewToDo(
    "Study for LREB exam",
    "Lots of content on it",
    "2023-03-20",
    "two",
    "3 hours",
    "No notes",
    true,
    "School"
  );
  createNewToDo(
    "Read a book",
    "Gotta find a book first",
    "2023-07-04",
    "three",
    "1 hour",
    "No notes",
    false,
    "Personal"
  );
};

export { createNewToDo, allToDo, deleteTask, pushToDo, defaultTasks };
