//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("loginBoton").addEventListener("click", function(e){
    var nombreUsuario = document.getElementById("nUsuario");
    var nombrePassword = document.getElementById("nPassword");
  if ((nombreUsuario.value !="") && (nombrePassword.value !="")) {
window.location.href = "./inicio.html";
  }
    
})
});