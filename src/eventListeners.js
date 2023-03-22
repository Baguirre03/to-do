import { createProjectForm, createToDoForm } from "./DOM-controller";

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", createProjectForm);

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", createToDoForm);
};

// const getDelete = () => {
//   const deleteButtons = document.querySelectorAll(".delete");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const parent = btn.parentElement;
//       remove;
//     });
//   });
// };
export default eventListeners;
