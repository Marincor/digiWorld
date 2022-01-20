import { GetDigimons } from './../../../infrastructure/interfaces/services/digimons.models';
import { DigimonsService } from './../../../infrastructure/services/digimons.service';
import { Digimon } from '../../../infrastructure/interfaces/models/digimons.model';
import { Component, OnInit } from '@angular/core';
import { DIGIMONS } from '../../../mock-digimons';

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

  digimons?: Digimon[];
  selectedDigimon?: Digimon;

  onSelect(digimon:Digimon) {
    this.selectedDigimon = digimon;
  }

  constructor(private digimonService:DigimonsService) {

  }
  ngOnInit(): void {

    this.getDigimons()

  }

  async getDigimons()  {
    var test: any;
    this.digimonService.getDigimons().subscribe({

      next(digimons) {
        test = digimons;


      },
      error(e) {
        test = e;
        console.error(e.status)
      },
      complete() {
        console.log('finish')
      }
    });

    setTimeout(()=>{ this.digimons = test},2000)
  }
}
