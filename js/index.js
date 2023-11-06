const listaProducto = {
    Teclado: 10,
    Pantalla: 20,
    Mouse: 30,
};

let productoSeleccionado = {};


for (let producto in listaProducto) {
    const seleccion = prompt(`Desea llevar el/la ${producto}? (Si/No)`).toLowerCase();
    if (seleccion == "si") {
        productoSeleccionado[producto] = true;
    } else {
        productoSeleccionado[producto] = false;
    }
}

function calcularTotal(productoSeleccionado) {
    let costoTotal = 0;

    for (let producto in productoSeleccionado) {
        if(productoSeleccionado[producto]){
            costoTotal +=listaProducto[producto];
        }
    }
    return costoTotal;
}
const totalCosto = calcularTotal(productoSeleccionado);
alert(`El total a pagar por los productos es: $${totalCosto}`);
