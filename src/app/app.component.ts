import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
// componente raíz: solo contiene el contenedor de Ionic y el router
export class AppComponent {
  constructor() {}
}
