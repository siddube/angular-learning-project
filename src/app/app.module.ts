import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

import { BandService } from './band-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
