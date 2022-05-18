class Juego {
  constructor(nombre, descripcion, img, puntaje) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
    this.puntaje = puntaje;
  }
}

const juegos = [
  {
    nombre: "Adivinador",
    descripcion: "Juego de adivinar un numero",
    img: "../img/adivinador/giphy-Adivinador.gif",
    puntaje: 0,
  },
  {
    nombre: "Memotest",
    descripcion: "Juego de encontrar el igual",
    img: "../img/memotest/giphy-memotest.gif",
    puntaje: 0,
  },
  {
    nombre: "Encriptador",
    descripcion: "Juego de encriptar un mensaje",
    img: "../img/encriptador/giphy-encriptador.gif",
    puntaje: 0,
  },
];

juegos.forEach((juego, indice) => {
  let botonPuntaje = document.getElementById(`boton${indice}`);
  console.log(botonPuntaje);
  botonPuntaje.addEventListener("click", () => {
    let puntaje = juego.puntaje + 1;
    juego.puntaje = puntaje;
    console.log(puntaje);
    switch (indice) {
      case 0:
        localStorage.setItem("puntajeAdivinador", JSON.stringify(puntaje));
        break;
      case 1:
        localStorage.setItem("puntajeMemotest", JSON.stringify(puntaje));
        break;
      case 2:
        localStorage.setItem("puntajeEncriptador", JSON.stringify(puntaje));
        break;
    }
  });
});
