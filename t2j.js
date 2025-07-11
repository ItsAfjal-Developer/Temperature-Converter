function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  } else {
    alert("Please enter a valid Celsius value!");
  }
}

function convertToCelsius() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (!isNaN(fahrenheit)) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  } else {
    alert("Please enter a valid Fahrenheit value!");
  }
}

function convertToCelsius() {
  const f = parseFloat(document.getElementById("fahrenheit").value);
  const c = ((f - 32) * 5) / 9;
  document.getElementById("celsius").value = c.toFixed(2);
  showMessage(c, "C");
}

function convertToFahrenheit() {
  const c = parseFloat(document.getElementById("celsius").value);
  const f = (c * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = f.toFixed(2);
  showMessage(c, "C");
}

function convertToKelvin() {
  const k = parseFloat(document.getElementById("kelvin").value);
  const c = k - 273.15;
  document.getElementById("celsius").value = c.toFixed(2);
  showMessage(c, "C");
}

function showMessage(temp, unit) {
  let message = "";
  if (unit === "C") {
    if (temp < 0) message = "❄️ It's freezing!";
    else if (temp >= 0 && temp < 20) message = "🥶 It's cold!";
    else if (temp >= 20 && temp < 30) message = "🙂 It's pleasant!";
    else message = "🔥 It's warm!";
  }
  document.getElementById("output-message").textContent = message;
}

// Toggle dark/light mode
document.getElementById("modeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

function showMessage(temp, unit) {
  let message = "";
  let mercuryHeight = 0;

  if (unit === "C") {
    if (temp < 0) {
      message = "❄️ It's freezing!";
      mercuryHeight = 10;
    } else if (temp >= 0 && temp < 20) {
      message = "🥶 It's cold!";
      mercuryHeight = 30;
    } else if (temp >= 20 && temp < 30) {
      message = "🙂 It's pleasant!";
      mercuryHeight = 60;
    } else {
      message = "🔥 It's warm!";
      mercuryHeight = 90;
    }
  }

  document.getElementById("output-message").textContent = message;
  document.getElementById("mercury").style.width = mercuryHeight + "%";
}
