import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './model/project.model';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  createProject(newProject: Project) {
    throw new Error('Method not implemented.');
  }
      

  constructor() { }

  
}
 