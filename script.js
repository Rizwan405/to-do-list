const input = document.querySelector("#input");
const submitButton = document.querySelector(".submit-button");
const parent = document.querySelector(".main-content");
const tasks = ["boil eggs", "make pasta", "purchase grocery"];
// Function to create a new task element
function createTaskElement(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("item");
  taskElement.innerHTML = `
    <input type="checkbox" />
    <p>${task}</p>
    <button class="item-button">
      <i class="ri-eraser-line"></i>
    </button>`;
  return taskElement;
}

// Function to update the task list
function updateList(arr) {
  parent.innerHTML = ""; // Clear previous list
  arr.forEach((task) => {
    const taskElement = createTaskElement(task);
    parent.appendChild(taskElement);
  });
}

updateList(tasks);

submitButton.addEventListener("click", function () {
  if (!input.value) return;
  tasks.push(input.value);
  updateList(tasks);
  input.value = ""; // Clear input field
});

// Event delegation for task actions
parent.addEventListener("click", function (e) {
  const target = e.target;
  if (target.type === "checkbox") {
    target.nextElementSibling.classList.toggle("cross");
  } else if (target.classList.contains("ri-eraser-line")) {
    target.parentElement.parentElement.remove();
  }
});
