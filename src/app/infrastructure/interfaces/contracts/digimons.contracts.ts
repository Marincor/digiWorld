import { Digimon } from './../models/digimons.model';
import { Observable } from "rxjs";

export interface DigimonImpl {
  getDigimons(): Observable<Digimon>;
}
