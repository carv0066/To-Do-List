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

    createCheckbox.addEventListener("click", () => {
        item.checked = createCheckbox.checked;
        console.log("item", item);
        if (item.checked === true) {
            createCheckbox.style.backgroundColor = 'green';
        } else if (item.checked === false) {
            createCheckbox.style.backgroundColor = 'blue';
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
                    createCheckbox.style.backgroundColor = 'green';
                } else if (parsedTasks[taskIndex].checked === false) {
                    createCheckbox.style.backgroundColor = 'blue';
                }
                localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        });

        //Only the most recent checkbox added works, once i reload the page the checked value deosnt update
        //I need to now save the checkbox checked value to be saved when reloading the page,is saved correctly in the local storage but its not being saved correctly when it comes to displaying it


        console.log(parsedTasks, "is being parsed")
        inputText.value = "";

    }
})
//work on checked button with states of true or false
//work on delete button
//work on clear all button
//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//shorten code, create functions and remove repeated code