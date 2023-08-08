import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservas } from '../models/reservas';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient) { }
  
  findAll(): Observable <Reservas[]>{
    return this.http.get<Reservas[]>(this.baseUrl);
}
  
}
