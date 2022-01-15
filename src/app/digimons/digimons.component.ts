import { Digimon } from './../infrastructure/models/digimons.model';
import { Component, OnInit } from '@angular/core';
import { DIGIMONS } from '../mock-digimons';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent implements OnInit {

  digimon: Digimon = {
    id: 1,
    name: '',
    img: '',
    level: ''

  }

  digimons: Digimon[] = DIGIMONS;
  url: string = "https://digimon-api.vercel.app/api/digimon";
  selectedDigimon?: Digimon;

  onSelect(digimon:Digimon) {

    this.selectedDigimon = digimon;
    console.log(this.resultReq)
  }

  ngOnInit(): void {

    this.getDigimons()

  }

  resultReq: [] = [];

  async getDigimons()  {
    const req = await  fetch(this.url);
    const result: any  = await req.json()
     this.digimons = result;
  }
}
