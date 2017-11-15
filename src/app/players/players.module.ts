import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoutingModule } from './players.routing';
import { SharedModule } from '../shared/shared.module';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

@NgModule({
  declarations: [PlayerListComponent, PlayerProfileComponent],
  imports: [ CommonModule, PlayerRoutingModule, SharedModule ],
  exports: [],
  providers: [],
})
export class PlayersModule {}
