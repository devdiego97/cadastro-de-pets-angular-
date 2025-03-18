import { PetsService } from './../../services/pets/pets.service';
import { pets } from './../../data/pets';
import { IPet } from './../../models/pets.interface';
import { Component,OnInit} from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { CardPetComponent } from '../../components/card-pet/card-pet.component';
import { CommonModule } from '@angular/common';
import { ServicesToken } from '../../services.token';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pets',
  imports: [LayoutComponent,CardPetComponent,CommonModule],
 providers:[{provide:ServicesToken.HTPP.PETS,useClass:PetsService},HttpClient],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {

  listPets:IPet[] =[]

  constructor(
   private httpService:PetsService

  ) {}

  ngOnInit(): void {
    this.loadingPets()
  }

  loadingPets(){
    this.httpService.listAllPets().subscribe({
      next:(response)=>{
        this.listPets=response
        console.log(response)
      },
      error:()=>{
        
      }
    })
  }


}
