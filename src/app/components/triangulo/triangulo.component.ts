import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // para usar *ngIf
import { FormsModule } from '@angular/forms'; // para usar formularios y [(ngModel)]
import { IonicModule } from '@ionic/angular/lazy'; // para usar las etiquetas <ion-...>
import { TrianguloEscaleno } from '../../models/figuras.model'; // nuestra clase del modelo

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class TrianguloComponent implements OnInit {
  // 00 VARIABLES
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;

  perimetroTriangulo: number | null = null;

  mensajeError = '';

  //
  constructor() {}

  ngOnInit() {}

  // 01 MÉTODOS
  onCalcularPerimetro() {
    //setear
    this.perimetroTriangulo = null;
    this.mensajeError = '';

    // los tres lados deben existir y ser positivos
    if (
      !this.ladoA || !this.ladoB || !this.ladoC ||
      this.ladoA <= 0 || this.ladoB <= 0 || this.ladoC <= 0
    ) {
      this.mensajeError = 'Ingrese los tres lados con valores mayores que 0.';
      return;
    }

    // convierte a número (el input puede entregar texto)
    const a = Number(this.ladoA);
    const b = Number(this.ladoB);
    const c = Number(this.ladoC);

    // desigualdad triangular
    if (a + b <= c || a + c <= b || b + c <= a) {
      this.mensajeError = 'Esas medidas no forman un triángulo.';
      return;
    }

    // descarta equilátero e isósceles (lados repetidos)
    if (a === b || b === c || a === c) {
      this.mensajeError =
        'En un triángulo escaleno los tres lados deben ser distintos.';
      return;
    }

    // el cálculo vive en el modelo
    const triangulo = new TrianguloEscaleno(a, b, c);
    this.perimetroTriangulo = triangulo.calcularPerimetro();
  }


  // oculta resultado y error cuando el usuario edita un lado
  limpiarResultado() {
    this.perimetroTriangulo = null;
    this.mensajeError = '';
  }
}
