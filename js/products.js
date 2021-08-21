//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let url="https://japdevdep.github.io/ecommerce-api/product/all.json";
   fetch(url)
    .then (result => result.json())
    .then (data => {
        console.log(data.length);

        let i=0;
        while (i < data.length) {

            let nombre= data[i].name;
            let descripcion=data[i].description;
            let costo=data[i].cost;
            let vendidos=data[i].soldCount;
            let imagen=data[i].imgSrc;

            document.getElementById("row").innerHTML += `
            <div class="col-3">
                    <img src="` + imagen + `" alt="` + descripcion + `" class="img-thumbnail">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ nombre +`</h4>
                        </div>
                             <p class="mb-1">` + descripcion + `</p>
                        <div class="d-flex w-100 justify-content-between">
                            <small class="text-muted">` + costo + ` USD</small>
                            <small class="text-muted">` + vendidos + ` vendidos</small>
                        </div>
                       
            </div>
                      `
       
        i=i+1;
       
    }});
});