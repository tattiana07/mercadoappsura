//consumiendo el API para acceder alos datos de la BD

let url="localhost:8080/storeapi/v1/producto"
let peticion={
    method:"GET",
    headers:{}
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})
