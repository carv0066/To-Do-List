const addItem = document.querySelector(".add-item");
const inputText = document.querySelector(".list-input");
const tasksDiv = document.querySelector(".tasks");
const deleteAll = document.querySelector(".delete-all");

//Create task-List container
const taskList = document.createElement("div");
taskList.classList.add("task-items");
tasksDiv.appendChild(taskList);
let newItem = document.createElement("div");

let parsedTasks = JSON.parse(localStorage.getItem("savedItem") || "[]"); //replaced hardcoded array with the parsedTasks
console.log("parsed Tasks", parsedTasks);

parsedTasks.forEach(item => {
    const newItem = document.createElement("div");
    newItem.classList.add("item");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-text");

    const createCheckbox = document.createElement("input");
    createCheckbox.checked = item.checked;
    //reason for the double click was that the new checkboxes had a default state of false so even if true was saved in the local storage, visually it would go back to false until the second click
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
    deleteBtn.addEventListener("click", () => {
        let filteredArray = parsedTasks.filter(itemId => {
            return itemId.id !== item.id;
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
        const itemData = {
            text,
            checked: false
        };

        itemData.id = idLength;
        console.log("item data is:", idLength);
        //If the value of the input isn't empty then add a to do list item
        let newItem = document.createElement("div");
        newItem = document.createElement("div");
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
        localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        let completedItems = document.querySelector(".completed");
        let completedItemsNumber = parseInt(completedItems.textContent);
        createCheckbox.addEventListener("change", () => {
            itemData.checked = createCheckbox.checked;

            if (itemData.checked === true) {
                createCheckbox.style.backgroundColor = "#C70039";
                p.style.textDecoration = "line-through";

                completedItemsNumber++;
                console.log("completed items", completedItemsNumber);
                console.log("item has been completed");

            } else if (itemData.checked === false) {
                createCheckbox.style.backgroundColor = '';
                p.style.textDecoration = "none";
            }
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));
        });

        // Delete items when clicking on the button;
        deleteBtn.addEventListener("click", () => {
            let filteredArray = parsedTasks.filter(itemId => {
                return itemId.id !== itemData.id;
            })

            newItem.remove();
            parsedTasks = filteredArray; //Updating the amount of elements array in the parsedTasks array into the new one
            localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

        });

    }

    inputText.value = "";
})


//work on Clear all button
deleteAll.addEventListener("click", () => {
    taskList.innerHTML = "";
    parsedTasks.splice(0, parsedTasks.length)
    console.log("parsed Tasks all", parsedTasks)
    localStorage.setItem("savedItem", JSON.stringify(parsedTasks));

})

//Work on score to track completed, and deleted, and maybe it gets reset with a button option for that
//if checkbox is checked, increase completed number


//if checkbox is not checked, decrease number
//if deleted button is clicked, track deleted number
//save to loca storage too


//shorten code, create functions and remove repeated code