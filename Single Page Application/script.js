let errorPopup = document.querySelector('.popup');
let viewData = document.querySelector('.data');
const overlay = document.querySelector('.overlay');
const formDiv = document.getElementById('form');
let addExpensePopup = document.querySelector('.addexpensepopup');
let row = 1;
let display = document.getElementById('customers');
document.getElementById('button').addEventListener('click', function () {
  var username = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var income = document.getElementById('income').value;
  if (username == '' || age == '' || income == '') {
    overlay.classList.remove('hidden');
    errorPopup.classList.remove('hidden');
  } else {
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    cell1.innerHTML = username;
    cell2.innerHTML = age;
    cell3.innerHTML = income;
    cell5.innerHTML =
      "<input type='button' id='addexpense' value='Add expense'>";
    cell5.innerHTML +=
      "<input type='button' id='viewexpense' value='View Expenses'>";
    addExpenses();
    viewExpense();
    row++;
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('income').value = '';
  }
});
document.getElementById('popupbutton').addEventListener('click', function () {
  errorPopup.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.getElementById('viewbutton').addEventListener('click', function () {
  errorPopup.classList.add('hidden');
  viewData.classList.remove('hidden');
});
document.getElementById('closeuser').addEventListener('click', function () {
  viewData.classList.add('hidden');
});
function myFunction() {
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('customers');
  tr = table.getElementsByTagName('tr');
  for (let i = 0; i < row; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
function addExpenses() {
  document.getElementById('addexpense').addEventListener('click', function () {
    console.log(addExpensePopup);
    addExpensePopup.classList.remove('hidden');
    formDiv.classList.add('hidden');
    viewData.classList.add('hidden');
  });
}
function viewExpense() {
  document.getElementById('viewexpense').addEventListener('click', function () {
    console.log('test');
  });
}
