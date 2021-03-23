import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { RestService } from 'src/app/modules/shared/rest.service'; 
import { NgxPaginationModule } from 'ngx-pagination'

@Component({  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
}) 
export class ViewProjectComponent implements OnInit {
  p: number = 1;
  this: any;
  allProject:Object;
  collection = [];


  projects: Project =
    {         
    proid: '',
    gfbf: '',
    servline: '',
    projectname: '',
    eimid: '',
    gsd: '',
    prowner: '',
    id:''   
}
   
  
  constructor(private restService: RestService ) { 
    
  }

  ngOnInit(): void {
    this.getLatestProject();
  }

  // editProject( project){
  //   this.projects = project;
  // }

  

  createProject(formObj){

    console.log(formObj)
    this.restService.createProject(formObj).subscribe((response)=> {
         this.getLatestProject();
      });    
   }

  getLatestProject(){
    
    this.restService.getAllProject().subscribe((response)=>{
      this.allProject = response
    });
    }

    
    // updateProject(){
      
    //   this.restService.updateProject(this.projects).subscribe(()=>{
    //     this.getLatestProject();
    //   })
    // }

    deleteProject(project) {
      this.restService.deleteProject(project).subscribe(()=>{
        this.getLatestProject();
      });

    }
    
  


}
 