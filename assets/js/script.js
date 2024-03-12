// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

$(function(){
    $('#todo-cards').droppable({
        tolerance: 'intersect'
    });
    $('#in-progress-cards').droppable({
        tolerance: 'intersect'
    });
    $('#done-cards').droppable({
        tolerance: 'intersect'
    });
});

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
   let cardText = $('<div>');
   cardText.addClass('task-card');
   cardText.addClass('card');
   let randomText = $('<h2>');
   randomText.text('TESTING 1');
   cardText.append(randomText);
   cardText.draggable({revert: 'invalid', snap: ".ui-droppable", snapMode:'inner', snapTolerance: 170});
   $('#todo-cards').append(cardText);
   cardText = $('<div>');
   cardText.addClass('task-card');
   cardText.addClass('card');
   randomText = $('<h2>');
   randomText.text('TESTING 2');
   cardText.append(randomText);
   cardText.draggable({revert: 'invalid', snap: ".ui-droppable", snapMode:'inner', snapTolerance: 170});
   $('#todo-cards').append(cardText);

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});



createTaskCard();