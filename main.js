const shop = ["Pocion", "Espada", "Escudo", "Daga"];
const precio_x_item = 500;

const mi_inventario = [];
let mi_oro = 2000;

function comprar_prompt () {
    const item_a_comprar = prompt("¿Qué item deseas comprar?");
    comprar_item(item_a_comprar);
}

function vender_prompt () {
    const item_a_vender = prompt("¿Qué item deseas vender?");
    vender_item(item_a_vender);
}

function comprar_item (item) {
    if (shop.includes(item)) {
        if (mi_oro >= precio_x_item) {
            mi_oro = mi_oro - precio_x_item;
            const indice = shop.indexOf(item);
            mi_inventario.push(shop[indice]);
            console.log(`Has comprado ${item}`);
        }
        else {
            console.warn(
                "No tienes suficiente oro" 
                + item + 
                "tu oro es: " 
                + mi_oro + 
                "y el precio es: " 
                + precio_x_item);
        }
    }
    else {
        console.error("No tengo nadad de eso");
    }
}

function vender_item (item) {
    if (mi_inventario.includes(item)) {
        const indice = mi_inventario.indexOf(item);
        mi_inventario.splice(indice, 1);
        mi_oro = mi_oro + precio_x_item;
        console.log(`Has vendido ${item}`);
    }
    else {
        console.error("No tienes ese item");
    }
}

function mostrar_inventario () {
    console.log("Tu inventario es: " + mi_inventario);
    for (let indice = 0; indice < mi_inventario.length; indice++) {
        console.log(mi_inventario[indice]);
    }
    console.log("Tu oro es: " + mi_oro);
}