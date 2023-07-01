// TODO APPS

/**
 * Buatlah sebuah aplikasi todo apps dan menggunakan function2 berikut.
 *
 * 1. showTodos()
 * - Menampilkan semua list todo
 *
 * Todo List:
 * 1. [X] Belajar js basic
 * 2. [ ] Kerjakan latihan
 * 3. [X] Makan pagi
 *
 * 2. submitTodo(task)
 * - Menambahkan task ke dalam list
 *
 * 3. removeTask(id)
 * - Menghapus task berdasarkan id
 *
 * 4. editTask(id, task)
 * - Mengganti task berdasarkan id
 *
 * 5. changeStatus(id)
 * - Mengubah status dari true ke false, dari false ke true
 */

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
  

//Buatlah fungsi untuk menampilkan semua list to do
  function showItems() {
    console.log("To Do list: ");
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].status) {
        console.log("[X] " + todos[i].id + ". " + todos[i].task);
      } else {
        console.log("[ ] " + todos[i].id + ". " + todos[i].task);
      }
    }
  }
 //Buatlah fungsi untuk menambahkan todos ke dalam list 
  function addTodoItem(task, status) {
    let newTodo = {
      id: todos.length + 1,
      task: task,
      status: status,
    };
    todos.push(newTodo);
  }
 //Buatlah fungsi untuk remove todo dari list 
  function removeTodoItem(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }
  
//Buatlah fungsi untuk remove todo dari list
  function editTodoItem(id, newTask, newStatus) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].task = newTask;
        todos[i].status = newStatus;
        break;
      }
    }
  }
//Buatlah fungsi untuk membuat tombol toggle dari true ke false / dari false ke true
  function toggleTodoStatus(id) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].status = !todos[i].status;
        break;
      }
    }
  }

//Invoke function
  addTodoItem("Belajar OOP dan AVC", true);
  editTodoItem(2, "Kerjakan Project", false);
  removeTodoItem(2)
  toggleTodoStatus(4);
  showItems();
  






