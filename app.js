const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = todoInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = task;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    todoInput.value = "";
});