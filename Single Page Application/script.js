let errorPopup = document.querySelector('.popup');
let viewData = document.querySelector('.data');
const overlay = document.querySelector('.overlay');
let addExpensePopup = document.querySelector('.addexpensepopup');
const input = document.getElementById('form');
let row = 1;
let persons = [];
let display = document.getElementById('customers');
document.getElementById('button').addEventListener('click', function () {
  let person = {
    username: document.getElementById('name').value,
    age: document.getElementById('age').value,
    income: document.getElementById('income').value,
    expenses: [],
  };
  persons.push(person);
  if (person.username == '' || person.age == '' || person.income == '') {
    overlay.classList.remove('hidden');
    errorPopup.classList.remove('hidden');
  } else {
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    cell1.innerHTML = row;
    cell2.innerHTML = persons[row - 1].username;
    cell3.innerHTML = persons[row - 1].age;
    cell4.innerHTML = persons[row - 1].income;
    cell5.innerHTML += '';
    cell6.innerHTML +=
      "<input type='button' id='addexpense' value='Add expense'>";
    cell6.innerHTML +=
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
document.getElementById('goback').addEventListener('click', function () {
  addExpensePopup.classList.add('hidden');
  viewData.classList.remove('hidden');
  input.classList.remove('hidden');
});
document
  .getElementById('addexpensebutton')
  .addEventListener('click', function () {
    addExpensePopup.classList.add('hidden');

    viewData.classList.remove('hidden');
    input.classList.remove('hidden');
  });
function dynamicallySearch() {
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('customers');
  tr = table.getElementsByTagName('tr');
  for (let i = 0; i < row; i++) {
    td = tr[i].getElementsByTagName('td')[1];
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
    addExpensePopup.classList.remove('hidden');
    viewData.classList.add('hidden');
    input.classList.add('hidden');
  });
}
function viewExpense() {
  document.getElementById('viewexpense').addEventListener('click', function () {
    console.log('test');
  });
}
