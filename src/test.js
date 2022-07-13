
const date = Date.now();
const hoy = new Date(date);
//const fecha_actual = hoy.toISOString().slice(0, 10);
const date1 = new Date()

const a = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

const dividir = a.split(" ");
const b = dividir[0]
const c = dividir[1];
console.log(b)
console.log("")
console.log(c)


