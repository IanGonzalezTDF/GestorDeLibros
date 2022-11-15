import { Libro } from "./Libro";
import { GestorDeLibros } from "./GestorLibros";

let fs=require("fs");
let texto:string = fs.readFileSync("./Libros.txt","utf-8");
let libros: string[] = texto.split('.')
console.log(libros);//Aca obtengo el arreglo de mis libros//


let Libro1:Libro = new Libro(libros[0],1954,'John Ronald Reuel Tolkien')
let Libro2:Libro = new Libro(libros[1],1872,'José Hernández')
let Libro3:Libro = new Libro(libros[2],1967,'Gabriel García Márquez')
let Libro4:Libro = new Libro(libros[3],1943,'Antoine de Saint-Exupéry')
let Libro5:Libro = new Libro(libros[4],1997,'Robert Kiyosaki')
let Libro6:Libro = new Libro(libros[5],1851,'Herman Melville')
let Libros:Libro[] = [Libro1,Libro2,Libro3];


let Gestor:GestorDeLibros = new GestorDeLibros(Libros);


//Aca se muestran los primeros 3 libros, los que ya se almacenaron en el arreglo del constructor.
console.log(Gestor);


//metodo consulta
Gestor.consultarLibro(Libro5);

//Se agregan dos nuevos libros
Gestor.insertarLibro(Libro4);//Utilización de métodos
Gestor.insertarLibro(Libro5);//Utilización de métodos
console.log(Gestor);//Aca se deberían mostrar todos los libros(5)

Gestor.CambiarLibro(Libro1,Libro6);
console.log(Gestor);