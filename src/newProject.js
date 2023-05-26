import addProject from "./addProject";
const newProjectForm = () => {
    const cont = document.querySelector("#main");
    const form = document.createElement("form");
    form.setAttribute('id', 'projectForm');
    const name = document.createElement("input");
    name.type = 'text';
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    

    form.appendChild(name);
    form.appendChild(submitButton);
    cont.prepend(form);

    submitButton.addEventListener("click", event=> {
        //addTaskJs(project, task,id);
       event.preventDefault();
        addProject(name);
        form.remove()

    })
 

}

export default newProjectForm