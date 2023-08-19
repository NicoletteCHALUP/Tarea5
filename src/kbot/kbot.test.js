const Kbot = require("./Kbot");
/*
console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");
*/

class Kbot {
    constructor(idioma = "EN") {
        this.idioma = idioma;
    }

    saludar(nombre, hora = new Date().getHours()) {
        let saludo = "";
        if (this.idioma === "ES") {
            if (hora >= 0 && hora < 12) {
                saludo = "Buenos días";
            } else if (hora >= 12 && hora < 18) {
                saludo = "Buenas tardes";
            } else {
                saludo = "Buenas noches";
            }
        } 
        return `${saludo} ${nombre}`;
    }
}

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés", 8) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("Saludar a Andrés en espanol por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 13)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    
  });
  