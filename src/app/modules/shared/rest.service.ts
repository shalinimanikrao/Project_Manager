import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/model/project.model';



  
@Injectable({
  providedIn: 'root'
})
export class RestService {

  url:string = 'http://localhost:3000/projects';
  projects: any;
  project: any;
  id: any;
  
        

  constructor(private http: HttpClient) { }

  createProject(project: any) {
    return this.http.post("http://localhost:3000/projects", project);
  }

  getAllProject() {
    return this.http.get("http://localhost:3000/projects") ;   

  }

  deleteProject(project) {

    return this.http.delete("http://localhost:3000/projects/" +project.id) ;
  }
  
  getCurrentData(id: number){
    return this.http.get("http://localhost:3000/projects/" +id) ;
  }

  updateProject(id, data){
    return this.http.put("http://localhost:3000/projects/" +id, data) ;
   }
   
}
