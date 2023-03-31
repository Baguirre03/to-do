import navBarEvents from "./navBar";

const pageLoad = () => {
  const body = document.querySelector("body");
  body.innerHTML = `    <div class="main-container">
      <header>
        <h3 class="logo">To Do List</h3>
      </header>
      <main>
        <div class="sidebar">
          <ul class="current-times">
            <li><button id="today" class="default-options">Today</button></li>
            <li><button id="week" class="default-options">This Week</button></li>
          </ul>
          <div class="projects">
            <h3>Your Projects</h3>
            <div class="projects-holder"></div>
            <button id="createProj">Create New Project</button>
          </div>
        </div>
        <div class="to-do-container">
          <button id="createToDo">Create New Task +</button>
        </div>
        <div class=task-holder>
        </div>
      </main>
    </div>`;

  navBarEvents();
};

export default pageLoad;
