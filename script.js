window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
                let testName = document.getElementById("testName");
        let testDate = document.getElementById("flightDate");
        let rocketType = document.getElementById("rocketType");
        let boosterCount = document.getElementById("boosterCount");
        let windRating = document.getElementById("windRating");
        let productionServers = document.getElementById("productionServers");
        if (testName.value === "" || testDate.value === "" || boosterCount.value === "") {
            event.preventDefault();
            window.alert("All fields are required!");
            
        }
    });
});