
const Taskinput= document.getElementById("taskInput");
const AddBtn = document.getElementById("addBtn");
const TaskList = document.getElementById("taskList");
const ClearAll = document.getElementById("clearAll");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [] ;

rendertask()

AddBtn.addEventListener("click", addTask);

function addTask() {
 
  const taskinput= Taskinput.value.trim()
    if(taskinput === ""){
        alert('Enter your task');
        return
    }
    if(tasks.length >= 6){
        confirm("you can't add task")
         return;
    }
    
    tasks.push(taskinput)
   
    
    rendertask()
    saveTasks()
    Taskinput.value = ""
    
}
function rendertask(){
     if(tasks.length > 0){
        ClearAll.style.display="block"
    }else{
         ClearAll.style.display="none"
    }
    TaskList.innerHTML=""
    tasks.forEach((task,index) => {
     let div= document.createElement('div')
        div.classList.add("task");
        div.innerHTML = 
        `
        <span>
        ${index + 1} ${task}</span>
        <button
          class="delete"
          onclick="deleteTask(${index})">
         Delete </button>`
         TaskList.appendChild(div)
    });
}
function deleteTask(index){
    if(confirm('are you sure')){
        tasks.splice(index,1)
        saveTasks();
        rendertask();
    }
    
}
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
function clearAll(){
    localStorage.removeItem(tasks)
    tasks=[]
    rendertask();
    saveTasks();
    
}