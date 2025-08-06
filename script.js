const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const tasksDiv = document.querySelector(".tasks");


//Create task-List container
const taskList = document.createElement("div");
taskList.classList.add("task-items");
tasksDiv.appendChild(taskList);

taskList.innerHTML = localStorage.getItem("savedItem"); //Outaide of the event listener so that the local storage info gets read
//Add to do list Item
addItem.addEventListener("click", () => {
    console.log("button has been clicked!!");
    //Create new items when button is clicked
    if (inputText.value) {
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
        taskList.appendChild(newItem);

        const item = taskList.innerHTML; //store the whole item as a string
        localStorage.setItem("savedItem", item);

        inputText.value = "";




        //Add a striketrough whenever the button is clicked 
        checkbox.addEventListener("click", () => {
            localStorage.setItem("checkboxState", checkbox.checked);
            console.log('Checkbox state saved:', checkbox.checked);

            const savedState = localStorage.getItem("checkboxState")

            if (savedState !== null) { //Checks if something was saved in the storage before
                checkbox.checked = (savedState === "true");
                console.log('Checkbox state loaded:', checkbox.checked);
            }

            if (checkbox.checked) {
                newItem.style.textDecoration = "line-through";
                newLabel.style.color = "#8f8b8bc8";
            } else {
                newItem.style.textDecoration = "none";
                newLabel.style.color = "#0b2540";
            }
        })

        //Delete item from list
        deleteIcon.addEventListener("click", () => {
            console.log("item has been deleted");
            newItem.remove();
        })

    } else {
        console.log("input is empty");
    }

})

//I would need to save the item, whether the item has been completed, and whehter the item has been deleted, three things.

//the to do list should be saved even after reloading the page (local storage) same with the completed and deleted
//add in corner: completed and deleted
//Make icon on radio button a checkmark(use images)
//Add a clear all button
//When Clicking the enter button it should work the same way as a click
//Use CSS to style app 