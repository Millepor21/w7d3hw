const toDoForm = document.querySelector("#to-do-form");

let idGen = 0;

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoItem = getToDoItem();
  console.log(toDoItem);
  addToDoItem(toDoItem);
});

function getToDoItem() {
  return document.querySelector("#to-do").value;
}
const toDoContainer = document.getElementById("to-do-container");

function addToDoItem(item) {
  const listItem = document.createElement("li");
  console.log(typeof item);
  listItem.innerText = item.charAt(0).toUpperCase() + item.slice(1);
  listItem.style.fontSize = "x-large"

  listItem.id = idGen;
  idGen++;
  console.log(listItem);
  listItem.addEventListener("click", () => {
    deleteToDoItem(listItem.id);
  });
  toDoContainer.appendChild(listItem);
}

function deleteToDoItem(id) {
  console.log(id);
  let child = document.getElementById(id);
  toDoContainer.removeChild(child);
}   