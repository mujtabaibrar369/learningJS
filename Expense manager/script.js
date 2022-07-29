let errorPopup = document.querySelector('.popup');
let viewData = document.querySelector('.data');
const overlay = document.querySelector('.overlay');
let addExpensePopup = document.querySelector('.addexpensepopup');
let input = document.querySelector('.inputblock');
let row = 1;
let counterExpense = 1;
let persons = [];
let display = document.getElementById('customers');
let expenseTable = document.getElementById('Expenses');
document.getElementById('button').addEventListener('click', function () {
  let person = {
    id: Math.floor(Math.random() * 1000),
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
    cell1.innerHTML = persons[row - 1].id;
    cell2.innerHTML = persons[row - 1].username;
    cell3.innerHTML = persons[row - 1].age;
    cell4.innerHTML = persons[row - 1].income;
    cell5.innerHTML += '';
    cell6.innerHTML += `<input type='button' onclick = "addExpenses(this)" id='${
      persons[row - 1].id
    }' value='Add expense'>`;
    cell6.innerHTML += `<input type='button' onclick = "viewExpense(this)" id='${
      persons[row - 1].id
    }' value='View Expense'>`;
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
document.getElementById('adduser').addEventListener('click', function () {
  console.log('test');
  viewData.classList.add('hidden');
  input.classList.remove('hidden');
});
document.getElementById('back').addEventListener('click', function () {
  input.classList.add('hidden');
  viewData.classList.remove('hidden');
});
document.getElementById('goback').addEventListener('click', function () {
  console.log('test');
  addExpensePopup.classList.add('hidden');
  viewData.classList.remove('hidden');
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
function addExpenses(e) {
  expenseTable.classList.add('hidden');
  addExpensePopup.classList.remove('hidden');
  viewData.classList.add('hidden');
  input.classList.add('hidden');
  document
    .getElementById('addexpensebutton')
    .addEventListener('click', function () {
      let exptitle = document.getElementById('Expensetitle').value;
      let expamount = document.getElementById('expenseamount').value;
      let expdate = document.getElementById('expensedate').value;
      if (exptitle == '' || expamount == '' || expdate == '') {
        overlay.classList.remove('hidden');
        errorPopup.classList.remove('hidden');
      } else {
        let Exp = {
          expenseTitle: exptitle,
          expenseAmount: expamount,
          expenseDate: expdate,
        };
        for (let i = 0; i < row - 1; i++) {
          if (persons[i].id == e.id) {
            persons[i].expenses.push(Exp);
          }
        }

        counterExpense++;
        document.getElementById('Expensetitle').value = '';
        document.getElementById('expenseamount').value = '';
        document.getElementById('expensedate').value = '';
      }
      console.log('test');
    });
}
function viewExpense(e) {
  for (let i = 0; i < row - 1; i++) {
    if (persons[i].id == e.id) {
      let temp = persons[i].expenses;
      if (persons[i].expenses.length > 0) {
        for (let j = 0; j < persons[i].expenses.length; j++) {
          let newRow = expenseTable.insertRow(j + 1);
          let cell1 = newRow.insertCell(0);
          let cell2 = newRow.insertCell(1);
          let cell3 = newRow.insertCell(2);
          cell1.innerHTML = temp[j].expenseTitle;
          cell2.innerHTML = temp[j].expenseAmount;
          cell3.innerHTML = temp[j].expenseDate;
        }
      }
    }
  }
  document.getElementById('closeExpense').classList.remove('hidden');
  expenseTable.classList.remove('hidden');
  viewData.classList.add('hidden');
  input.classList.add('hidden');
}
document.getElementById('closeExpense').addEventListener('click', function () {
  document.getElementById('closeExpense').classList.add('hidden');
  expenseTable.classList.add('hidden');
  viewData.classList.remove('hidden');
});
