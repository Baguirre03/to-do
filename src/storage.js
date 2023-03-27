import { sortAndDisplayTasks } from "./displayAllTasks";
import { currentProject } from "./displayProjects";
import { allToDo, ToDo } from "./toDo";

export const storeTasks = () => {
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));

  const storageData = JSON.parse(localStorage.getItem("allTasks"));
  console.log("storageData ... raw task data :", storageData);
};

const exist = () => {
  const storageData = JSON.parse(localStorage.getItem("allTasks"));
  console.log("storageData 2 :", storageData);

  storageData.map((data) =>
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
  localStorage.setItem("allTasks", JSON.stringify(allToDo));
  console.log("allTasksStored :", localStorage.getItem("allTasks"));

  sortAndDisplayTasks(currentProject);
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
