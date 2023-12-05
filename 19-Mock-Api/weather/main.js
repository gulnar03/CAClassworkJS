let city = "ganja";
fetch(
  `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${city}&aqi=no`
)
  .then((res) => res.json())
  .then((data) => console.log(data));
