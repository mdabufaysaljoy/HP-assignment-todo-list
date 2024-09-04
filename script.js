
function addTodo(event) {
  event.preventDefault();
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText !== "") {
    const listItem = document.createElement("li");
    listItem.className = "flex justify-between items-center p-2 border-b";

    listItem.innerHTML += `
            <span>${todoText}</span>
            <div>
                <button class="edit-btn text-yellow-500">Edit</button>
                <button class="delete-btn text-red-500 ml-2">Delete</button>
            </div>
        `;

    document.getElementById("todo-list").appendChild(listItem);
    input.value = "";
  }
}

document.getElementById("add-btn").addEventListener("click", addTodo);

document.getElementById("todo-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    const listItem = e.target.closest("li");
    const span = listItem.querySelector("span");
    const currentText = span.textContent;

    span.innerHTML = `<input type="text" class="edit-input border rounded p-1" value="${currentText}">`;
    e.target.textContent = "Save";
    e.target.classList.remove("edit-btn");
    e.target.classList.add("save-btn");
  } else if (e.target.classList.contains("save-btn")) {
    const listItem = e.target.closest("li");
    const input = listItem.querySelector(".edit-input");
    const updatedText = input.value.trim();

    if (updatedText !== "") {
      listItem.querySelector("span").textContent = updatedText;
      e.target.textContent = "Edit";
      e.target.classList.remove("save-btn");
      e.target.classList.add("edit-btn");
    }
  } else if (e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest("li");
    listItem.remove();
  }
});
