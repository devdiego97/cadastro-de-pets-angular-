import { Injectable } from '@angular/core';
import { IPetsService } from './ipets.interface';
import { Observable } from 'rxjs';
import { IPet } from '../../models/pets.interface';
import { environment } from '../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService implements IPetsService {
  private readonly baseUrl=environment.apiBaseUrl



  constructor(
    private http:HttpClient

  ) { }
  listAllPets(): Observable<IPet[]> {
   
    return this.http.get<IPet[]>(`${this.baseUrl}pets`)
  }
  findBydId(id: number): Observable<IPet> {
    throw new Error('Method not implemented.');
  }
  updatePetBydId(id: number, data: Omit<IPet, 'id'>): Observable<IPet> {
    throw new Error('Method not implemented.');
  }
  deleteBydId(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
