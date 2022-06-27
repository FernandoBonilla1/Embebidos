
var cadena = "1,1,false"

var divisiones = cadena.split(",")
const cuadrante = divisiones[0]
const estacionamiento = divisiones[1]
const ocupado = divisiones[2]

let mybool = (ocupado === 'true')

if(mybool){
    console.log(mybool);
} else{
    console.log(mybool);
}

const date = Date.now();
const hoy = new Date(date);
const fecha_actual = hoy.toLocaleDateString();
console.log(fecha_actual);
console.log();
const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`
console.log(hora);