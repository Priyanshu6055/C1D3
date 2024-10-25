const togglebtn = document.getElementById('theme-toggle-btn');
const body = document.body;

togglebtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
})