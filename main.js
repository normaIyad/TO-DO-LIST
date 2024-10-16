let tasks = [];  

document.querySelector("#bush").onclick = function(){
    const task = document.querySelector('#value').value;
    if (task === "") return alert("Please select a task");  
    tasks.push(task);  
    renderTasks(); 
    document.querySelector('#value').value = '';  
};

function renderTasks() {
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = '';  

    tasks.forEach((task, index) => {
        tasksContainer.innerHTML += `
            <div class="task">
                <span class="taskname">
                  ${task}
                </span>
                <div>
                <button class="delete btn" data-index="${index}">
                  <i class="material-icons icon">delete</i> 
                </button>
                <button class="edit btn" data-index="${index}">
                  <i class="material-icons icon">edit</i>
                </button>
                </div>
            </div>
        `;
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = function() {
            const index = this.getAttribute('data-index');
            tasks.splice(index, 1); 
            renderTasks();  
        };
    });

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach(button => {
        button.onclick = function() {
            const index = this.getAttribute('data-index');
            const taskName = tasks[index];  // Get the task from the array

            document.querySelector('#text').innerHTML = `
                <div class="edit-field">
                    <input type="text" class="inputval" value="${taskName}" style="font-size: 18px; color: black;">
                    <button class="check" data-index="${index}">
                        <i class="fa fa-check" style="font-size: 18px; color: green;"></i>
                    </button>
                </div>
            `;

            const checkButton = document.querySelector('.check');
            checkButton.onclick = function() {
                const newTaskName = document.querySelector('.inputval').value;
                tasks[index] = newTaskName; 
                document.querySelector('#text').innerHTML = '';  
                renderTasks(); 
            };
        };
    });
}
