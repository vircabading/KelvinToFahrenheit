///////////////////////////////////////////
// Kelvin to Fahrenheit Conversion Application
///////////////////////////////////////////

const KelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32;
}

console.log("//////////////////////////////");
console.log("Kelvin to Fahrenheit Application\n");

console.log("Fahreinheit for 273 kelvin is:");
console.log(KelvinToFahrenheit(273));

console.log("Fahreinheit for 280.34 kelvin is:");
console.log(KelvinToFahrenheit(280.34));