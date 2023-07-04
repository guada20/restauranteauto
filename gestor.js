let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
console.log(datosMemoria)

let contenedor=document.getElementById("contenedor")
datosMemoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow")
    let columna=document.createElement("div")
    columna.classList.add("col-4")
    let columna2=document.createElement("div")
    columna2.classList.add("col-8")

    let titulo=document.createElement("h3")
    titulo.textContent="Agenda"

    let cliente=document.createElement("h2")
    cliente.textContent=reserva.nombres

    columna.appendChild(titulo)
    columna2.appendChild(cliente)
    fila.appendChild(columna)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
})