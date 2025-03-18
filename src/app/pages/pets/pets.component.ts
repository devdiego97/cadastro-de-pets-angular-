import { pets } from './../../data/pets';
import { IPet } from './../../models/pets.interface';
import { Component,OnInit} from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CardPetComponent } from '../../components/card-pet/card-pet.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets',
  imports: [LayoutComponent,CardPetComponent,CommonModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {

  listPets:IPet[] =pets

  constructor( ) {}

  ngOnInit(): void {
    this.listPets
  }


}
