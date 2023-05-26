import newProjectForm from "./newProject";

const frontPage = () => {
    const cont = document.querySelector("#content");
    const main = document.createElement('div');
    main.id = "main";
    const div = document.createElement('div');
    div.id = "popupContainer";
    div.classList.add("popup-container");
    const header = document.createElement('h1');
    const newProject = document.createElement('button');
    const description = document.createElement('p');
    const listOfProject = document.createElement('div');
    listOfProject.id = "listOfProjects";

    header.innerHTML = "Andreas's Task App";

    description.innerHTML = "Add a project first, then add tasks to that project. Add as many as you want (or js lets me)";

    newProject.setAttribute('id', 'newProject');

    newProject.innerHTML = "New Project";

    div.appendChild(header);
    div.appendChild(description);
    div.appendChild(newProject);
    main.appendChild(listOfProject);
    cont.appendChild(div);
    cont.appendChild(main);
    newProject.addEventListener("click", function() {
        div.style.display = "block";
        newProjectForm();
    })
}

export default frontPage