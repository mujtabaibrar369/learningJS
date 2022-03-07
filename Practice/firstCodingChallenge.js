let johnwieght = 78;
let johnhieght = 1.69;
let markwieght = 95;
let markhieght = 1.85;
let johnBMI = johnwieght / johnhieght ** 2;
let markBMI = markwieght / markwieght ** 2;
let markhigherBMI = (johnBMI <= markBMI);
console.log(markhigherBMI);