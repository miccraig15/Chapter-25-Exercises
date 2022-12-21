window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("simulate", function(event) {
        let testName = document.querySelector("input[name=testName]");
        let testDate = document.querySelector("input[name=flightDate]");
        let rocketType = document.querySelector("input[name=rocketType]");
        let boosterCount = document.querySelector("input[name=boosterCount]");
        let windRating = document.querySelector("input[name=windRating]");
        let productionServers = document.querySelector("input[name=productionServers]");
        if (testName.value === "" || testDate.value === "" || boosterCount.value === "" || windRating.value === "") {
            window.alert("All fields are required!")
            event.preventDefault();
        }
    });
});