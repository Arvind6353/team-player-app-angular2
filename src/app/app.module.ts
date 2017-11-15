import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { AppRoutingModule } from './app.routing';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SampleChildComponent } from './sample-child/sample-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    MainNavigationComponent,
    SampleChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
