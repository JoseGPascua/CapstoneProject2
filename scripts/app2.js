"use strict";

// Load these functions as soon as the window loads
window.onload = () => {
    // Functions to add options to dropdown
    addMountainToDropdown();

    // Create variable for button and add an event listener to it
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

// Function to add mountain to the dropdown
function addMountainToDropdown() {
    
    const mountainDropdown = document.getElementById("mountains");  // Get dropdown element by ID
    // Use for-each to iterate over the array
    mountainsArray.forEach(function(mountain) {

        let option = document.createElement("option")       // Create a new option element

        // Set the value and text content for the new option
        option.value = mountain.name;
        option.textContent = mountain.name;

        // Add the new option to the dropdown
        mountainDropdown.appendChild(option);
    })
}

// Function that creates the card elements by taking in an argument passed by the displayMountain function
function createMountainCard(mountain) {
    return `<div class="card" style="width: 28rem;">
        <img src="${mountain.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title"><b>${mountain.name}</b></h4>
            <p class="card-text"><b>Description:</b> ${mountain.desc}</p>
            <p class="card-text"><b>Elevation:</b> ${mountain.elevation} feet [${Math.round((mountain.elevation)*0.3048)} metres]</p>
            <p class="card-text"><b>Coordinates:</b> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
        </div>
    </div>`;
}

// Function to display the mountain
function displayMountain() {
    // Grabs the ID of the HTML element that will be used to place the card in
    const listOfMountains = document.getElementById("listOfMountains");
    // Variable that stores the value from the dropdown
    const selectedMountain = document.getElementById("mountains").value;
    // Variable that stores the mountain object that was filtered using the filter method specficially with the same value as the selectedMountain
    const filteredMountains = mountainsArray.filter(mountain => mountain.name === selectedMountain);
    // Variable that stores the object that is turned into an HTML card after it is passed onto the createMountainCard function through the map method
    const mountainCardHTML = filteredMountains.map(mountain => createMountainCard(mountain));
    // Displays the Card onto the HTML page
    listOfMountains.innerHTML = mountainCardHTML;
};