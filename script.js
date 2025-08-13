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
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-text");

    const createCheckbox = document.createElement("input");
    createCheckbox.checked = item.checked;
    //Your data says item.checked = true, But the new checkbox defaults to checked = false
    //So the reason for the double click was that the new checkboxes had a default state of false so even if true was saved in the local storage, visually it would go back to false until the second click
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
    console.log("item date being pushed reloaded", item);
    //First Click seems to always be true for some reason, check why
    createCheckbox.addEventListener("change", () => {
        item.checked = createCheckbox.checked;
        console.log("item checked2", item.checked);
        if (item.checked === true) {
            createCheckbox.style.backgroundColor = '#C70039';
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
        // Capture the index of each object in the array of parsedTaks to know which one to modify
        const taskIndex = parsedTasks.length - 1;
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        createCheckbox.addEventListener("change", () => {
            parsedTasks[taskIndex].checked = createCheckbox.checked;
            if (parsedTasks[taskIndex].checked === true) {
                createCheckbox.style.backgroundColor = '#C70039';
            } else if (parsedTasks[taskIndex].checked === false) {
                createCheckbox.style.backgroundColor = '';
            }
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        });

        inputText.value = "";
    }
})
//Add striketrough with the red color
//work on delete button
//work on clear all button
//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//shorten code, create functions and remove repeated code