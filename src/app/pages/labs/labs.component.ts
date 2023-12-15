import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'HOLA'
  tasks = [
    'instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]
  name = 'Fernando';
  age = 19;
}
