import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Team } from '../../models/Team';
import { TeamsViewModel } from './teams-edit-view-model';


@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.css']
})
export class TeamsEditComponent implements OnInit {

  @Input()
  selectedTeam: Team;

  teamEditForm: FormGroup;

  showNotEditing: boolean = true;

  formFields: any;

  teamsViewModel: TeamsViewModel;

  constructor( private fb: FormBuilder) {
    this.teamsViewModel = new TeamsViewModel();
  }

  ngOnInit() {
  //  this.buildForm();
  }

  buildForm() {
    this.teamEditForm = this.fb.group({
      'name': [this.teamsViewModel.name, [Validators.required]],
      'location': [this.teamsViewModel.location, [Validators.required]],
      'noOfPlayers': [this.teamsViewModel.noOfPlayers, [Validators.required]],
      'rank': [this.teamsViewModel.rank]
    });

  }

  ngOnChanges() {
    if(this.selectedTeam)
    {
      this.showNotEditing = false;
      this.formFields = [
        {key:'name'},
        {key:'location'},
        {key:'noOfPlayers'},
        {key:'rank'}
      ]

      if(this.formFields && this.formFields.length > 0)
      {
        let controls = {};

        this.formFields.forEach(field => {
          controls[field.key] = new FormControl(this.selectedTeam[field.key]);
        });

        this.teamEditForm = new FormGroup(controls);
      }
      else {
        this.teamEditForm = new FormGroup({});
      }
    }
    else {
      this.teamEditForm = new FormGroup({});
    }
  }

  saveTeam() {
     for(var propertyName in this.teamEditForm.value) {
       this.selectedTeam[propertyName] = this.teamEditForm.value[propertyName];
   }

   // Ensure that the form closes.
    this.selectedTeam = null;
  }

}
