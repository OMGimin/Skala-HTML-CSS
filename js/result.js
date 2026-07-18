const params = new URLSearchParams(window.location.search);

const userName = params.get('userName');
const userId = params.get('userId');
const userEmail = params.get('userEmail');
const userPassword = params.get('userPassword');
const userPhone = params.get('userPhone');
const birthDate = params.get('birthDate');
const gender = params.get('gender');
const interest = params.getAll('interest');
const city = params.get('city');
const memo = params.get('memo');
const agree = params.get('agree');

document.getElementById('userName').textContent = userName || '입력하지 않음';
document.getElementById('userId').textContent = userId || '입력하지 않음';
document.getElementById('userEmail').textContent = userEmail || '입력하지 않음';
document.getElementById('userPassword').textContent = userPassword ? '입력 완료 (보안상 표시하지 않음)' : '입력하지 않음';
document.getElementById('userPhone').textContent = userPhone || '입력하지 않음';
document.getElementById('birthDate').textContent = birthDate || '입력하지 않음';
document.getElementById('gender').textContent = gender || '선택하지 않음';
document.getElementById('interest').textContent = interest.length > 0 ? interest.join(', ') : '선택하지 않음';
document.getElementById('city').textContent = city || '선택하지 않음';
document.getElementById('memo').textContent = memo || '입력하지 않음';
document.getElementById('agree').textContent = agree || '동의하지 않음';
