import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared/service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playersList: Player[];
  selectedPlayer: Player;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
   this.playersList = this.apiService.getPlayersList();
  }

  setSelectedPlayer(selectedPlayer: Player) {
    this.selectedPlayer = selectedPlayer;
  }

}
