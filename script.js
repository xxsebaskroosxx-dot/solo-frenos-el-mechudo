const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

function showLogin(){ loginModal.classList.add('show'); loginModal.setAttribute('aria-hidden','false'); document.getElementById('user').focus(); }
function hideLogin(){ loginModal.classList.remove('show'); loginModal.setAttribute('aria-hidden','true'); loginMessage.textContent=''; }

openLogin.addEventListener('click', showLogin);
closeLogin.addEventListener('click', hideLogin);
loginModal.addEventListener('click', (e)=>{ if(e.target===loginModal) hideLogin(); });

document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') hideLogin(); });

loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const user=document.getElementById('user').value.trim();
  const pass=document.getElementById('pass').value;
  if((user==='admin' || user==='admin@solofrenos.com') && pass==='123456'){
    sessionStorage.setItem('soloFrenosAdmin','true');
    window.location.href='admin.html';
  }else{
    loginMessage.textContent='Usuario o contraseña incorrectos.';
  }
});
