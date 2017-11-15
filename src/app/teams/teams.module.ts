import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsRoutingModule } from './teams.routing';
import { SharedModule } from '../shared/shared.module';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';

@NgModule({
  declarations: [ TeamsListComponent, TeamsEditComponent ],
  imports: [ CommonModule, TeamsRoutingModule, SharedModule, ReactiveFormsModule ],
  exports: [],
  providers: [],
})
export class TeamsModule {}
