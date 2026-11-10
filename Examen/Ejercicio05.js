//Una cata de cafe tiene un maximo de 8 particiones. crea las siguientes variables:Inscritos:6,maximo:8.utiliza una estructura if/else para verificar la disponibilidad de lugares. si la cantidad de inscritos es menor que el maximo, mostrar:"Hay lugares disponibles". si la cantidad de inscritos es igual o mayor  que el maximo, mostrar:cata llena". La condicion debe funcionar tambien si se modifica la cantidad de inscritos.
const inscritos = 6;
const maximo = 8;

if (inscritos < maximo) {
    console.log("Hay lugares disponibles");
} else {
    console.log("Cata llena");
}