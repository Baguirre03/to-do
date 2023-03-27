import { allToDo, ToDo } from "./toDo";

export const storeTasks = () => {
  const allTasksStored = JSON.stringify(allToDo);
  console.log("allTasksStored :", allTasksStored);

  const storageData = JSON.parse(allTasksStored);
  console.log("storageData ... raw task data :", storageData);

  const list = storageData.map(
    (data) =>
      new ToDo(
        data.title,
        data.description,
        data.dueDate,
        data.priority,
        data.timeAllocate,
        data.notes,
        data.checkStat,
        data.project
      )
  );

  console.log("lists :", list);
};

export const getStoredTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem("allTasks"));
  console.log(storedTasks);
};

export const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage.length === 0) {
    console.log("empty");
    storeTasks(allToDo);
    getStoredTasks();
  } else {
    console.log("full");
    const storedTasks = JSON.parse(localStorage.getItem("allTasks"));
    console.log(storedTasks);
    allToDo.push(storedTasks);
    console.log(allToDo);
    getStoredTasks();
  }
};
