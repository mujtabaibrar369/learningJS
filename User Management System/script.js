let record = new Array();
let errorPopup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
console.log(popup);
document.getElementById('button').addEventListener('click', function () {
  document.getElementById('records').textContent = '';
  var username = document.getElementById('username').value;
  var age = document.getElementById('age').value;
  if (username == '' || age == '') {
    overlay.classList.remove('hidden');
    errorPopup.classList.remove('hidden');
  } else {
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';
    let data = {
      username: username,
      age: age,
    };
    record.push(data);
    let temp = document.getElementById('records');
    for (let i = 0; i <= record.length; i++) {
      temp.innerHTML +=
        'Name : ' + record[i].username + '  Age : ' + record[i].age + '<br>';
    }
  }
});
document.getElementById('popupbutton').addEventListener('click', function () {
  let temp = document.getElementById('records');
  errorPopup.classList.add('hidden');
  overlay.classList.add('hidden');
  for (let i = 0; i <= record.length; i++) {
    temp.innerHTML +=
      'Name : ' + record[i].username + '  Age : ' + record[i].age + '<br>';
  }
});
