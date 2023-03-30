import navBarEvents from "./navBar";

const pageLoad = () => {
  const body = document.querySelector("body");
  body.innerHTML = `    <div class="main-container">
      <header>
        <h3 class="logo">To Do List</h3>
      </header>
      <main>
        <div class="sidebar">
          <ul>
            <li><button id="inbox">All Tasks</button></li>
            <li><button id="today">Today</button></li>
            <li><button id="week">This Week</button></li>
          </ul>
          <div class="projects">
            <h3>Projects</h3>
            <div class="projects-holder"></div>
            <button id="createProj">Create New Project</button>
          </div>
        </div>
        <div class="to-do-container">
          <button id="createToDo">Create New To-Do</button>
          <div class="to-do-holder"></div>
        </div>
        <div class=task-holder>
        </div>
      </main>
      <footer>
        <p>CopyRight Ben</p>
      </footer>
    </div>`;

  navBarEvents();
};

export default pageLoad;
