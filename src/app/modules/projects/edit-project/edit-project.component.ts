import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from 'src/app/model/project.model';
import { RestService } from 'src/app/modules/shared/rest.service'; 
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  form: any;
  this: any;
  //alert:boolean = false;

  editProject=new FormGroup ({
    proid: new FormControl (''),
    gfbf: new FormControl (''),
    servline: new FormControl (''),
    projectname: new FormControl (''),
    eimid: new FormControl (''),
    gsd: new FormControl (''),
    prowner: new FormControl (''),
    id: new FormControl('')
    
  })
  alert: boolean;

  constructor( private restService: RestService, private router:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.params.id)
    this.restService.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
        this.editProject=new FormGroup ({              
        proid: new FormControl (result['proid']),
        gfbf: new FormControl (result['gfbf']),
        servline: new FormControl (result['servline']),
        projectname: new FormControl (result['projectname']),
        eimid: new FormControl (result['eimid']),
        gsd: new FormControl (result['gsd']),
        prowner: new FormControl (result['prowner']),
        id: new FormControl(result['id'])
        
      })         
    })
  }
  
  updateProject(){
    this.restService.updateProject(this.router.snapshot.params.id,this.editProject.value).subscribe((result)=>{
      console.log(result,"Data updated successfully!")
      //this.alert=true;
      Swal.fire({
        title: 'Project updated successfully!',
        icon: 'success',
        //showCancelButton: true,
        confirmButtonText: 'Ok',
        
      })
    })
  }
  closeAlert(){
    //this.alert=false;  
    
  }

}
  

