const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const tasksDiv = document.querySelector(".tasks");

//Create task-List container
const taskList = document.createElement("div");
taskList.classList.add("task-items");
tasksDiv.appendChild(taskList);

let parsedTasks = JSON.parse(localStorage.getItem("savedItem") || "[]"); //replaced hardcoded array with the parsedTasks
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
    if (item.checked === true) {
        p.style.textDecoration = "line-through";
    } else if (item.checked === false) {
        p.style.textDecoration = "";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("img-btn");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "/images/cross-red.png";
    deleteIcon.alt = "delete";
    deleteIcon.classList.add("delete-item");

    inputContainer.appendChild(createCheckbox);
    inputContainer.appendChild(p);
    newItem.appendChild(inputContainer);
    newItem.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteIcon);
    taskList.appendChild(newItem);

    let taskIndex = parsedTasks.length - 1;

    createCheckbox.addEventListener("change", () => {

        item.checked = createCheckbox.checked;
        console.log("item checked2", item.checked);

        if (item.checked === true) {
            createCheckbox.style.backgroundColor = "#C70039";
            p.style.textDecoration = "line-through";

        } else if (item.checked === false) {
            createCheckbox.style.backgroundColor = '';
            p.style.textDecoration = "";
        }
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
    });

    // Delete items when clicking on the button;
    //Focus on making it work after the reload
    deleteBtn.addEventListener("click", () => {

        let filteredArray = parsedTasks.filter(item => {
            return item.id !== taskIndex;
        })

        newItem.remove();
        parsedTasks = filteredArray; //Updating the amount of elements array in the parsedTasks array into the new one
        console.log("filtered array is2:", filteredArray)
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

    });

});

//Add to do list Item
addItem.addEventListener("click", () => {
    //Create new items when button is clicked
    let idLength = parsedTasks.length;
    let text = inputText.value;
    if (text) {
        itemData = {
            text,
            checked: false
        };

        itemData.id = idLength;
        console.log("item data is:", idLength);
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

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("img-btn");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "/images/cross-red.png";
        deleteIcon.alt = "delete";
        deleteIcon.classList.add("delete-item");

        inputContainer.appendChild(createCheckbox);
        inputContainer.appendChild(p);
        newItem.appendChild(inputContainer);
        newItem.appendChild(deleteBtn);
        deleteBtn.appendChild(deleteIcon);
        taskList.appendChild(newItem);


        parsedTasks.push(itemData);
        let taskIndex = parsedTasks.length - 1;
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        //
        createCheckbox.addEventListener("change", () => {
            parsedTasks[taskIndex].checked = createCheckbox.checked;

            if (parsedTasks[taskIndex].checked === true) {
                createCheckbox.style.backgroundColor = "#C70039";
                p.style.textDecoration = "line-through";

            } else if (parsedTasks[taskIndex].checked === false) {
                createCheckbox.style.backgroundColor = '';
                p.style.textDecoration = "none";
            }
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        });

        // Delete items when clicking on the button;
        deleteBtn.addEventListener("click", () => {

            let filteredArray = parsedTasks.filter(item => {
                return item.id !== taskIndex;
            })

            newItem.remove();
            parsedTasks = filteredArray; //Updating the amount of elements array in the parsedTasks array into the new one
            console.log("filtered array is2:", filteredArray)
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        });
    }

    inputText.value = "";
})
//work on delete button
//work on clear all button
//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//shorten code, create functions and remove repeated code