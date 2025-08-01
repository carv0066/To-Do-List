const addItem = document.querySelector(".add-item");
const inputText  = document.querySelector(".list-input");
const taskList =  document.querySelector(".task-items");

addItem.addEventListener("click", () => {
    console.log("button has been clicked!!");
    //Create new items when button is clicked
    const fragment = document.createDocumentFragment();
    const p = fragment
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    const newInput = document.createElement("input");
    newInput.type = "radio";
    const newLabel = document.createElement("label");
    newLabel.classList.add("item-text");
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/cross-red.png";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-item");
    p.textContent = inputText.value;//the text written on the input
    taskList.appendChild(newItem);
    newItem.appendChild(newInput);
    newItem.appendChild(newLabel);
    newLabel.appendChild(fragment);
    newItem.appendChild(deleteIcon);
    inputText.value = "";


})


//when add button is clicked, display content in the task list format example
//make inpu text disappear after clicking add
//after clicking on the radio button, add a striketrough
//the to do list should be saved even after reloading the page (local storage)
//Make icon on radio button a checkmark
//Add a clear all button
