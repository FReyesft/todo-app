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
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'
  person = {
    name: 'Fernando', 
    age: 19,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  clickHandler() {
    alert("COLA")
  }

  change(event: Event){
    console.log(event)
  }
}
