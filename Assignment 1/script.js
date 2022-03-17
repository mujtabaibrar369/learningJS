let record = new Array();
document.getElementById("button").addEventListener("click", function () {
  document.getElementById("records").textContent='';
    var username=document.getElementById("username").value;
    var age=  document.getElementById("age").value;
    if(username==""|| age=="")
    {
      console.log('test');
      document.getElementById("form").style.display="none";
      document.getElementById("records").style.display="none";
      document.getElementById("popup").style.display="block";
    }
    else{
  document.getElementById("username").value = '';
  document.getElementById("age").value = '';
  let data = {
    username: username,
    age: age,
  };
  record.push(data);
  console.log(data);
  var temp=document.getElementById("records");
  
  for(let i=0;i<=record.length;i++)
  {
  temp.innerHTML += "Name : " + record[i].username + "  Age : " + record[i].age + '<br>';
  }
}
});
document.getElementById("popupbutton").addEventListener('click', function(){
  console.log('test');
      document.getElementById("form").style.display="block";
      document.getElementById("records").style.display="block";
      document.getElementById("popup").style.display="none";
})
