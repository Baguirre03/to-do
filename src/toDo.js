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

  getCheckStat() {
    return this.checkStat;
  }

  setCheckStat(checkStat) {
    this.checkStat = checkStat;
  }

  getProject() {
    return this.project;
  }

  setProject(project) {
    this.project = project;
  }

  getInfo() {
    return `Description: ${this.description} Notes: ${this.notes} Time Allocation: ${this.timeAllocate} Project: ${this.project}`;
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
    "Homework",
    "Mark HW",
    "2023-04-05",
    "priority 1",
    "1.5 Hours",
    "No Notes",
    false,
    "School"
  );
  createNewToDo(
    "Code",
    "Get it done every day!",
    "2023-03-10",
    "priority 1",
    "2 Hours",
    "You can figure it out!",
    true,
    "Personal"
  );
  createNewToDo(
    "Study for LREB exam",
    "Lots of content on it",
    "2023-03-20",
    "priority 2",
    "1 Hour",
    "No notes",
    true,
    "School"
  );
  createNewToDo(
    "Read a book",
    "Gotta find a book first",
    "2023-07-04",
    "priority 3",
    "1 Hour",
    "No notes",
    false,
    "Personal"
  );
};

export { createNewToDo, allToDo, deleteTask, pushToDo, defaultTasks };
