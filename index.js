alert(`Escoja las siguientes frutas: frutilla, platano, mango o manzana`);

const cargoDeEnvio = 2000;
const impuesto = 1.19;
const frutas = {
  frutilla: 3000,
  mango: 1000,
  manzana: 4000,
  platano:500,
};
let isShopping = true;

while (isShopping === true) {
  let fruta = prompt("Elige una fruta");   
  let total = frutas[fruta.toLowerCase()] * impuesto + cargoDeEnvio;
  alert(
    `El precio de ${fruta} es de ${
      frutas[fruta.toLowerCase()]
    } con el cargo de envío que es de ${cargoDeEnvio} más impuesto su producto queda en ${total}`
    );
    if(!frutas[fruta.toLowerCase()]){
      alert('La fruta no existe pruebe nuevamente')
    }
    let decision = prompt("Desea seguir comprando? Si, desea parar simplemente escriba no");
    if (decision.toLowerCase() === "no") {
     isShopping = false;
    }
    console.log("Gracias Por su Compra");
}
 
