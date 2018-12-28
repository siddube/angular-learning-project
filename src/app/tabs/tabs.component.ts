import { Component, OnInit } from '@angular/core';

import { BandService } from '../band-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  chosenList = 'all';
  bandService: BandService;
  characters = [];

  constructor(bandService: BandService) {
    this.bandService = bandService;
  }

  ngOnInit() {
  }

  onChoose = (side) => {
    this.chosenList = side;
  }
  getCharacters() {
    this.characters = this.bandService.getCharacters(this.chosenList);
    return this.characters;
  }
}
