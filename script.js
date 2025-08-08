const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const tasksDiv = document.querySelector(".tasks");


//Create task-List container
const taskList = document.createElement("div");
taskList.classList.add("task-items");
tasksDiv.appendChild(taskList);


const parsedTasks = JSON.parse(localStorage.getItem("savedItem") || "[]"); //replaced hardcoded array with the parsedTasks
console.log("parsed Tasks", parsedTasks);


parsedTasks.forEach(item => {
    console.log("item", item.text);
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-text");

    const createCheckbox = document.createElement("input");
    createCheckbox.type = "checkbox";
    createCheckbox.classList.add("checkbox");

    const p = document.createElement("p");
    p.classList.add("item-text");
    p.textContent = item.text; //the text inside the array

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/cross-red.png";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-item");

    inputContainer.appendChild(createCheckbox);
    inputContainer.appendChild(p);
    newItem.appendChild(inputContainer);
    newItem.appendChild(deleteIcon);
    taskList.appendChild(newItem);
});

//Add to do list Item
addItem.addEventListener("click", () => {
    //Create new items when button is clicked
    let text = inputText.value;
    if (text) {
        itemData = {
            text,
            checked: false
        };
        //If the value of the input isn't empty then add a to do list item
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-text");

        const createCheckbox = document.createElement("input");
        createCheckbox.type = "checkbox";
        createCheckbox.classList.add("checkbox");

        const p = document.createElement("p");
        p.classList.add("item-text");
        p.textContent = inputText.value; //the text written on the input

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "/images/cross-red.png";
        deleteIcon.alt = "delete";
        deleteIcon.classList.add("delete-item");

        inputContainer.appendChild(createCheckbox);
        inputContainer.appendChild(p);
        newItem.appendChild(inputContainer);
        newItem.appendChild(deleteIcon);
        taskList.appendChild(newItem);


        //I need to push the data and then find  modify it
        parsedTasks.push(itemData);
        console.log("item date being pushed", itemData);
        let propertyToChange = "checked";
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        createCheckbox.addEventListener("click", () => {
            itemData.checked = createCheckbox.checked;
            parsedTasks[propertyToChange] = itemData.checked;
            console.log("the checked value is", itemData.checked);
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        }) 
        //I need to now save the checkbox checked value to be saved when reloading the page,is saved correctly in the local storage but its not being saved correctly when it comes to displaying it


        inputText.value = "";

    }
})
//work on checked button with states of true or false
//work on delete button
//work on clear all button
//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//shorten code, create functions and remove repeated code

// const checkbox = document.querySelectorAll(".checkbox");

// checkbox.forEach(box => {
//     box.addEventListener("change", () => {
//         itemData.checked = box.checked;
//         console.log("checkboxState", box.checked);
//         console.log("item data 2", itemData.checked);
//         localStorage.setItem("checkbox", box.checked);
//         //currently it only works after reoading the page, so if i add an item imediatly it doesn't really log it in the storage
//         //currently item date 1 and item data 2 can't be checked at the same time and i need that
//         //Also this is a good try but I'm still doing it wrong, I already have a local storage where im saving both the text and the checked, i need to update that not a separate key
//     })

// });


//     //Delete item from list
//     deleteIcon.addEventListener("click", () => {
//         console.log("item has been deleted");
//         newItem.remove();
//     })

// } else {
//     console.log("input is empty");
// }


//add in corner: completed and deleted
//Make icon on radio button a checkmark(use images)
//Add a clear all button
//When Clicking the enter button it should work the same way as a click
//Use CSS to style app 