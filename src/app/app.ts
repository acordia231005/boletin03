import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './model/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('boletin3');
  public datos: number[] = [1,7,8,3,4,9];
  public compis: string[] = ["Juanillo de la palma", "xexu", "Alberto","Andres", "Antonio de triana", "Amanda", "Pedro", "Enrique"];
  public alumnos: Alumno[] = [];

  // Carga de datos al principio de la pagina como onload.
   ngOnInit(): void {
    console.log("carga de datos: " + this.datos);
    console.log("Alumnos cargados: " + this.compis);
  }

  //Ejercicio 1
  public dobleDatos(): void{
    console.table(this.datos.map(n => n * 2));
  }

  //Ejercicio 2
  public MayorA5(): void{

  }

  //Ejercicio 3
  public Ordenar(flag: boolean): void{
    if(flag){
      console.log(this.datos.sort());
    }else{
      console.log(this.datos.sort((a,b) => b-a));
    }
  }

  //Ejercicio 4
  public AlumnosPorA(): void{
    console.log(this.compis
      .map(a => a.toUpperCase())
      .filter(a => a.startsWith("A")))
  }

  //Ejercicio 5
  public mediaDatos(): void{
    console.log((this.datos.reduce((acum , n) => acum + n) / this.datos.length).toFixed(2));
  }

  //Ejercicio 6
  public aplicaPorcentaje(precios: number[], porcentaje: number): void{
    console.log(precios.map(p => p * (1-porcentaje/100)));
  }

  //Ejercicio 7
  //Ejercicio a(moda)

  //Ejercicio b(media)
  public mediaEstudiantes(): void{
    console.log(this.alumnos.reduce((acum, al) => acum + al.notaMedia()) / this.alumnos.length);
  }

}
