"use strict";

window.onload = () => {
    addLocationsToDropdown();
    addNationalParksToDropdown();
    addTypeOfParkToDropdown()
}

function init() {
    // Create a search button
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    searchBtn.addEventListener("click", filterDropdown);
    clearBtn.addEventListener("click", resetSearchDropdowns);
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

// Function to create a card for the park's information
function createNationalParkCard(park) {
    let parkCard = `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${park.LocationName}</h5>
            <p class="card-text"><b>Location:</b> ${park.City}, ${park.State}</p>`;
    if (park.Address) {
        parkCard += `<p class="card-text"><b>Address:</b> ${park.Address}</p>`;
    }
    if (park.ZipCode) {
        parkCard += `<p class="card-text"><b>Zipcode:</b> ${park.ZipCode}</p>`;
    }
    if (park.Phone) {
        parkCard += `<p class="card-text"><b>Phone:</b> ${park.Phone}</p>`;
    }
    if (park.Fax) {
        parkCard += `<p class="card-text"><b>Fax:</b> ${park.Fax}</p>`;
    }
    if (park.Visit) {
        parkCard += `<p class="card-text"><b>For more information:</b> <a href="${park.Visit}"  style="color: blue" onmouseover="this.style.color='white'" onmouseout="this.style.color='blue'" target="_blank">${park.Visit}</a></p>`;
    }
    parkCard += `</div>
    </div>`;

    return parkCard;
}

// Function to display National Park by name
function displayNationalParkLocationName(selectedValue) {
    // Create a variable that stores parks that are filtered from the nationalParksArray using the filter method with arrow function
    const filteredParks = nationalParksArray.filter(park => park.LocationName === selectedValue);
    return filteredParks.map(park => createNationalParkCard(park));     // Return the filteredPark as a card by using the map method and placing each array element into the createNationalPark function
}
// Function to display National Park by state
function displayNationalParkByState(selectedValue) {
    // Create a variable that stores parks that are filtered by state from the nationalParksArray using the filter method with arrow function
    const filteredParks = nationalParksArray.filter(park => park.State === selectedValue);
    return filteredParks.map(park => createNationalParkCard(park)).join("");    // Return the filteredPark as a card by using the map method and placing each array element into the createNationalPark function
}
// Function to display National Park by park type
function displayNationalParkByParkType(selectedValue) {
    // Create a variable that stores parks that are filtered by park type from the nationalParksArray using the filter method with arrow function
    const filteredParks = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedValue.toLowerCase()));
    return filteredParks.map(park => createNationalParkCard(park)).join("");    // Return the filteredPark as a card by using the map method and placing each array element into the createNationalPark function
}

// Filtering function based on dropdown selections
function filterDropdown() {
    const selectedLocationName = document.getElementById("locationName").value;
    const selectedState = document.getElementById("states").value;
    const selectedParkType = document.getElementById("parkType").value;

    let filteredHTML = "";

    if (selectedLocationName !== "Select a Specfic Park by Name") {
        filteredHTML = displayNationalParkLocationName(selectedLocationName);
    } else if (selectedState !== "Select a state") {
        filteredHTML = displayNationalParkByState(selectedState);
    } else if (selectedParkType !== "Select a Park Type") {
        filteredHTML = displayNationalParkByParkType(selectedParkType);
    }

    document.getElementById("listOfParks").innerHTML = filteredHTML;
}

function resetSearchDropdowns() {
    document.getElementById("locationName").selectedIndex = 0;
    document.getElementById("states").selectedIndex = 0;
    document.getElementById("parkType").selectedIndex = 0;

    let clearCards = "";

    document.getElementById("listOfParks").innerHTML = clearCards;
}

init();

