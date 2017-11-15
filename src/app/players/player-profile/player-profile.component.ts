import { Component, Input } from '@angular/core';

import { Player } from '../../models/player';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent {

  @Input()
  selectedPlayer: Player;

  constructor() { }

}
