import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules} from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PlayerListComponent } from "./players/player-list/player-list.component";

const routes: Routes = [

  { path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule' },
  { path: '', component: PlayerListComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes , {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
