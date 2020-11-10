const API_KEY = '5d2079ddf4abe5e2644ff720ed865ff7';

export const getWeather = async (query) => {
    let weather = [];
    const URL = `https://api.openweathermap.org/data/2.5/weather/?q=${query}&appid=${API_KEY}&units=metric`;
    await fetch(URL)
    .then(response => response.json())
    .then(data => {
        weather=data;
    });
    return weather;
}