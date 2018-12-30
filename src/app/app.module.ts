import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

import { BandService } from './band-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemComponent,
    ListComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
