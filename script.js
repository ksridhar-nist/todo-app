function addTask() {
  let input = document.getElementById("todo-input");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle done on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
