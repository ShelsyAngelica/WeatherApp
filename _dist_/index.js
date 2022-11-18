let input = document.querySelector('#input-ubication');

let container1 = document.querySelector('#container1')

let button = document.querySelector('button');
button.addEventListener("click",search);

function search () {

    let API = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&lang=sp&APPID=485e7d4aa702df9d0581ceddf8498009`;

    window.fetch(API)
    .then((response) => response.json())
    .then(responseJson => {
        
        const all = [];

        let name = document.createElement('h2');
        name.className = "text-center font-bold text-xl mb-2"
        let textName = document.createTextNode(responseJson.name);
        name.appendChild(textName);

        let containerInfo = document.createElement('div');
        containerInfo.className = "inline-flex items-end justify-evenly"
        
        let tempFeelsLike = document.createElement('div');
        let textTempFeelsLike = document.createTextNode("Sensacion termica: "+ Math.trunc(responseJson.main.feels_like) + "°C");
        tempFeelsLike.className = "text-xs ml-5"
        tempFeelsLike.appendChild(textTempFeelsLike);

        let temp = document.createElement('div');
        temp.className = "text-6xl "
        let textTemp = document.createTextNode(Math.trunc(responseJson.main.temp) + "°C");
        temp.appendChild(textTemp)

        containerInfo.append(temp,tempFeelsLike);
    
        let tempMax = document.createElement('p');
        tempMax.className = "text-gray-700 text-base mx-3 mt-4 mb-4"
        let textTempMax = document.createTextNode("La temperatura maxima será de "+ Math.trunc(responseJson.main.temp_max) + "°C");
        tempMax.appendChild(textTempMax);

        let humidity = document.createElement('p');
        humidity.className = "text-gray-700 text-base"
        let textHumidity = document.createTextNode("HUMEDAD ");
        humidity.appendChild(textHumidity);

        let humidityData = document.createElement('p');
        humidityData.className = "text-gray-700 text-base"
        let textHumidityData = document.createTextNode(responseJson.main.humidity + "%");
        humidityData.appendChild(textHumidityData);

        let containerHumidity = document.createElement('div');
        containerHumidity.append(humidity, humidityData)

        let visibility = document.createElement('p');
        visibility.className = "text-gray-700 text-base"
        let textVisibility = document.createTextNode("VISIBILIDAD ");
        visibility.appendChild(textVisibility);

        let visibilityData = document.createElement('p');
        let text = document.createTextNode(responseJson.visibility/1000 + "Km");
        visibilityData.appendChild(text);

        
        let containerVisibility  = document.createElement('div');
        containerVisibility.append(visibility, visibilityData)

        let pressure = document.createElement('p');
        pressure.className = "text-gray-700 "
        let textPressure = document.createTextNode("PRESIÓN ")
        pressure.appendChild(textPressure)
        
        let pressureData = document.createElement('p');
        let pressureDataText = document.createTextNode(responseJson.main.pressure + " mBar" )
        pressureData.appendChild(pressureDataText)

        let containerPressure  = document.createElement('div');
        containerPressure.append(pressure, pressureData)

        let wind = document.createElement('p');
        wind.className = "text-gray-700 text-base"
        let textWind = document.createTextNode("VIENTO ")
        wind.appendChild(textWind)

        let windData = document.createElement('p');
        windData.className = "text-gray-700 text-base"
        let textWindData = document.createTextNode(responseJson.wind.speed + " m/s" )
        windData.appendChild(textWindData)

        let containerWind  = document.createElement('div');
        containerWind.append(wind, windData)

        let info2 = document.createElement('div')
        info2.append(containerHumidity,containerVisibility,containerPressure,containerWind,)
        info2.className = "grid grid-cols-4 gap-4 mr-3 mx-3"


        let container = document.createElement('div');
        container.className = "grid mt-3 bg-blue-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        container.append(name, containerInfo, tempMax,info2);
        all.push(container);

        container1.className = "grid"       

        container1.insertAdjacentElement('beforeend',container);
        

    })
    .catch(error => {
        alert("Ciudad no identificada ")
        
    }) 

    
    
    
    clear();

}

function clear(){
    input.value = "";
}
