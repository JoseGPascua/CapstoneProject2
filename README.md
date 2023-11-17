# CapstoneProject2 Create a website that displays information of national parks and mountains using HTML, CSS, and Javascript

## A website that contains two simple pages, excluding the home page, and uses javascript to store data and display the information.
 
This project is built on the idea of giving people a place to search for different kinds of national parks and mountains. Using a basic and easy to navigate user interface, the website allows users to click on buttons and navigate through dropdowns to find what they are looking for. This project showcases:

* Displays a simple homepage with small description and allows user to know exactly what they want to look for
* Features two pages that have filtering functions, one page for mountains and the other for national parks

## Sample images of each page

The following below are previews of each page

### Home Page
<img src="images/homepage.PNG" alt="home page" width=400px>

### Mountains Page
<img src="images/moutainspage.PNG" alt="mountains page" width=400px>

### National Parks Page
<img src="images/parkspage.PNG" alt="national parks page" width=400px>

## An interesting piece of Javascript

This piece of code is what probably took me the longest and is something that I couldn't get to work for awhile. I wanted to be able to just use search button for all of my dropdowns and I couldn't figure out how to, and after doing some research online I was able to implement this function properly.

Basically what it does is set the variables for the values that are selected on the dropdown menus, and it uses an if else-if block to check what the selected value is. Depending on if the value has not been changed from the default, it will pass on to the next else-if. Inside each of these statements sets an empty string variable that was initialized before the If statement and stores in the information from a different function (the functions are all different but perform the same thing but for different dropdowns. Each function takes in an argument and finds the specific park then returns a card that was generated from a different function that adds HTML elements).

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

# Author

Jose Pascua

# Acknowledgements

* Year Up Staff
* Year Up Classmates
* Remsey Mailjard (Instructor)
* Pluralsight
* Learn To Code Academy