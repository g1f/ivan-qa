//darkmode
var btnDark = document.querySelector(".btn-dark-mode");

function darkMode() {
   var bodyDark = document.body;
   bodyDark.classList.toggle("dark-mode");
}

btnDark.onclick = darkMode;