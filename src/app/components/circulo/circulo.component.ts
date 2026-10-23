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

  radio: number | null = null;
  perimetroCirculo: number | null = null;
  mensajeError = '';

  constructor() { }

  ngOnInit() {}

  onCalcularPerimetro() {
    this.perimetroCirculo = null;
    this.mensajeError = '';

    if (!this.radio || this.radio <= 0) {
      this.mensajeError = 'Ingrese un radio mayor que 0.';
      return;
    }

    const circulo = new Circulo(Number(this.radio));
    this.perimetroCirculo = circulo.calcularPerimetro();
  }

  limpiarResultado() {
    this.perimetroCirculo = null;
    this.mensajeError = '';
  }
}
