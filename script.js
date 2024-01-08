
let wethrobj ={
    Rain : `  <i class="fa-solid fa-cloud-showers-heavy"></i>`,
    Clouds : `  <i class="fa-solid fa-cloud"></i>`,
    Snow : ` <i class="fa-solid fa-snowflake"></i>`,
    Haze:   ` <i class="fa-solid fa-smog"></i>`,
    Mist:   ` <i class="fa-solid fa-cloud-meatball"></i>`,
    Clear: ` <i class="fa-solid fa-sun"></i>`
}


let city = fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=fa7a03de56054a3e8732db8a52e3417f")
.then((data)=>data.json()).then((data)=>{
    console.log(data)
})

function search(){
    let input  = document.getElementById('input').value;
    // console.log(input);

    let city = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fa7a03de56054a3e8732db8a52e3417f`)
    .then((data)=>data.json()).then((data)=>{
    for(let temps in data){
        console.log(temps,data[temps])
        //append to html
        let name = document.getElementById("name");
        name.innerHTML = `<i class="fa fa-location-dot"></i> ${data.name}`;

        
         let temp = document.getElementById("temp");
         temp.innerText= `${(data.main.temp-273.15).toFixed(1)}°C`;
        
         let weather = document.getElementById("weather");
         weather.innerHTML=`${data.weather[0].main+wethrobj[data.weather[0].main]}`;

        //  weather.innerHTML=details.weather[0].main+wethrobj[details.weather[0].main];

         let humidity = document.getElementById("humidity");
         humidity.innerText=`${data.main.humidity}%`;
         
         let visibility = document.getElementById("visibility");
         visibility.innerText=`${data.visibility/1000}km`

         
         let wind = document.getElementById("wind");
         wind.innerText=`${data.wind.speed}km/h`
    }
    console.log(city);

}).catch((error)=>console.log(error))
}




// weather icons for every weather
// let wethrobj ={
//     Rain : `  <i class="fa-solid fa-cloud-showers-heavy"></i>`,
//     Clouds : `  <i class="fa-solid fa-cloud"></i>`,
//     Snow : ` <i class="fa-solid fa-snowflake"></i>`,
//     Haze:   ` <i class="fa-solid fa-smog"></i>`,
//     Mist:   ` <i class="fa-solid fa-cloud-meatball"></i>`,
//     Clear: ` <i class="fa-solid fa-sun"></i>`
// }

// //calling the loadWeather method()
// loadWeather();

// //method to fetch the weather details
// async function loadWeather(){
//     let city="coimbatore"
//     let details;
//     fetchdata(city)
//     async function fetchdata(){
//         //current data
//         // let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ec8027f9afa11371eb8cb23292005ff`)
//         let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa7a03de56054a3e8732db8a52e3417f`)
//         .then(async (jsondata) => {
//             details=await jsondata.json();
//             console.log(details)
//             //appending to the HTML
//             weather.innerHTML=details.weather[0].main+wethrobj[details.weather[0].main];
//             temprature.innerText = `${(details.main.temp-273.15).toFixed(1)}°C`;
//             cityName.innerHTML=<i class="fa fa-thin fa-location-dot"></i>`${details.name}`;
//             humidity.innerText=details.main.humidity+" %";
//             windperc.innerText=details.wind.speed+" Km/h";
//             visi.innerText=details.visibility/1000+" Km";

//         }).catch((err) => {
//             console.log(err)
//         });

//     }
// }
        