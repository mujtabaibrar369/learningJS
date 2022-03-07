
let player1 = Number(prompt("Enter Scores of Player 1: "));
let player2 = Number(prompt("Enter Scores of Player 2: "));
let player3 = Number(prompt("Enter Scores of Player 3: "));
let DolphinsScore = player1 + player2 + player3;
player1 = Number(prompt("Enter Scores of Player 1: "));
player2 = Number(prompt("Enter Scores of Player 2: "));
player3 = Number(prompt("Enter Scores of Player 3: "));
let koalasScore = player1 + player2 + player3;
let dolphinsPoints = 0, koalasPoints = 0;

if (DolphinsScore > koalasScore) {
    dolphinsPoints = dolphinsPoints + 1;
}
else {
    koalasPoints = koalasPoints + 1;

}
if (koalasPoints < dolphinsPoints) {
    console.log("Dolphins are the winners!");
}
else if (koalasPoints > dolphinsPoints) {
    console.log("Koalas are the winners");
}
else {
    console.log("Match withdrawn");
}