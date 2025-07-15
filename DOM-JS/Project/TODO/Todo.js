function loadTodo () {
  const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};
  console.log(todos);
  return todos;
};

function addTodoToLocalStorage (todoValue) {
  const todos = loadTodo();
  todos.todoList.push(todoValue);
  localStorage.setItem("todos",JSON.stringify(todos));
};

function removeItem(){
 localStorage.removeItem(todoList);
}


function displayTODO (todoValue) {
  const myList = document.getElementById("tasklist"); 
  const todoItem = document.createElement("li");
  todoItem.textContent = todoValue;

  const wrapper = document.createElement("div");
  wrapper.classList.add("todobutton");

  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.classList.add("Editbtn");

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("Deletebtn");

    deletebtn.addEventListener("click", () => {       
    });

  wrapper.appendChild(editbtn);
  wrapper.appendChild(deletebtn);
  todoItem.appendChild(wrapper);
  myList.appendChild(todoItem);
  
}
 


document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("inputTodo");

  const submitButton = document.getElementById("addTodo");

  const myList = document.getElementById("tasklist"); 

  submitButton.addEventListener("click", (event) => {
    const todoValue = inputTodo.value;

    if(todoValue == ''){
      alert("Please Add Some Todo's");
    }
    else{
      addTodoToLocalStorage(todoValue);
       displayTODO(todoValue);
    }
    
  });

  inputTodo.addEventListener("change", (event) => {
    const todoText = event.target.value;

    event.target.value = todoText.trim();
    console.log(event.target.value);
  });
  
  const todos =loadTodo();

  todos.todoList.forEach(todo => {
    displayTODO(todo);   
  });
});