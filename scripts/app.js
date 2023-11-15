"use strict";



window.onload = () => {

    const states = document.getElementById("states");
    const parktype = document.getElementById("parktype");
    addLocationsToDropdown();
    addNationalParksToDropdown();
}

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", displayNationalParkByParkType);
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

function addLocationsToDropdown() {
    // Get the dropdown element by its ID

    // Use for-each to iterate over the array
    locationsArray.forEach(function(location) {
        // Create a new option element
        let option = document.createElement("option");

        // Set the value and text content for the new option
        option.value = location;
        option.textContent = location

        // Add the new option to the dropdown
        states.appendChild(option);
    });
}

function addNationalParksToDropdown() {
    // Get the dropdown element by its ID
    
    // Use for-each to iterate over the array
    nationalParksArray.forEach(function (park) {
        // Create a new option element
        let option = document.createElement("option");

        // Set the value and text content for the new option
        option.value = park.LocationName;
        option.textContent = park.LocationName;

        // Add the new option to the dropdown
        parktype.appendChild(option);
    });
}

const listOfParks = document.getElementById("listOfParks");
function displayNationalParkByState() {
    const selectedValue = states.value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedValue)
    
    filteredParks.forEach(park => {
        listOfParks.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${park.imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${park.LocationName}</h5>
                <p class="card-text">Phone: ${park.Phone}</p>
                <p class="card-text">Fax: ${park.Fax}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    });
}

const listOfParkType = document.getElementById("listOfParkType");
function displayNationalParkByParkType() {
    const selectedValue = parktype.value;
    const filteredParks = nationalParksArray.filter(park => park.LocationName === selectedValue)

    filteredParks.forEach(park => {
        listOfParks.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${park.imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${park.LocationName}</h5>
                <p class="card-text">Phone: ${park.Phone}</p>
                <p class="card-text">Fax: ${park.Fax}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    })
}

init();