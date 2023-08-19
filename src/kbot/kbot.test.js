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
        } else {
            if (hora >= 0 && hora < 12) {
                saludo = "Good morning";
            } else if (hora >= 12 && hora < 18) {
                saludo = "Good afternoon";
            } else {
                saludo = "Good evening";
            }
        }
        return `${saludo} ${nombre}`;
    }
}

describe("Saludor", () => {
    // Ingles
    it("Should greet 'Good morning Andrés' in English in the morning", () => {
        const now = new Date();
        const mockHours = 10; // Morning time (e.g., 10:00 AM)
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Good morning Andrés");
    });
    //espanol
    it("Should greet 'Buenos días Andrés' in Spanish in the morning", () => {
        const now = new Date();
        const mockHours = 10; 
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("Should greet 'Good afternoon Andrés' ", () => {
        const now = new Date();
        const mockHours = 14; 
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Good afternoon Andrés");
    });

    // Español
    it("Should greet 'Buenas tardes Andrés' ", () => {
        const now = new Date();
        const mockHours = 14; 
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("Should greet 'Good nigth Andrés' ", () => {
        const now = new Date();
        const mockHours = 20; 
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Good nigth Andrés");
    });

    // Español
    it("Should greet 'Buenas noches Andrés' ", () => {
        const now = new Date();
        const mockHours = 20; 
        jest.spyOn(Date, 'now').mockImplementation(() => new Date(now.getFullYear(), now.getMonth(), now.getDate(), mockHours).getTime());
        
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés");
        expect(resultado).toEqual("Buenas noches Andrés");
    });
});