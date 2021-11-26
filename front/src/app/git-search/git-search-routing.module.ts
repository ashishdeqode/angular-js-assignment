import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitSearchRoutingModule { }
