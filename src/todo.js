class Task {
    constructor(task, id) {
        this.task = task;
        this.id = id;
        this.name = "";
        this.date = "";
        this.priority = "white";
    }
    get name() {
        return this.name;
    }
    set name(string) {
        this.name = string;
    }
    get date() {
        return this.date;
    }
    set date(string) {
        this.date = string;
    }

}

class Project {
    constructor() {
        this.tasks = [];
        //this.name = name;
    }
    addtask(task,id) {
        const newTask = new Task(task,id);
        this.project.concat(newTask);
    }
    // get name() {
    //     return this.name;
    // }
    // set name(string) {
    //     this.name = string;
    // }
}


const list = [];

export default {Project, list}


