import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {
  nom: string="";
  email: string="";
  password: string="";
  confirmation: string="";
  age: number=0;


}
