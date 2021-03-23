import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './rest.service';
import { ProjectFilterPipe } from './modules/shared/project-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditProjectComponent } from './modules/projects/edit-project/edit-project.component'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectFilterPipe,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
