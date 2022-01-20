import { HttpClient } from '@angular/common/http';
import {  DigimonImpl } from './../interfaces/contracts/digimons.contracts';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Digimon } from '../interfaces/models/digimons.model';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService implements DigimonImpl {

  constructor(private http: HttpClient) { }

  getDigimons():Observable<Digimon>{
    return this.http.get<Digimon>("https://digimon-api.vercel.app/api/digimon");
  }
}
