import { Libro } from "./Libro";

export class GestorDeLibros {
    protected libros:Libro[];

    constructor(paramLibros:Libro[]) {
        this.libros = paramLibros;
    }

    public insertarLibro(paramLibro:Libro):void{
        this.libros.push(paramLibro);
        console.log(`Se insertó el libro ${paramLibro.getTitulo()}`);
        
    }

    public borrarLibro(paramLibro:Libro):void{
        for(let i:number=0; i<this.libros.length;i++){
            if(paramLibro === this.libros[i]){
                this.libros.splice(i,1);
                console.log(`Se a quitado el libro ${paramLibro.getTitulo()}`);
            }
        }
    }

    public consultarLibro(paramLibro:Libro):void {
        let flag:number=0;
        for(let i:number=0; i<this.libros.length;i++){
            if(paramLibro === this.libros[i]){
                console.log(`Se encontró el libro ${this.libros[i]}`);
                flag++
            }
        }
        if(flag === 0){
            console.log('No se encontró el libro.')
        }
    }

    public CambiarLibro(paramLibro:Libro,nuevoLibro:Libro):void{
        let flag:number=0;
        for(let i:number=0; i<this.libros.length;i++){
            if(paramLibro === this.libros[i]){
                this.libros[i] = nuevoLibro;
                flag++;
                console.log(`Se cambió el libro ${paramLibro.getTitulo()}, por el libro ${nuevoLibro.getTitulo()}`);               
            }
        }if(flag===0){
            console.log(`No se pudo cambiar el libro porque no se encuentra disponible.`);
        }
    }
    // public modificarLibro()¿?
}