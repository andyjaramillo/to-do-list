import addTaskJs from "./addTask";
const newTaskForm = (name) => {
    const cont = document.querySelector("#"+name.value);
    const taskdiv = cont.querySelector(name.value+"button");
    const form = document.createElement("form");
    form.setAttribute('id', 'taskForm');
    const task = document.createElement("input");
    const id = document.createElement("input");
    task.type = 'text';
    id.type = 'text';
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(task);
    form.appendChild(id);
    form.appendChild(submitButton);
    
    cont.appendChild(form);

    submitButton.addEventListener("click", event=> {
        event.preventDefault();
        addTaskJs(name, task,id);
        form.remove();
    })

}

export default newTaskForm