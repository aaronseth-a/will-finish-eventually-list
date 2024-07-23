 // Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let newTaskForm = $('#newTaskForm');
let toDoList = $('#todo-cards');
let inProgressList = $('#in-progress-cards');
let doneList = $('#done-cards');
let formModal = $('#formModal');
$('#datepicker').datepicker();

if(taskList === null){
    taskList = new Array();
}

// function modalReset(){
//     formModal.modal('hide');
//     $('input[id="task-name"]').val("");
//     $('textarea[id="description-text"]').val("");
//     $('input[id="datepicker"]').val("");
// }

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return taskList !== null ? taskList.length+1 : 1;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const today = Date.now();
    const taskDate = new Date(task.deadlineDate).getTime();
    let bg;
    //console.log(task.taskId+" created!");
    if(taskDate <= today){
        bg = "red";
    }else if(taskDate > (today + (4*24*60*60*1000))){
        bg="white";
    }else{
        bg = "yellow";
    }

    return `<div class="card taskCard ${bg}" data-taskId="${task.taskId}">
        <div class="card-header">
            <h3 class="card-title">${task.title}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${task.description}</p>
            <p class="card-text">${task.deadlineDate}</p>
            <a href="#" class="btn btn-primary deleteButton">Delete</a>
        </div>
    </div>`;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   for(const task of taskList){
        const card = createTaskCard(task);
        $('.taskCard').draggable({
            connectToSortable: '.lane',
            revert: 'invalid',
            tolerance: 'intersect',
            zIndex: 100,
       });
        switch(task.state){
            case 'toDo': toDoList.append(card);
                        break;
            case 'inProgress': inProgressList.append(card);
                            break;
            case 'done': doneList.append(card);
                        break;
        }
   }
   $('.taskCard').draggable({
        connectToSortable: '.lane',
        revert: 'invalid',
        tolerance: 'intersect',
        zIndex: 100,
   });
   
    //   for each item in task list
   //   switch - based on state, sort into correct list, order by id#
}


// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const newTask = {
    
        taskId: generateTaskId(),
        title: $('input[id="task-name"]').val(),
        description: $('textarea[id="description-text"]').val(),
        deadlineDate: $('input[id="datepicker"]').val(),
        state: 'toDo'
    };

    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    location.reload(true);

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    event.preventDefault();
    const card =$(this).closest('.taskCard');
    const taskId = card.attr('data-taskId');
    card.remove();
    taskList.splice(taskId-1,1);
    localStorage.setItem("tasks", JSON.stringify(taskList));

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    event.preventDefault();

    const parent = ui.item.parent().attr('id');
    const taskId = ui.item.attr('data-taskId');
    let stateChange='';
    
    switch(parent){
        case 'in-progress-cards':
                stateChange ='inProgress';
                break;
        case 'todo-cards': 
                stateChange ='toDo';
                break;
        case 'done-cards': 
                stateChange ='done';
                break;
    }

    taskList[taskId-1].state = stateChange;
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

    newTaskForm.on('submit',handleAddTask);
    const deleteArr = document.getElementsByClassName('deleteButton');
    for(let el of deleteArr){
        el.addEventListener('click', handleDeleteTask);
    }

    $('.lane').sortable({
        receive: handleDrop,
    });
    
});

