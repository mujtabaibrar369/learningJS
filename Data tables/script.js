var row = 1;
const button = document.getElementById('button');
button.addEventListener('click', function () {
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let age = document.getElementById('age').value;
  let Email = document.getElementById('email').value;
  if (!firstName || !lastName || !age || !Email) {
    alert('Please fill all the entities carefully');
    return;
  }
  let display = document.getElementById('customers');
  let newRow = display.insertRow(row);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = age;
  cell4.innerHTML = Email;
  row++;
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
});
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('customers');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < row; i++) {
    for (let j = 0; j < 5; j++) {
      td = tr[i].getElementsByTagName('td')[j];
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
}
