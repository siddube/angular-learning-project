import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandService } from '../band-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  bandSevice: BandService;
  constructor(activatedRoute: ActivatedRoute, bandSevice: BandService) { 
    this.activatedRoute = activatedRoute;
    this.bandSevice = bandSevice;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.bandSevice.getCharacters(params.side)
      }
    );
  }

}
