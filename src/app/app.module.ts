import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

import { BandService } from './band-service.service';

const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':side', component: ListComponent }
  ] },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' }
];

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
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
