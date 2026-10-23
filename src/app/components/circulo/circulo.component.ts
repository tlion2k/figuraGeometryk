import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { Circulo } from '../../models/figuras.model';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})

export class CirculoComponent implements OnInit {

  // null = aún sin valor ingresado / sin calcular
  radio: number | null = null;
  perimetroCirculo: number | null = null;
  mensajeError = '';

  constructor() { }

  ngOnInit() {}

  onCalcularPerimetro() {
    // reinicia estado previo
    this.perimetroCirculo = null;
    this.mensajeError = '';

    // validación del radio
    if (!this.radio || this.radio <= 0) {
      this.mensajeError = 'Ingrese un radio mayor que 0.';
      return;
    }

    // el cálculo vive en el modelo
    const circulo = new Circulo(Number(this.radio));
    this.perimetroCirculo = circulo.calcularPerimetro();
  }

  // oculta resultado y error cuando el usuario edita el dato
  limpiarResultado() {
    this.perimetroCirculo = null;
    this.mensajeError = '';
  }
}
