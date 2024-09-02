const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearBtn = document.querySelector(".clear-button");

function toggleClearButton() {
    if (listContainer.getElementsByTagName("li").length === 0) {
        console.log("No list items.")
        clearBtn.style.cssText = "display: none;";
    } else {
        clearBtn.style.cssText = "display: flex;";
    }
}

function addTask() {
    if (input.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    input.value = "";
    saveData();
    toggleClearButton();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        // toggleClearButton();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        toggleClearButton();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function existingList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function clearList() {
    while (listContainer.getElementsByTagName("li").length > 0) {
        listContainer.removeChild(listContainer.getElementsByTagName("li")[0]);
    }

    saveData();
    toggleClearButton();
}

existingList();