import { Component, Input } from '@angular/core';
import { IPet } from '../../models/pets.interface';

@Component({
  selector: 'app-card-pet',
  imports: [],
  templateUrl: './card-pet.component.html',
  styleUrl: './card-pet.component.css'
})
export class CardPetComponent {


 constructor(){

 }

 @Input() pet!: IPet;

}
