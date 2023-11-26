function calcularTotal() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var categoria = document.getElementById('categoria').value;
    var formaPago = document.querySelector('input[name="pago"]:checked').value;

    // Definir descuentos
    var descuentos = {
        utensilios: { valor: 1500, porcentaje: 0.2 },
        electrodomesticos: { valor: 2500, porcentaje: 0.1 },
        reposteria: { valor: 1000, porcentaje: 0.05 }
    };

    // Calcular descuento
    var descuento = 0;
    if (descuentos.hasOwnProperty(categoria)) {
        descuento = descuentos[categoria].valor * descuentos[categoria].porcentaje;
    }

    // Simular cantidad y valor total (puedes ajustar esto según tu lógica)
    var cantidadVendida = 1;
    var valorTotal = 50; // Ejemplo

    // Calcular total a pagar
    var totalPagar = valorTotal - descuento;

    // Mostrar resultados en la factura
    document.getElementById('cantidadVendida').innerText = cantidadVendida;
    document.getElementById('valorTotal').innerText = valorTotal;
    document.getElementById('descuento').innerText = descuento;
    document.getElementById('totalPagar').innerText = totalPagar;
}
