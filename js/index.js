let entrada = prompt("¡BIENVENIDO!" + "\n" + "vamos a formar un equipo de futbol 5, ingrese el nombre de su equipo");
console.log("Nombre del equipo: " + entrada)

for (let i = 1; i <= 5; i++) {
    var nombres = prompt("Ingrese el nombre de uno de los jugadores");

    if (!isNaN(nombres)) {
        alert("Ingreso un nombre invalido, vuelve a cargar la pagina");
        break;
    }

    alert("Bienvenido " + nombres);
    console.log("Jugador Nº " + i + ": " + nombres);
}

if (isNaN(nombres)) {
    alert('¡Felicitaciones, has formado un equipo de Futbol 5!');

}