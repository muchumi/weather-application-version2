// The easy way
async function getWeather(woeid){
    try{
        const result = await fetch('https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/');
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
    }
    catch(error){
        alert(error);
    }  
}
getWeather(2487956);
getWeather(44418);