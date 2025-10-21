if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiKey = '95246a0afe24b7f89b046878ca501f13';
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                document.querySelector("#weather").innerHTML = "Temperature: " + data.main.temp + "&degC";
                document.querySelector("#feelsLike").innerHTML = "Feels like: " + data.main.feels_like + "&degC";
                document.querySelector("#Area").innerHTML = data.name + ", " + data.sys.country;
               
            })
    }, (error) => {
        alert("Unable to access your location!", error)
        document.querySelector("#weather").innerHTML = "Accept location access for the browser to provide weather details.";
    })

}
