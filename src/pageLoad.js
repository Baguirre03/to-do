import { navBarEvents } from "./displayProjects";
import { eventListeners } from "./FormControllers";
import { checkProjStorage, checkStorage } from "./storage";
// import Svg from "./imgs/check.svg";

const pageLoad = () => {
  const body = document.querySelector("body");
  body.innerHTML = `    <div class="main-container">
      <header>
      <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M7 12.5L8.3 11.1L10.4 13.2L15.6 8L17 9.4L10.5 16L7 12.5M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z"/></svg>
        <h3 class="logo">To Do List</h3>
      </header>
      <main>
        <div class="sidebar">
          <ul class="current-times">
          <li><button id="all" class="project default-options">All Tasks</button></li>
            <li><button id="today" class="default-options project">Today</button></li>
            <li><button id="week" class="default-options project">This Week</button></li>
            <li><button id="priority" class="default-options project">Priority</button></li>
          </ul>
          <div class="projects">
            <h3>Your Projects</h3>
            <div class="projects-holder"></div>
            <button id="createProj">Create New Project</button>
          </div>
        </div>
        <div class="to-do-container">
        <div class="proj-display-container">
          <h3 class="proj-display"></h3>
        </div>
          <button id="createToDo">Create New Task +</button>
        </div>
        <div class=task-holder>
        </div>
      </main>
    </div>`;
  navBarEvents();
  checkProjStorage();
  checkStorage();
  eventListeners();
};

export default pageLoad;
