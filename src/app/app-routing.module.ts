import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolBoardComponent } from './tool-board/tool-board.component';
import { DashboardComponent }from './dashboard/dashboard.component';

//import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {path: 'tool-board', component: ToolBoardComponent},
  { path: 'dashboard', component: DashboardComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
