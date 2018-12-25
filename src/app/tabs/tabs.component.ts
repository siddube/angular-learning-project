import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {
      name: 'Jim Morrison',
      side: ''
    },
    {
      name: 'John Lennon',
      side: ''
    },
    {
      name: 'George Harrison',
      side: ''
    },
    {
      name: 'Ray Manzerak',
      side: ''
    },
    {
      name: 'Paul McCartney',
      side: ''
    },
    {
      name: 'Robbie Krieger',
      side: ''
    },
    {
      name: 'Ringo Starr',
      side: ''
    }
];

  chosenList = 'all';

  onChoose = (side) => {
    this.chosenList = side;
  }

  getCharacters = () => {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }
  
  constructor() { }

  ngOnInit() {
  }

}
