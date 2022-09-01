const arrayDeStickers = [];

const luffy = { nombre: "Luffy", tamaño: "10x10", precio: 150 }
const goku = { nombre: "Goku", tamaño: "8x8", precio: 130 }
const vegeta = { nombre: "Vegeta", tamaño: "6x6", precio: 110 }

console.log(luffy, goku, vegeta);

function precioAPagar() {
    console.log("DETALLE DE SU COMPRA: \n");
    console.log(arrayDeStickers);
    let precioTotal = 0
    for (let i = 0; i < arrayDeStickers.length; i++) {
        precioTotal = precioTotal + arrayDeStickers[i].precio
    }
    console.log("Total a pagar: $" + precioTotal);
    alert("Gracias por su compra ❤️".toUpperCase());
    
}

function compraDeStickers () {
do {
    opcion = Number(prompt("Que stickers quieres llevar? \n 4. Luffy \n 3. Goku \n 2. Vegeta \n 1. Eliminar ultimo producto \n 0. Finalizar la compra"))
    switch (opcion) {
        case 4:
            arrayDeStickers.push(luffy);

            break
        case 3:
            arrayDeStickers.push(goku);

            break

        case 2:
            arrayDeStickers.push(vegeta);

            break
        case 1:
            arrayDeStickers.pop();
            break

        case 0:
            precioAPagar();
            break
        default:
            alert("Seleccione una opcion correcta");
            break
    }
} while (opcion !== 0 || opcion === null)
}

compraDeStickers();