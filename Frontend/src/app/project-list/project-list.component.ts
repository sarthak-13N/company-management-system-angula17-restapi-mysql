import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  projects: Project[];
  EnteredID!:number;

  constructor(private projectservice: ProjectService,  private router: Router) {
    this.projects=[];
   
   }

  ngOnInit(): void {
    
    // this.employees = [
    //   { "id":1,fname: 'John', lname: 'Doe', email: 'john@example.com', salary: 50000, department: 'IT', designation: 'Developer' },
      
    // ];
    
    this.getProjects();
  }


  goToProject(){
    console.log(this.EnteredID); 
    this.router.navigate(['details-of-project',this.EnteredID]);
  }

  getProjects(){
    this.projectservice.getProjectList().subscribe(data => {this.projects = data;});

    
  }

  updateProject(id: number){
    this.router.navigate(['updating-id', id]);
  }




  deleteProject(id: number){

    if(confirm("Are you sure to delete Employee ID: "+id)){
    this.projectservice.deleteProject(id).subscribe( data => {
      console.log(data);
      this.getProjects();
    })}
  }
 

  detailsOfProject(id: number){
    this.router.navigate(['details-of-project', id]);
  }

  
}