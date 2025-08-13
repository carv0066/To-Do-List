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

    //I need to push the data and then find  modify it
    console.log("item date being pushed reloaded", parsedTasks);


    console.log("item checked1", item.checked);
    //problem is, if item is already true, whehn i click on the checkbox, it turns it to true again b3fore turning it false,
    //thats why it has so many issues
    //another provlem is, if the checkbox is checked and i reload the page when y try to uncheck it the color red stays, it doesnt dissapear

    createCheckbox.addEventListener("change", () => {
        item.checked = createCheckbox.checked;
        console.log("item", item);
        console.log("item checked2", item.checked);
        if (item.checked === true) {
            console.log("item has been checked previously")
            createCheckbox.style.backgroundColor = 'red';
        } else if (item.checked === false) {
            createCheckbox.style.backgroundColor = '';
        }
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
    });

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
        // Capture the index of each object in the array of parsedTaks to know which one to modify
        const taskIndex = parsedTasks.length - 1;
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        createCheckbox.addEventListener("click", () => {
            parsedTasks[taskIndex].checked = createCheckbox.checked;
            console.log("taskIndex1", taskIndex);
            if (parsedTasks[taskIndex].checked === true) {
                createCheckbox.style.backgroundColor = 'red';
            } else if (parsedTasks[taskIndex].checked === false) {
                createCheckbox.style.backgroundColor = '';
            }
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        });


        console.log(parsedTasks, "is being parsed")
        inputText.value = "";

    }
})
//Work on color for checkboxes, making sure it saves on localStorage
//work on delete button
//work on clear all button
//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//shorten code, create functions and remove repeated code