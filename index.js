let selectedTimeZone = null;

function updateTime() {
  // Lagos
  let lagosElement = document.querySelector("#lagos");

  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Los Angeles
  let losAngelesElement = document.querySelector("#los");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Australia
  let australiaElement = document.querySelector("#aus");
  if (australiaElement) {
    let australiaDateElement = australiaElement.querySelector(".date");
    let australiaTimeElement = australiaElement.querySelector(".time");
    let australiaTime = moment().tz("Australia/Adelaide");

    australiaDateElement.innerHTML = australiaTime.format("MMMM Do YYYY");

    australiaTimeElement.innerHTML = australiaTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");

    parisTimeElement.innerHTML = parisTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Selected city from dropdown
  if (selectedTimeZone) {
    let cityTime = moment().tz(selectedTimeZone);
    let selectedDate = document.querySelector(".selectedDate");
    let selectedTime = document.querySelector(".selectedTime");

    if (selectedDate && selectedTime) {
      selectedDate.innerHTML = cityTime.format("MMMM Do YYYY");
      selectedTime.innerHTML = `${cityTime.format(
        "h:mm:ss"
      )} <small>${cityTime.format("A")}</small>`;
    }
  }
}

function updateCity(event) {
  selectedTimeZone = event.target.value;

  if (selectedTimeZone === "Current") {
    selectedTimeZone = moment.tz.guess();
  }

  let cityName = selectedTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(selectedTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="selectedDate">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="selectedTime">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small></div>
  </div>

  <a href = "https://graciousworldclock.netlify.app/">Back to Home Page</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
