
const addTaskJs = (name, task,id) =>{
    //already should have submitted the form so we can record it
    const project = document.querySelector("#"+name.value);
   
    const breaked = document.createElement("br");
    const taskElementTask = document.createElement("p");
    const taskElementID = document.createElement("p");

    taskElementTask.textContent = task.value;
    taskElementID.textContent = id.value;
    project.appendChild(breaked);
    project.appendChild(taskElementTask);
    project.appendChild(taskElementID);

    //project.project.addtask(task,id);
}
export default addTaskJs