const sumbitButton = document.querySelector("#pass");
const weatherCard = document.querySelector(".weatherCard");

const locationInput = document.querySelector("#location");

const apiKey = "083a0898e12d7ea19834268d9af0acd2";

document.addEventListener("DOMContentLoaded", loadFromLocalStorage());

function loadFromLocalStorage() {
  let keys = Object.keys(localStorage);

  keys.forEach((key) => {
    const locationValue = localStorage.getItem(key);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((data) => {
        createHTML(data, locationValue);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

sumbitButton.addEventListener("click", () => {
  const locationValue = locationInput.value;
  locationInput.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed");
    })
    .then((data) => {
      localStorage.setItem(Date.now(), locationValue);
      createHTML(data, locationValue);
    })
    .catch((error) => {
      console.log(error);
    });
});

function createHTML(data, locationValue) {
  let weatherCard = document.createElement("div");
  weatherCard.className = "weatherCard";

  let icon = data.weather[0].icon;
  let imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  let img = document.createElement("img");
  img.src = imgUrl;
  img.alt = "123";

  let h1 = document.createElement("h1");
  h1.id = "weatherCardLocation";
  h1.innerHTML = `Location: ${locationValue}`;

  let tempInKelvin = data.main.temp;
  let tempInCelcius = Math.round(tempInKelvin - 273.15);

  let pTemp = document.createElement("p");
  pTemp.id = "temp";
  pTemp.innerHTML = `Temperature: ${tempInCelcius} ℃`;

  let humidity = data.main.humidity;

  let pHumidity = document.createElement("p");
  pHumidity.id = "humidity";
  pHumidity.innerHTML = `The humidity is ${humidity}%`;

  weatherCard.appendChild(img);
  weatherCard.appendChild(h1);
  weatherCard.appendChild(pTemp);
  weatherCard.appendChild(pHumidity);

  document.body.appendChild(weatherCard);
}
