
//function CalcularPrecio(PrecioUnitario, cantidad){
 //   return PrecioUnitario * cantidad;
//}
//console.log(CalcularPrecio(5,2));
//console.log(CalcularPrecio(3,4));
//console.log(CalcularPrecio(7,1));











function PuedeReservar(cantidad) {
    if (cantidad <= 2) {
        return true;
    } else {
        return false;
    }
}

let cantidad = 3;

if (PuedeReservar(cantidad)) {
    console.log("Puede reservar " + cantidad + " tazas de café.");
} else {
    console.log("No puede reservar " + cantidad + " tazas. El máximo es 2.");
}