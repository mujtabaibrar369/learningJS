let errorPopup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
let row = 1;
let display = document.getElementById('customers');
document.getElementById('button').addEventListener('click', function () {
  var username = document.getElementById('username').value;
  var age = document.getElementById('age').value;
  if (username == '' || age == '') {
    overlay.classList.remove('hidden');
    errorPopup.classList.remove('hidden');
  } else {
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = username;
    cell2.innerHTML = age;
    row++;
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
  }
});
document.getElementById('popupbutton').addEventListener('click', function () {
  let temp = document.getElementById('records');
  errorPopup.classList.add('hidden');
  overlay.classList.add('hidden');
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
