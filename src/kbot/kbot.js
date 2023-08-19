module.exports = class KBot {
  constructor(idioma = "ES") {
    this.idioma = idioma;

    this.buenosDias = {};
    this.buenosDias["ES"] = "Buenos días ";
    this.buenosDias["EN"] = "Good morning ";
    this.buenasTardes = {};
    this.buenasTardes["ES"] = "Buenas tardes ";
    this.buenasTardes["EN"] = "Good afternoon ";
    this.buenasNoches = {};
    this.buenasNoches["ES"] = "Buenas noches ";
    this.buenasNoches["EN"] = "Good evening ";
  }

  saludar(nombre, hora = new Date().getHours() ) {
    let mensaje;
    //let hora = new Date().getHours();

    switch (true) {
      case [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(hora):
        mensaje = this.buenosDias[this.idioma] + nombre;
        break;
      case [12, 13, 14, 15, 16, 17, 18].includes(hora):
        mensaje = this.buenasTardes[this.idioma] + nombre;
        break;
      case [19, 20, 21, 22, 23].includes(hora):
        mensaje = this.buenasNoches[this.idioma] + nombre;
        break;
    }

    return mensaje;
  }
};
