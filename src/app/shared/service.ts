import { Injectable } from '@angular/core';

import { MOCK_PLAYER_LIST } from './sample-player-list';
import { MOCK_TEAM_LIST } from './sample-team-list';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable()
export class ApiService {

  getPlayersList(): Player[] {
    return MOCK_PLAYER_LIST;
  }

  getTeamsList(): Team[] {
    return MOCK_TEAM_LIST;
  }

}
