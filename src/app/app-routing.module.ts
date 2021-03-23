import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProjectComponent } from './modules/projects/view-project/view-project.component';
import { CreateProjectComponent } from './modules/projects/create-project/create-project.component';
import { EditProjectComponent } from './modules/projects/edit-project/edit-project.component'

const routes: Routes = [
  { path: 'createproject', component:CreateProjectComponent },
  { path: 'viewproject', component: ViewProjectComponent},
  { path: 'edit/:id', component:EditProjectComponent},
  { path: '', redirectTo: '/createproject', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateProjectComponent, ViewProjectComponent ]
