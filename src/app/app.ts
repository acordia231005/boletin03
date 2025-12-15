import { Component, OnInit, signal } from "@angular/core";
import { Alumno } from "./model/alumno";


export class App implements OnInit{
  protected readonly title = signal('boletin3');
  public datos: number[] = [1,7,8,3,4,9];
  public compis: string[] = ["Juanillo de la palma", "xexu", "Alberto","Andres", "Antonio de triana", "Amanda", "Pedro", "Enrique"];
  public alumnos: Alumno[] = [];

  // Carga de datos al principio de la pagina como onload.
   ngOnInit(): void {
    this.alumnos.push(new Alumno('Juan', 'Pérez', new Date('1998-05-12'), [6, 5, 9]));
    this.alumnos.push(new Alumno('Ana', 'Gómez', new Date('2001-03-22'), [10, 6, 6]));
    this.alumnos.push(new Alumno('Luis', 'Martínez', new Date('1995-11-30'), [4, 6, 4]));

    console.log("carga de datos: " + this.datos);
    console.log("Alumnos cargados: " + this.compis);
    console.log("Alumno" + this.alumnos);
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
  public modaAlumnos(alumnos : Alumno[]): void{
    const notas: number[] = [];
  for (const alumno of alumnos) {
    for (const nota of alumno.notas) {
      notas.push(nota);
    }
  }

  let moda = notas[0];
  let maxVeces = 1;

  for (let i = 1; i < notas.length; i++) {
    let veces = 0;
    for (let j = 0; j < notas.length; j++) {
      if (notas[j] === notas[i]) veces++;
    }

    if (veces > maxVeces) {
      maxVeces = veces;
      moda = notas[i];
    }
  }

  console.log('Moda:', moda, 'veces:', maxVeces);
  }

  //Ejercicio b(media)
  public mediaEstudiantes(): void{
    let notasTotales: number[] = this.alumnos.flatMap(a=> a. notas);
    const suma = notasTotales.reduce((acc, n) => acc + n);
    const total = (suma / notasTotales.length).toFixed(2);
    console.log('Media de todos los alumnos: ' + total);
  }

  //Ejercicio c(media de los aprobados)
  public mediaAprobados():void{
    const aprobados = this.alumnos.flatMap(a => a.notas).filter(n => n >= 5);
    const suma = aprobados.reduce((acc, n) => acc + n);
    const media = suma / aprobados.length;

    console.log('Media de los alumnos aprobados: ' + (media).toFixed(2));
  }

  //Ejercicio d(mayor nota nacidos antes del 2000)
  public mayorNota(): void{
    const notasPre2000 = this.alumnos
      .filter(a => a.fechaNac.getFullYear() < 2000)
      .flatMap(a => a.notas);
    const mayor = Math.max(...notasPre2000);

    console.log('Mayor nota de alumnos nacidos antes del 2000: ' + mayor);
  }
}
