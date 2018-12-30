import { Injectable } from '@angular/core';

@Injectable()
export class BandService {
  private characters = [
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
  constructor() { }
  
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
