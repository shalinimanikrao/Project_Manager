import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { RestService } from 'src/app/modules/shared/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnglEight';

  constructor (private restService:RestService) {}

  //   createProject(formObj: Project) {   
      
  //    console.log(formObj);     
      
  //     this.restService.createProject(formObj).subscribe((response)=> {
  //     console.log("user created!");
  //      })
  // }

  


}
