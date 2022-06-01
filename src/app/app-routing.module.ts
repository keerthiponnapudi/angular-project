import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolBoardComponent } from './tool-board/tool-board.component';

import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {path: 'tool-board', component: ToolBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
