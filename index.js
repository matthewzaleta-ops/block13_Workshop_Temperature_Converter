function convertToCelcius(fInput) {
  return (fInput - 32) * (5 / 9);
}

function describeTemperature(fInput) {
  let celTemp = convertToCelcius(fInput);
  if (celTemp < 0) {
    console.log(
      "Temperature is " + celTemp + "degrees Celcius.  It's very cold"
    );
  } else if (celTemp < 20 && celTemp >= 0) {
    console.log("Temperature is " + celTemp + " degrees Celsius. It's cold.");
  } else if (celTemp < 30 && celTemp >= 20) {
    console.log("Temperature is " + celTemp + " degrees Celsius. It's warm.");
  } else if (celTemp < 40 && celTemp >= 30) {
    console.log("Temperature is " + celTemp + " degrees Celsius. It's hot.");
  } else {
    console.log(
      "Temperature is " + celTemp + " degrees Celsius. It's very hot."
    );
  }
}

//console.log(describeTemperature(30));

let fInput = prompt("Please input Fahrenheit temperature:");
//fInput = Number(fInput);
let forecast = describeTemperature(fInput);

alert(forecast);

//console.log("You entered " + fInput + " degrees F.");
//console.log(
/*"This converts to " + convertToCelcius(fInput) + " degrees Celsius.";*/
//);
/*
let f = askTemp();

celTemp = celTemp * 1;
describeTemperature(celTemp, f);
console.log("The Celsius temperature is " + celTemp);

function askTemp(f) {


  f = f * 1;
}
askTemp(f); */
