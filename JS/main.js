console.log("Entro a main.js")

const base_url = "http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_ingresos_mensuales";
const tblIngresos = document.getElementById("tblIngresos");


function cargarIngresos() {
    fetch(base_url,
        {
            method: "GET"
        }
    )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            tblIngresos.innerHTML = "";
        
    for (const ingresos of result.data) {
        let tr = `<tr>
        <td>${ingresos.nombre}</td>
        <td>${ingresos.id}</td>
        <td>${ingresos.monto}</td>

        </tr>`;
        tblIngresos.innerHTML+=tr;
    }
    if(result.data.length == 0){
        tblIngresos.innerHTML = `<tr><td colspan="5" class="text-center">No hay ingresos</td></tr>`;
    }
    })
    .catch(error=> {
        console.log("Error");
    })
}

cargarIngresos();
