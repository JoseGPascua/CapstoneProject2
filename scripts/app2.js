"use strict";

window.onload = () => {
    addMountainToDropdown();
    init();
}

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", displayMountain);
}

// Function to toggle the sidebar
function toggleSidebar() {
    // Create variables
    let sidebar = document.getElementById("side-nav");      // Grabs the ID of side-nav
    let sidebarStyle = window.getComputedStyle(sidebar);    // Method that finds the style property values

    // If-else statement that changes the margin of the sidebar depending on the current margin-left value
    if (sidebarStyle.getPropertyValue("margin-left") === "-250px") {
        sidebar.style.marginLeft = "0";
    } else {
        sidebar.style.marginLeft = "-250px";
    }
}

function addMountainToDropdown() {
    
    const mountainDropdown = document.getElementById("mountains");

    mountainsArray.forEach(function(mountain) {

        let option = document.createElement("option")

        option.value = mountain.name;
        option.textContent = mountain.name;

        mountainDropdown.appendChild(option);
    })
}

const listOfMountains = document.getElementById("listOfMountains");

function displayMountain() {
    const selectedMountain = document.getElementById("mountains").value;
    console.log("Selected mountain:", selectedMountain);

    const filteredMountains = mountainsArray.filter(mountain => mountain.name === selectedMountain);
    console.log("Filtered mountains:", filteredMountains);
    let mountainCardHTML = "";

    filteredMountains.forEach(mountain => {
        mountainCardHTML += `<div class="card" style="width: 18rem;">
            <img src="${mountain.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mountain.name}</h5>
                <p class="card-text">Description: ${mountain.desc}</p>
                <p class="card-text">Effort: ${mountain.effort}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    });

    listOfMountains.innerHTML = mountainCardHTML;
}

