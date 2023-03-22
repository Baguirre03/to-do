const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", () => {
    console.log("test");
  });

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", () => {
    console.log("test2");
  });
};

export default eventListeners;
