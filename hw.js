const toDoForm = document.querySelector("#to-do-form");

let idGen = 0;

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoItem = getToDoItem();
  const toDoTitle = getToDoTitle();
  addToDoEntry(toDoTitle, toDoItem);
});

function getToDoTitle() {
  return document.querySelector("#to-do-title").value;
}
function getToDoItem() {
  return document.querySelector("#to-do-item").value;
}
const toDoContainer = document.getElementById("to-do-container");

function addToDoEntry(title, item) {
  const listItem = document.createElement("li");
  listItem.innerText =`${titleCase(title)}: ${item.charAt(0).toUpperCase() + item.slice(1)}`
  listItem.style.fontSize = "medium";
  listItem.id = idGen;
  idGen++;
  console.log(listItem);
  listItem.addEventListener("click", () => {
    deleteToDoItem(listItem.id);
  });
  toDoContainer.appendChild(listItem);
}

function deleteToDoItem(id) {
  let child = document.getElementById(id);
  toDoContainer.removeChild(child);
}

function titleCase(astring) {
    let output = ''
    const wordsArray = astring.split(' ')
    for (const word of wordsArray) {
      output += word[0].toUpperCase() + word.substring(1) + ' '
    }
    return output.trim()
  }