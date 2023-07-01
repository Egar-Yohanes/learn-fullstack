let todos = [
    {
      id: 1,
      task: "Belajar js basic",
      status: true,
    },
    {
      id: 2,
      task: "Kerjakan latihan",
      status: false,
    },
    {
      id: 3,
      task: "Makan pagi",
      status: true,
    },
  ];
  
  function showItems() {
    let output = "To Do list: \n";
    for (let i = 0; i < todos.length; i++) {
      let status = "[ ]";
      if (todos[i].status) {
        status = "[X]";
      }
      output += status + " " + todos[i].id + ". " + todos[i].task + "\n";
    }
    console.log(output);
  }
  
  function addTodoItem(task, status) {
    let newTodo = {
      id: todos.length + 1,
      task: task,
      status: status,
    };
    todos.push(newTodo);
  }
  
  function removeTodoItem(id) {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        newTodos.push(todos[i]);
      }
    }
    todos = newTodos;
  }
  
  function editTodoItem(id, newTask, newStatus) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].task = newTask;
        todos[i].status = newStatus;
        break;
      }
    }
  }
  
  function toggleTodoStatus(id) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        if (todos[i].status) {
          todos[i].status = false;
        } else {
          todos[i].status = true;
        }
        break;
      }
    }
  }
  
  addTodoItem("Belajar OOP dan AVC", true);
  editTodoItem(2, "Kerjakan Project", false);
  removeTodoItem(2);
  toggleTodoStatus(4);
  showItems();
  