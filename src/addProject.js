import newTaskForm from "./newTask";
import Project from './todo'
import list from './todo'
const addProject = (name) => {
    const content = document.querySelector("#content");
    const cont = content.querySelector("#listOfProjects");
   // const project = new Project();
   
    const firstModal = document.createElement('div');
    firstModal.classList.add("modal");
    firstModal.id = name.value;
    const nestmodal = document.createElement('div');
    nestmodal.classList.add("modal-content");
    var modalTitle = document.createElement("h2");
    modalTitle.textContent = name.value;
    var addTaskButton = document.createElement('button');
    addTaskButton.textContent = "add Task";
    addTaskButton.id = name.value + "button";
    nestmodal.appendChild(modalTitle);
    nestmodal.appendChild(addTaskButton);
    firstModal.appendChild(nestmodal);

    //project.name(name);
    //list.push(project);
    cont.appendChild(firstModal);

    addTaskButton.addEventListener("click", function() {
        newTaskForm(name);
    })
}

export default addProject