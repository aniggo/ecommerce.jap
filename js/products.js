//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let url="https://japdevdep.github.io/ecommerce-api/product/all.json";
   fetch(url)
    .then (result => result.json())
    .then (data => {
        let nombre= data[0].name;
        console.log(nombre);
        document.getElementById("auto1").textContent= nombre;
    });
});