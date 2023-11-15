"use strict";

window.onload = () => {
    addLocationsToDropdown();
    addNationalParksToDropdown();
    addTypeOfParkToDropdown()
}

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", filterDropdown);
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
    const states = document.getElementById("states");
    // Use for-each to iterate over the array
    locationsArray.forEach(function(location) {
        // Create a new option element
        let option = document.createElement("option");

        // Set the value and text content for the new option
        option.value = location;
        option.textContent = location;

        // Add the new option to the dropdown
        states.appendChild(option);
    });
}

function addTypeOfParkToDropdown() {
    // Get the dropdown element by its ID
    const parkType = document.getElementById("parkType");
    // Use for-each to iterate over the array
    parkTypesArray.forEach(function(typeOfPark) {
        // Create a new option element
        let option = document.createElement("option");

        // Set the value and text content for the new option
        option.value = typeOfPark;
        option.textContent = typeOfPark;

        // Add the new option to the dropdown
        parkType.appendChild(option);
    });
}

function addNationalParksToDropdown() {
    // Get the dropdown element by its ID
    const locationName = document.getElementById("locationName");
    // Use for-each to iterate over the array
    nationalParksArray.forEach(function (park) {
        // Create a new option element
        let option = document.createElement("option");

        // Set the value and text content for the new option
        option.value = park.LocationName;
        option.textContent = park.LocationName;

        // Add the new option to the dropdown
        locationName.appendChild(option);
    });
}

function createNationalParkCard(park) {

    return `<div class="card my-2 mx-2" style="width: 18rem;">
        <img src="${park.imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${park.LocationName}</h5>
            <p class="card-text">Phone: ${park.Phone}</p>
            <p class="card-text">Fax: ${park.Fax}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;
}

function displayNationalParkLocationName(selectedValue) {
    const filteredParks = nationalParksArray.filter(park => park.LocationName === selectedValue);
    return filteredParks.map(park => createNationalParkCard(park));
}

function displayNationalParkByState(selectedValue) {
    const filteredParks = nationalParksArray.filter(park => park.State === selectedValue);
    return filteredParks.map(park => createNationalParkCard(park)).join("");
}

function displayNationalParkByParkType(selectedValue) {
    const filteredParks = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedValue.toLowerCase()));
    return filteredParks.map(park => createNationalParkCard(park)).join("");
}

// Filtering function based on dropdown selections
function filterDropdown() {
    const selectedLocationName = document.getElementById("locationName").value;
    const selectedState = document.getElementById("states").value;
    const selectedParkType = document.getElementById("parkType").value;

    let filteredHTML = '';

    if (selectedLocationName !== "Select a Specfic Park by Name") {
        filteredHTML = displayNationalParkLocationName(selectedLocationName);
    } else if (selectedState !== "Select a state") {
        filteredHTML = displayNationalParkByState(selectedState);
    } else if (selectedParkType !== "Select a Park Type") {
        filteredHTML = displayNationalParkByParkType(selectedParkType);
    }

    document.getElementById("listOfParks").innerHTML = filteredHTML;
}

init();

