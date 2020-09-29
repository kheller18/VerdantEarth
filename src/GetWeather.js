export default function getWeather(newCityName, newCountryName) {
  let apiKey = "4991030493f74a85905093c87da9ac86"; //process.env.WEATHER_API_KEY || 
  let weather = fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${newCityName}&country=${newCountryName}&key=${apiKey}`
  ).then((response) => {
    if (response.status === 200) {
      console.log(response.json());
      return response.json();
    }
    return Promise.reject(response.status);
  });

  return weather;
}
