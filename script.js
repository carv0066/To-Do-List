const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const taskList = document.querySelector(".task-items");
const radioBtn = document.querySelector(".radio-button");


//Add to do list Item
addItem.addEventListener("click", () => {
    console.log("button has been clicked!!");
    //Create new items when button is clicked

    if (inputText.value) {
        //If the value of the input isn't empty then add a to do list item
        const fragment = document.createDocumentFragment();
        const p = fragment
        const newItem = document.createElement("div");
        newItem.classList.add("item");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        const newLabel = document.createElement("label");
        newLabel.classList.add("item-text");
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "/images/cross-red.png";
        deleteIcon.alt = "delete";
        deleteIcon.classList.add("delete-item");
        p.textContent = inputText.value; //the text written on the input
        taskList.appendChild(newItem);
        newItem.appendChild(checkbox);
        newItem.appendChild(newLabel);
        newLabel.appendChild(fragment);
        newItem.appendChild(deleteIcon);
        inputText.value = "";

        //Add a striketrough whenever the button is clicked 
        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                newItem.style.textDecoration = "line-through";
            } else {
                newItem.style.textDecoration = "none";
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


//Stlye Checkbox
//add in corner: completed and deleted
//the to do list should be saved even after reloading the page (local storage) same with the completed and deleted
//Make icon on radio button a checkmark
//Add a clear all button
//When Clicking the enter button it should work the same way as a click
//Add Css animations to make everything look cleaner