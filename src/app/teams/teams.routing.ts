import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  { path: '', component: TeamsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}
