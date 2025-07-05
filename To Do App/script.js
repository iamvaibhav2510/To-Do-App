function addTask() {
    const input = document.getElementById("name");
    const taskText = input.value.trim();
    const taskList = document.getElementById("taskList");

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Optional: style list item
    li.style.listStyle = "none";
    li.style.fontSize = "1.2em";
    li.style.margin = "10px 0";
    li.style.padding = "10px";
    li.style.border = "1px solid #008793";
    li.style.borderRadius = "10px";
    li.style.cursor = "pointer";
    li.style.backgroundColor = "#f0f0f0";

    // Remove task on click
    li.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    input.value = ""; // Clear input
}