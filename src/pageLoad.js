const pageLoad = () => {
  const body = document.querySelector("body");
  body.innerHTML = `    <div class="main-container">
      <header>
        <h3 class="logo">Logo</h3>
      </header>
      <main>
        <div class="sidebar">
          <ul>
            <li>Inbox</li>
            <li>Today</li>
            <li>This Week</li>
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
      </main>
      <footer>
        <p>CopyRight Ben</p>
      </footer>
    </div>`;
};

export default pageLoad;
