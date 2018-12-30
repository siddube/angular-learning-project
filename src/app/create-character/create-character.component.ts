import { Component, OnInit } from '@angular/core';

import { BandService } from '../band-service.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  formValid: Boolean = true;
  bandService: BandService;
  constructor(bandService: BandService) { 
    this.bandService = bandService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.value.name === '') {
      this.formValid = false;
      return;
    }
    this.formValid = true;
    console.log(submittedForm);
    this.bandService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
  
}
