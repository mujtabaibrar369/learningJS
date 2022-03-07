let johnwieght = 78;
let johnhieght = 1.69;
let markwieght = 95;
let markhieght = 1.85;
let johnBMI = johnwieght / johnhieght ** 2;
let markBMI = markwieght / markhieght ** 2;
console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`)
if (markBMI > johnBMI) {
    console.log("Mark's BMI is greater than John's BMI");
}
else {
    console.log("John's BMI is greater than Marks's BMI");
}