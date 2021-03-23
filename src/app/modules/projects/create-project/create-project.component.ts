import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Project } from 'src/app/model/project.model';
import { RestService } from '../../shared/rest.service';




@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})

export class CreateProjectComponent implements OnInit {

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



  router: any;
  createProjectForm: any;
  this:any;
  alert: boolean;
   
  constructor(private restService: RestService ) { }
  
    

  ngOnInit(){ }

  cancel(form: FormGroup) {

    form.reset();
  }

    createProject(formObj){

     console.log(formObj)
     this.restService.createProject(formObj).subscribe((response)=> {
          this.getLatestProject();
          this.alert=true;
       });    
    }
        
    getLatestProject(){
      this.restService.getAllProject()
    }

    closeAlert(){
      this.alert=false;
    }
   
  }

                        
  

