 // Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let newTaskForm = document.getElementById('newTaskForm');


let task ={
    taskId: 0,
    title: "",
    description: "",
    deadlineDate: 0,
    state: ""
}


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return taskList !== null ? taskList.length+1 : 1;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let toDoList = document.getElementById('todo-cards');
    let inProgressList = document.getElementById('in-progress-cards');
    let doneList = document.getElementById('done-cards');
}
// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    taskList.append('task');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    event.preventDefault();

    taskList.splice(task.taskId,1)
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    
    renderTaskList();

    newTaskForm.onabort('submit')
});

