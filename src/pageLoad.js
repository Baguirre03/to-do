import { navBarEvents } from "./displayProjects";
import { eventListeners } from "./FormControllers";
import { checkProjStorage, checkStorage } from "./storage";
import Svg from "./imgs/check.svg";

const pageLoad = () => {
  const body = document.querySelector("body");
  const checkMark = new Image();
  checkMark.src = Svg;
  checkMark.classList.add("logo-svg");
  body.innerHTML = `    <div class="main-container">
      <header>
        <h3 class="logo">To Do List</h3>
      </header>
      <main>
        <div class="sidebar">
          <ul class="current-times">
          <li><button id="all" class="default-options project">All Tasks</button></li>
            <li><button id="today" class="default-options project">Today</button></li>
            <li><button id="week" class="default-options project">This Week</button></li>
          </ul>
          <div class="projects">
            <h3>Your Projects</h3>
            <div class="projects-holder"></div>
            <button id="createProj">Create New Project</button>
          </div>
        </div>
        <div class="to-do-container">
        <h3 class="proj-display"></h3>
          <button id="createToDo">Create New Task +</button>
        </div>
        <div class=task-holder>
        </div>
      </main>
    </div>`;
  const logo = document.querySelector(".logo");
  logo.parentNode.insertBefore(checkMark, logo);
  navBarEvents();
  checkProjStorage();
  checkStorage();
  eventListeners();
};

export default pageLoad;
