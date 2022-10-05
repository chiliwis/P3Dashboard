console.log("Entro a main.js")

const base_url = "http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_ingresos_mensuales";
const tblIngresos = document.getElementById("tblIngresos");
const grafica = document.getElementById('myChart').getContext('2d');

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

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [{
                        label: 'Ingresos Mensuales',
                        data: [5000, 9000, 10000, 7000, 20000, 60000],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100000
                        }
                    }
                }
            });


            for (const ingresos of result.data) {
                let tr = `<tr>
        <td>${ingresos.nombre}</td>
        <td>${ingresos.id}</td>
        <td>${ingresos.monto}</td>

        </tr>`;
                tblIngresos.innerHTML += tr;
            }
            if (result.data.length == 0) {
                tblIngresos.innerHTML = `<tr><td colspan="5" class="text-center">No hay ingresos</td></tr>`;
            }
        })
        .catch(error => {
            console.log("Error");
        })
}

cargarIngresos();
