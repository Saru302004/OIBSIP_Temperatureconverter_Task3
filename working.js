function convertTemperature() {
    var temperature = parseFloat(document.getElementById("inputTemperature").value);
    var unit = document.getElementById("unit").value;
    if (isNaN(temperature)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
    var celsius, fahrenheit, kelvin;
  
    if (unit === "celsius") {
      celsius = temperature;
      fahrenheit = (temperature * 9/5) + 32;
      kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
      celsius = (temperature - 32) * 5/9;
      fahrenheit = temperature;
      kelvin = (temperature - 32) * 5/9 + 273.15;
    } else {
      celsius = temperature - 273.15;
      fahrenheit = (temperature - 273.15) * 9/5 + 32;
      kelvin = temperature;
    }
    document.getElementById("result").innerHTML =
      temperature.toFixed(2) + " " + unit.charAt(0).toUpperCase() + unit.slice(1) + " is converted as,"+ 
      "<br>Celsius: " + celsius.toFixed(2) +"°C"+
      "<br>Fahrenheit: " + fahrenheit.toFixed(2) +"°F"+
      "<br>Kelvin: " + kelvin.toFixed(2)+"K";
  }
  function updateSiUnit() {
    var selectedUnit = document.getElementById("unit").value;
    var siUnit = document.getElementById("siUnit");
    siUnit.textContent = getSiUnit(selectedUnit);
  }
  function getSiUnit(unit) {
    switch (unit) {
      case "celsius":
        return "°C";
      case "fahrenheit":
        return "°F";
      case "kelvin":
        return "K";
      default:
        return "";
    }
  }
  