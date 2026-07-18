const params = new URLSearchParams(window.location.search);

const userName = params.get('userName');
const userEmail = params.get('userEmail');
const userPhone = params.get('userPhone');
const gender = params.get('gender');
const interest = params.getAll('interest');
const city = params.get('city');
const memo = params.get('memo');

document.getElementById('userName').textContent = userName;
document.getElementById('userEmail').textContent = userEmail;
document.getElementById('userPhone').textContent = userPhone;
document.getElementById('gender').textContent = gender;
document.getElementById('interest').textContent = interest.join(', ');
document.getElementById('city').textContent = city;   
document.getElementById('memo').textContent = memo;