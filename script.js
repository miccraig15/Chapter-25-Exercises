window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("simulate", function(event) {
        let testName = document.getElementByID("testName");
        let testDate = document.getElementByID("flightDate");
        let rocketType = document.getElementByID("rocketType");
        let boosterCount = document.getElementByID("boosterCount");
        let windRating = document.getElementByID("windRating");
        let productionServers = document.getElementByID("productionServers");
        if (testName.value === "" || testDate.value === "" || boosterCount.value === "" || windRating.value === "") {
            event.preventDefault();
            window.alert("All fields are required!")
        }
    });
});