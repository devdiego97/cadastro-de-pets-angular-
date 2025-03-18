import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PetsComponent } from './pages/pets/pets.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"pets",
    component:PetsComponent
  }
];
