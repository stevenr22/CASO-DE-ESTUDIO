// Variables
var tipoPoliza = ""; // Aquí deberías obtener el tipo de póliza seleccionado en el formulario
var precioOriginal = 0;
var descuento = 0;
var iva = 0;
var totalPagar = 0;

// Obtener el precio original según el tipo de póliza
switch (tipoPoliza) {
    case "Vida":
        precioOriginal = 65000;
        descuento = 0.25; // 25%
        break;
    case "Vehículos":
        precioOriginal = 25000;
        descuento = 20;
        break;
    case "Hogar":
        precioOriginal = 35000;
        descuento = 15;
        break;
    case "Viajes":
        precioOriginal = 15000;
        descuento = 5;
        break;
    // Puedes agregar más casos según sea necesario
}

// Calcular el descuento
var montoDescuento = (precioOriginal * descuento) + descuento;

// Calcular el precio con descuento
var precioConDescuento = precioOriginal - montoDescuento;

// Calcular el IVA
iva = precioConDescuento * 0.12;

// Calcular el total a pagar
totalPagar = precioConDescuento + iva;

// Imprimir o usar el resultado según tus necesidades
console.log("Precio con descuento: " + precioConDescuento);
console.log("IVA: " + iva);
console.log("Total a pagar: " + totalPagar);