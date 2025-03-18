import { InjectionToken } from "@angular/core";
import { IPetsService } from "./services/pets/ipets.interface";


export const ServicesToken={
 HTPP:{
   PETS:new InjectionToken<IPetsService>("ServicesToken.HTTP.PETS")
 }
}