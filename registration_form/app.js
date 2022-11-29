const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const dob = document.querySelector('#dob');
const phonenum = document.querySelector('#pno');
const pass = document.querySelector('#pass');
const checkmale = document.querySelector('#checkmale');
const checkfemale = document.querySelector('#checkfemale');
document.querySelector('.register').addEventListener('click',enrolling);

function clear()
{
  fname.value = '';
  lname.value = '';
  email.value = '';
  dob.value = '';
  phonenum.value = '';
  pass.value = '';
  confirmpass = '';
}

var row = 1;
function enrolling(e)
{
  var name = fname.value+' '+lname.value;
  var mail = email.value;
  var pnoo = phonenum.value;
  if(name==' ' || mail=='' || pnoo=='')
  {
    alert('check the name (or) email (or) phonenumber field');
  }
  else
  {
    var disp = document.querySelector('#show');
    var newRow = disp.insertRow(row);
    var c1 = newRow.insertCell(0);
    var c2 = newRow.insertCell(1);
    var c3 = newRow.insertCell(2);
    c1.innerHTML = name;
    c2.innerHTML = mail;
    c3.innerHTML = pnoo;
 }
  e.preventDefault();
}



