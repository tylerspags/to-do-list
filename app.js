// SELECTORS
const todoContainer = document.getElementById("todo-container");
const input = document.getElementById("input-text");
const btn = document.getElementById("submit-btn");
var length = 0;


// EVENT LISTENERS
btn.addEventListener("click", addToDo);

// Recognize enter key as a submit trigger
input.addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            addToDo();
        }
    });

// FUNCTIONS
function addToDo() {

    // keeps track of how many items within todo list
    length +=1;


    // check if input has something in it, if not, do not continue
    if (input.value.length > 0) {

    //add div for each item and give classname of to-item
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    // create a p tag for each todo item and give it's inner text the input value from user
    const task = document.createElement('p');
    task.setAttribute('id', 'p');
    task.innerText = input.value;

    // create a completed button for each item and add check icon
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    // create a trash button for each item and add trash icon
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    // add the todoItem to the overall todoContainer
    todoContainer.appendChild(todoItem);

    //add the task and the two buttons to each todoItem
    todoItem.appendChild(task);
    todoItem.appendChild(completeBtn);
    todoItem.appendChild(trashBtn);

    // reset input value each time in order for user to type new task and set cursor for next task
    input.value = null;
    input.select();
    

    // Function to remove the todoItem div each time the trash button is pressed
    // Declared within thinin the addToDo function in order to be able to use the trashBtn variable
    function deleteTask() {
        todoContainer.removeChild(todoItem);
        length -= 1;
    }

    // Event listener in order to use the trash button
    // Declared here in order to use the trashBtn variable locally
    trashBtn.addEventListener("click", deleteTask);
    completeBtn.addEventListener("click", completeTask);

    const p = document.getElementById('p');
    // Complete Button Function
    function completeTask () {
        if (task.style.textDecoration === 'line-through') {
            task.style.textDecoration = 'none';
            task.style.opacity = 1;
            completeBtn.style.backgroundColor = 'white';
            completeBtn.style.color = '#244a21';
        } else {
        task.style.textDecoration = 'line-through';
        task.style.opacity = 0.5; 
        completeBtn.style.backgroundColor = '#244a21';
        completeBtn.style.color = 'white';
}
        }
    
}
}


