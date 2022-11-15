export class Libro {
    protected titulo: string;
    protected anio: number;
    protected autor: string;

    constructor (paramTitulo:string, paramAnio: number, paramAutor:string){
        
        this.titulo = paramTitulo;
        this.anio = paramAnio;
        this.autor = paramAutor;
    }

    public setTitulo(paramTitulo:string):void{
        this.titulo = paramTitulo;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public setAnio(paramAnio:number):void{
        this.anio = paramAnio;
    }
    public getAnio():number{
        return this.anio;
    }
    public setAutor(paramAutor:string):void{
        this.autor = paramAutor;
    }
    public getAutor():string{
        return this.autor;
    }
}