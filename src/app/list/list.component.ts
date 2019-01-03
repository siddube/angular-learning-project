import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandService } from '../band-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  bandSevice: BandService;
  subscription;
  loadedSide = 'all';
  constructor(activatedRoute: ActivatedRoute, bandSevice: BandService) { 
    this.activatedRoute = activatedRoute;
    this.bandSevice = bandSevice;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.bandSevice.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.bandSevice.charactersChanged.subscribe(
      () => {
        this.characters = this.bandSevice.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
