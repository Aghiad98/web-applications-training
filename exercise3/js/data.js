const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clear_all = document.getElementById("clear_all");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

addBtn.addEventListener("click", addTask);

function addTask(){

    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }
    if(tasks.length > 0){
        clear_all.style.display="block"
    }else{
        clear_all.style.display="none"
    }
    if(tasks.length >= 6){
        alert("Maximum 6 tasks only");
        return;
    }

    tasks.push(taskText);

    saveTasks();

    renderTasks();

    input.value = "";
}

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let div = document.createElement("div");

        div.classList.add("task");

        div.innerHTML = `
            <span>
                ${index + 1} - ${task}
            </span>

            <button
                class="delete"
                onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(div);

    });
}

function deleteTask(index){

    if(confirm("هل أنت متأكد من حذف المهمة؟")){

        tasks.splice(index,1);

        saveTasks();

        renderTasks();

        alert("تم حذف المهمة بنجاح");
    }
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}
function clearAll(){
    localStorage.removeItem("tasks");

    tasks = [];

    renderTasks();
}