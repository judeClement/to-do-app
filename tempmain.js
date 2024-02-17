document.addEventListener("DOMContentLoaded", function() {
  const todoLink = document.getElementById("todo-link");
  const mainContent = document.getElementById("main-content");

  // Fetch todo list from the API
  function fetchTodoList() {
      return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE) {
                  if (xhr.status === 200) {
                      const todoList = JSON.parse(xhr.responseText);
                      resolve(todoList);
                  } else {
                      reject("Failed to fetch todo list");
                  }
              }
          };
          xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
          xhr.send();
      });
  }

  // Display the todo list
  function displayTodoList(todoList) {
      mainContent.innerHTML = ""; // Clear existing content

      const ul = document.createElement("ul");

      todoList.forEach(todo => {
          const li = document.createElement("li");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = todo.completed;
          li.appendChild(checkbox);
          li.appendChild(document.createTextNode(todo.title));
          ul.appendChild(li);
      });

      mainContent.appendChild(ul);
  }

  // Show alert when 5 checkboxes are manually selected
  function showAlertWhenFiveSelected() {
      return new Promise((resolve, reject) => {
          const checkboxes = document.querySelectorAll('input[type="checkbox"]');
          let selectedCount = 0;
          checkboxes.forEach(checkbox => {
              checkbox.addEventListener("change", function() {
                  if (this.checked) {
                      selectedCount++;
                      if (selectedCount === 5) {
                          resolve("Congrats. 5 Tasks have been Successfully Completed");
                      }
                  } else {
                      selectedCount--;
                  }
              });
          });
      });
  }

  // Event listener for Todo List link
  todoLink.addEventListener("click", function(event) {
      event.preventDefault();
      fetchTodoList()
          .then(todoList => {
              displayTodoList(todoList);
              return showAlertWhenFiveSelected();
          })
          .then(message => alert(message))
          .catch(error => console.error(error));
  });
});






//////



// document.addEventListener("DOMContentLoaded", function() {
//   const mainContent = document.getElementById("main-content");

//   // Fetch todo list from the API
//   function fetchTodoList() {
//       return new Promise((resolve, reject) => {
//           const xhr = new XMLHttpRequest();
//           xhr.onreadystatechange = function() {
//               if (xhr.readyState === XMLHttpRequest.DONE) {
//                   if (xhr.status === 200) {
//                       const todoList = JSON.parse(xhr.responseText);
//                       resolve(todoList);
//                   } else {
//                       reject("Failed to fetch todo list");
//                   }
//               }
//           };
//           xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//           xhr.send();
//       });
//   }

//   // Display the todo list
//   function displayTodoList(todoList) {
//       mainContent.innerHTML = ""; // Clear existing content

//       const ul = document.createElement("ul");

//       todoList.forEach(todo => {
//           const li = document.createElement("li");
//           const checkbox = document.createElement("input");
//           checkbox.type = "checkbox";
//           checkbox.checked = todo.completed;
//           li.appendChild(checkbox);
//           li.appendChild(document.createTextNode(todo.title));
//           ul.appendChild(li);
//       });

//       mainContent.appendChild(ul);
//   }

//   // Show alert when 5 checkboxes are manually selected
//   function showAlertWhenFiveSelected() {
//       return new Promise((resolve, reject) => {
//           const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//           let selectedCount = 0;
//           checkboxes.forEach(checkbox => {
//               checkbox.addEventListener("change", function() {
//                   if (this.checked) {
//                       selectedCount++;
//                       if (selectedCount === 5) {
//                           resolve("Congrats. 5 Tasks have been Successfully Completed");
//                       }
//                   } else {
//                       selectedCount--;
//                   }
//               });
//           });
//       });
//   }

//   // Initial fetch when the page loads
//   fetchTodoList()
//       .then(todoList => {
//           displayTodoList(todoList);
//           return showAlertWhenFiveSelected();
//       })
//       .then(message => alert(message))
//       .catch(error => console.error(error));
// });



/////

