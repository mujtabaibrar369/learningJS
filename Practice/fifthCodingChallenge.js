function calculateTip(bill) {
    var tip = bill > 300 ? bill * 0.15 : bill * 0.20;
    return tip;
}
let Bill = [125, 555, 44];
let total = [];
total[0] = calculateTip(Bill[0]) + Bill[0];
total[1] = calculateTip(Bill[1]) + Bill[1];
total[2] = calculateTip(Bill[2]) + Bill[2];
console.log(total);