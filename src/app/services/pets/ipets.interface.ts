import { IPet } from './../../models/pets.interface';
import { Observable } from "rxjs";




export interface IPetsService{
 listAllPets():Observable<IPet[]>
 findBydId(id:number):Observable<IPet>
 updatePetBydId(id:number,data:Omit<IPet,"id">):Observable<IPet>
 deleteBydId(id:number):Observable<void>


}