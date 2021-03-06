// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners()
{
    // Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks events
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e) {
    if(taskInput.value === '')
    {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';

    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append li to ul
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove Task
function removeTask(e)
{
    if (e.target.parentElement.classList.contains('delete-item'))
    {
        if (confirm('Are you sure?'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear Tasks
function clearTasks()
{
    taskList.innerHTML = '';
}

// Filter tasks
function filterTasks(e)
{
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task)
        {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text)!= -1)
            {
                task.style.display = 'block';
            }
            else
            {
                task.style.display = 'none';
            }
        }
    );
}