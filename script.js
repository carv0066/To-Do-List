const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const tasksDiv = document.querySelector(".tasks");


//Create task-List container
const taskList = document.createElement("div");
taskList.classList.add("task-items");
tasksDiv.appendChild(taskList);

function createTaskElement() {
    //If the value of the input isn't empty then add a to do list item
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-text");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const p = document.createElement("p");
    p.classList.add("item-text");
    p.textContent = inputText.value; //the text written on the input

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/cross-red.png";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-item");

    inputContainer.appendChild(checkbox);
    inputContainer.appendChild(p);
    newItem.appendChild(inputContainer);
    newItem.appendChild(deleteIcon);

    return newItem; 
}


const parsedTasks = JSON.parse(localStorage.getItem("savedItem"));//replaced hardcoded array with the parsedTasks

window.addEventListener("DOMContentLoaded", () => {
    parsedTasks.forEach(item => {
        console.log("item", item);
        const taskElement = createTaskElement(item);
        taskList.appendChild(taskElement);//Element wil now show up even after reloading page


    });
})
//Add to do list Item
addItem.addEventListener("click", () => {
    //Create new items when button is clicked
    const text = inputText.value;

    if (text) {
        const itemData = { text, checked: true };
        const taskElement = createTaskElement(itemData);
        taskList.appendChild(taskElement);

        parsedTasks.push(itemData);//I was pushing them to tasks before and thats why it wasn't saving, it was rewriting my local storage everytime
        console.log("tasks",parsedTasks)

        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));//Replaced the hardcoded tasks from here too
        console.log("storage:", localStorage.setItem("savedItem", JSON.stringify(parsedTasks)));

        inputText.value = "";

    }})


    //     //Add a striketrough whenever the button is clicked 
    //     checkbox.addEventListener("click", () => {
    //         localStorage.setItem("checkboxState", checkbox.checked);
    //         console.log('Checkbox state saved:', checkbox.checked);

    //         const savedState = localStorage.getItem("checkboxState")

    //         if (savedState !== null) { //Checks if something was saved in the storage before
    //             checkbox.checked = (savedState === "true");
    //             console.log('Checkbox state loaded:', checkbox.checked);
    //         }

    //         if (checkbox.checked) {
    //             newItem.style.textDecoration = "line-through";
    //             newLabel.style.color = "#8f8b8bc8";
    //         } else {
    //             newItem.style.textDecoration = "none";
    //             newLabel.style.color = "#0b2540";
    //         }
    //     })

    //     //Delete item from list
    //     deleteIcon.addEventListener("click", () => {
    //         console.log("item has been deleted");
    //         newItem.remove();
    //     })

    // } else {
    //     console.log("input is empty");
    // }
//I would need to save the item, whether the item has been completed, and whehter the item has been deleted, three things.

//the to do list should be saved even after reloading the page (local storage) same with the completed and deleted
//add in corner: completed and deleted
//Make icon on radio button a checkmark(use images)
//Add a clear all button
//When Clicking the enter button it should work the same way as a click
//Use CSS to style app 