import { Component } from '@angular/core';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';
import { NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CirculoComponent, TrianguloComponent, NgIf, IonicModule],
})
export class HomePage {
  selectedFigure: string = '';

  constructor() {}

  // guarda la figura elegida en el selector
  onFigureChange(event: any) {
    this.selectedFigure = event.detail.value;
    console.log('Selected figure:', this.selectedFigure);
  }

}
