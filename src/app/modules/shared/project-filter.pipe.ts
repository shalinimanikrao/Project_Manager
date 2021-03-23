import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";
import { Project } from "src/app/model/project.model";

@Pipe({
    name: 'projectFilter'
})

export class ProjectFilterPipe implements PipeTransform {
    transform(allProject: Project[], searchTerm:string): Project[] {
        if (! allProject || !searchTerm){
            return allProject;
        }
        return allProject.filter(project => project.projectname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}
