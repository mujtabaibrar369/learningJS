function calcAverage(score1, score2, score3) {
    let average = score1 + score2 + score3;
    return average;
}
function winChecker(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Team dolphin is the winner with victory (${dolphinsAverage} vs ${koalasAverage})`);
    }
    else if (dolphinsAverage <= 2 * koalasAverage) {
        console.log(`Team koalas is the winner with victory (${koalasAverage} vs ${dolphinsAverage})`);
    }
    else {
        console.log(`Match withdrawn`);
    }
}
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
winChecker(dolphinsAverage, koalasAverage);
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
winChecker(dolphinsAverage, koalasAverage);