
//Mes-Dia-Año          
let pri = new Date('3-29-2003')
console.log(pri); //Fecha mualmente
let newTiempo = new Date()
console.log(newTiempo); //Todo
console.log(newTiempo.getFullYear()) //Año
console.log(newTiempo.getMonth()); //Toma los meses desde 0, Enero es 0 ...
console.log(newTiempo.getDate()) //Fecha del mes
console.log(newTiempo.getDay()) //Dia de la semana
console.log(newTiempo.getHours()); //Hora
console.log(newTiempo.getMinutes()); //Minuto
console.log("-------------------");
console.log(newTiempo.getDate(), newTiempo.getMonth(), newTiempo.getFullYear());
console.log("-------------------");
console.log(newTiempo.getTime());
console.log(Date.now());
console.log(newTiempo.toLocaleString());//Los 3 son STRINGS
console.log(newTiempo.toLocaleTimeString());
console.log(newTiempo.toLocaleDateString());
