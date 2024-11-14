const input=document.querySelector(".input-box");
console.log(input)
const submit_btn=document.getElementById("search-btn");
console.log(submit_btn);
const temperature=document.querySelector(".temperature");
console.log(temperature);
const temp_desc=document.querySelector(".temp-description");
console.log(temp_desc);
const  wind=document.querySelector(".wind-value");
console.log(wind);
const humidity=document.querySelector(".humidity-value");
console.log(humidity);
const weather_image=document.querySelector(".weather-image");
console.log(weather_image);

async function getData(city)
{
    const myKey="54dc94f6000f3aa0db2c81b7546b709f";
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
    let data= await fetch(URL).then(response=>response.json())
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)} °C`;
    humidity.innerHTML=`${data.main.humidity} %`;
    wind.innerHTML=`${data.wind.speed} KM/h`
    temp_desc.innerHTML=data.weather[0].description;
console.log(data);

switch(data.weather[0].main)
{
    case 'Clear':
    weather_image.src="clear.png";
    break;
    case 'Clouds':
        weather_image.src="cloud.png";
        break;
        case 'Mist':
            weather_image.src="mist.png";
            break;
            case 'Rain':
                weather_image.src="rain.png";
                break;
                case 'Snow':
                    weather_image.src="snow.png";
                    break;
}
}

submit_btn.addEventListener("click",()=>{
    getData(input.value);


});