
async function getData(city){

    const apiKey = "";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        presentData(data)

    } catch (error) {
        console.log(error);
    }
}

document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    await getData(city);
});

function presentData(data){
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("feel-temp").innerHTML = data.current.feelslike_c + " °C";
    document.getElementById("temp").innerHTML = data.current.temp_c + " °C";
    document.getElementById("humidity").innerHTML = data.current.humidity + " %";
    document.getElementById("location").innerHTML = data.location.name + ", " + data.location.country;
}
