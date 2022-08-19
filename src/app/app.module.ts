import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './componentes/team/team.component';
import { PlayerComponent } from './componentes/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
