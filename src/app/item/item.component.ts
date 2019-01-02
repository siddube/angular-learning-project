import { Component, OnInit, Input } from '@angular/core';
import { BandService } from '../band-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  bandService: BandService;
  constructor(bandService: BandService) {
    this.bandService = bandService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    this.bandService.onSideChosen({ name: this.character.name, side: side });
  }

}
