import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teamsList: Team[];
  selectedTeam: Team;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.teamsList = this.apiService.getTeamsList();
  }

  selectTeam(team) {
    this.selectedTeam = team;
  }

}
