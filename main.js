// Class Declaration

class Camper{
    constructor(nombre,nota){
        this.nombre=nombre
        this.nota=nota
    }
    showCamper(){
        return `El Camper ${this.nombre}, obtuvo como nota el valor de :${this.nota} `
    }

}

//2. intanciar la clase, objeto
const tomas = new Camper("Tomas",2.4) 
console.log(tomas);
console.log(tomas.showCamper());
const tomas2 = new Camper()
console.log(tomas2);

//3

//7 clases , 5 atributos , 4 metodos
class Venta{
    constructor(juegos,ropa,consolas){
        this.juegos=juegos
        this.ropa=ropa
        this.consolas=consolas
    }
    agregar(){
        return `Objeto ${this.ropa} agregado`
    }
    eliminar(){
        return `Objeto ${this.consolas} eliminado`
    }
    comprar(){
        return `Objeto ${this.juegos} comprado`
    }
    
} 
class Accesorios {
    constructor(mouse,teclados,audifonos){
        this.mouse=mouse
        this.teclados=teclados
        this.audifonos=audifonos
    }
    agregar(){
        return `Objeto ${this.teclados} agregado`
    }
    eliminar(){
        return `Objeto ${this.mouse} eliminado`
    }
    comprar(){
        return `Objeto ${this.mouse} comprado`
    }
   
}

class Usuario {
    constructor(usuario,password){
    this.usuario=usuario
    this.password=password
    }
    agregar(){
        return `Objeto ${this.medias} agregado`
    }
    eliminar(){
        return `Objeto ${this.medias} eliminado`
    }
    comprar(){
        return `Objeto ${this.medias} comprado`
    }
    inciar(){
        return`Iniciando`
    }
}
class Contacto {
    constructor(nombre,telefono,email,asunto,mensaje){
    this.nombre=nombre
    this.telefono=telefono
    this.email=email
    this.asunto=asunto
    this.mensaje=mensaje
    }
    enviar(){
        return`Enviado`
    }
    Contactar(){
        return`Contactado`
    }

}
class Ropa{
    constructor(camisas,busos,medias){
        this.camisas=camisas
        this.busos=busos
        this.medias=medias
        }
        agregar(){
            return `Objeto ${this.ropa} agregado`
        }
        eliminar(){
            return `Objeto ${this.consolas} eliminado`
        }
        comprar(){
            return `Objeto ${this.juegos} comprado`
        }
}
class Consolas{
    constructor(xbox,play,nintendo){
        this.xbox=xbox
        this.play=play
        this.nintendo=nintendo
        }
        agregar(){
            return `Objeto ${this.xbox} agregado`
        }
        eliminar(){
            return `Objeto ${this.xbox} eliminado`
        }
        comprar(){
            return `Objeto ${this.xbox} comprado`
        }
}
class Juegos{
    constructor(accion,aventura,simulacion){
        this.accion=accion
        this.aventura=aventura
        this.simulacion=simulacion
        }
}

//Objetos Juegos
const halo = new Juegos ("Acciòn","","")
console.log(halo);
const gtav = new Juegos ("","Aventura","")
console.log(gtav);
const assasin = new Juegos ("","","Simulacion")
console.log(assasin);

//Objetos COnsolas

const xbox360 = new Consolas ("Xbox","","")
console.log(xbox360);
const play4 = new Consolas ("","PLay","")
console.log(play4);
const nintendoSwith = new Consolas ("","","Nintendo")
console.log(nintendoSwith);

//Objetos 
