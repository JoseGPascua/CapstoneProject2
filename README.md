# CapstoneProject2 Create a website that displays information of national parks and mountains using HTML, CSS, and Javascript

## A website that contains two simple pages, excluding the home page, and uses javascript to store data and display the information.
 
This project is built on the idea of giving people a place to search for different kinds of national parks and mountains. Using a basic and easy to navigate user interface, the website allows users to click on buttons and navigate through dropdowns to find what they are looking for. This project showcases:

* Displays a simple homepage with small description and allows user to know exactly what they want to look for
* Features two pages that have filtering functions, one page for mountains and the other for national parks

## Sample images of each page

The following below are previews of each page

### Home Page
<img src="images/" alt="home page" width=400px>

### Mountains Page
<img src="images/" alt="home page" width=400px>

### National Parks Page
<img src="images/" alt="home page" width=400px>

## An interesting piece of Javascript

```
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
```