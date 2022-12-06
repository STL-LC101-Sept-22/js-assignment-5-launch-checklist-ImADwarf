// Write your JavaScript code here!
// const scriptHelper = require("./scriptHelper");;

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
      
   })

   // Create variables to easily reference when calling formSubmission function
   let list = document.getElementById("faultyItems"); // References the "Awaiting Information Before Launch" box
   list.style.visibility = "hidden"; // Makes the default values of faultyItems invisible before submission
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) { //creating event listener for the submit event
    event.preventDefault(); // Preventing request from being sent and the page reloading
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelInput.value;
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoInput.value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) // Calling formSubmission function and passing in user input as parameters
   })
   
});