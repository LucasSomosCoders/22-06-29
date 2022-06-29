

let amigos = ["Luis", "Jose", "Roberto", "Pablo"]

// funcion convencional
function mostrarAmigo(element) {
  return "Mi amigo: " + element;
}

// iteracion for convencional
for (let index = 0; index < amigos.length; index++) {
  const element = amigos[index];
  console.log(mostrarAmigo(element));
}

// utilizacion de iteracion foreach
const caja = document.getElementById("lista");
amigos.forEach(element => {
  caja.innerHTML += "Mi amigo: " + element;
});

// Otra forma de declarar la funcion mostrarAmigo seria mediante variable o constante
let mostrarAmigo = function(element) {
  return "Mi amigo: " + element;
}

// y la misma funcion con sintanxis funcion flecha
let mostrarAmigo = (element) => {"Mi amigo: " + element;}
