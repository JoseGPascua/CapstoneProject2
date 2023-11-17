"use strict";

// Load these functions as soon as the window loads
window.onload = () => {
    // Functions to add options to the dropbars
    addLocationsToDropdown();
    addNationalParksToDropdown();
    addTypeOfParkToDropdown()

    // Create variables for the buttons
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");

    //Assign functions to the buttons
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

// Function to add national park by exact name to dropdown
function addNationalParksToDropdown() {

    const locationName = document.getElementById("locationName");   // Get dropdown element by ID
    // Use for-each to iterate over the array
    nationalParksArray.forEach(function (park) {
        
        let option = document.createElement("option");      // Create a new option element

        // Set the value and text content for the new option
        option.value = park.LocationName;
        option.textContent = park.LocationName;

        // Add the new option to the dropdown
        locationName.appendChild(option);
    });
}

// Function to add states to the dropdown
function addLocationsToDropdown() {

    const states = document.getElementById("states");   // Get dropdown element by ID
    // Use for-each to iterate over the array
    locationsArray.forEach(function(location) {
        
        let option = document.createElement("option");  // Create a new option element

        // Set the value and text content for the new option
        option.value = location;
        option.textContent = location;

        // Add the new option to the dropdown
        states.appendChild(option);
    });
}

// Function to add park type to the dropdown
function addTypeOfParkToDropdown() {
    
    const parkType = document.getElementById("parkType");   // Get dropdown element by ID
    // Use for-each to iterate over the array
    parkTypesArray.forEach(function(typeOfPark) {
        
        let option = document.createElement("option");      // Create a new option element

        // Set the value and text content for the new option
        option.value = typeOfPark;
        option.textContent = typeOfPark;

        // Add the new option to the dropdown
        parkType.appendChild(option);
    });
}

// Function to create a card for the park's information
function createNationalParkCard(park) {

    // Create a card with the html elements
    let parkCard = `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"><b>${park.LocationName}</b></h5>
            <p class="card-text"><b>Location:</b> ${park.City}, ${park.State}</p>`;

    // Set of if-statements that will add extra text to the parkCard's elemen ts
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

    // Closing div tags for the parkCard
    parkCard += `</div>
    </div>`;

    return parkCard;    // Returns card
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
    // Create variables for the value of the dropwdown
    const selectedLocationName = document.getElementById("locationName").value;
    const selectedState = document.getElementById("states").value;
    const selectedParkType = document.getElementById("parkType").value;

    // Initialize an empty string variable
    let filteredHTML = "";

    // If else-if statements whose condition allows for a certain dropdown to execute its display function. filteredHTML will then be set to the corresponding function
    if (selectedLocationName !== "Select a Specfic Park by Name") {
        filteredHTML = displayNationalParkLocationName(selectedLocationName);
    } else if (selectedState !== "Select a state") {
        filteredHTML = displayNationalParkByState(selectedState);
    } else if (selectedParkType !== "Select a Park Type") {
        filteredHTML = displayNationalParkByParkType(selectedParkType);
    }

    // Displays the card(s) onto the HTML
    document.getElementById("listOfParks").innerHTML = filteredHTML;
}

// function to clear the dropdown values if a user wishes to search for another park
function resetSearchDropdowns() {
    // Resett the index to 0
    document.getElementById("locationName").selectedIndex = 0;
    document.getElementById("states").selectedIndex = 0;
    document.getElementById("parkType").selectedIndex = 0;

    // Initialize an empty string
    let clearCards = "";
    // Display clearCards, in other words clear any cards that were previously present
    document.getElementById("listOfParks").innerHTML = clearCards;
}

