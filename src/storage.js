import { sortAndDisplayTasks } from "./displayAllTasks";
import { allToDo, ToDo } from "./toDo";

export const storeTasks = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));

  const storageData = JSON.parse(localStorage.getItem("allTasks"));
  console.log("storageData ... raw task data :", storageData);

  const list = storageData.map((data) =>
    allToDo.push(
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
    )
  );

  console.log("lists :", list);
  console.log(allToDo);
};

const exist = () => {
  const storageData = JSON.parse(localStorage.getItem("allTasks"));
  console.log("storageData ... raw task data :", storageData);

  const list = storageData.map((data) =>
    allToDo.push(
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
    )
  );
  console.log("lists :", list);

  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));

  console.log(localStorage.getItem("allTasks"));
  console.log(allToDo);
};

export const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    console.log("empty");
    storeTasks();
  } else if (storage.length !== 0) {
    console.log("existing");
    exist();
  } else {
    console.log("error");
  }
};
