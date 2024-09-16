import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {


  
  id: number;
  project: Project = new Project();
  
  
  constructor(private projectservice: ProjectService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.id=0
    }
    //loading the data into form 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.projectservice.getProjectById(this.id).subscribe(data => {
      this.project = data;
    }, error => console.log(error));
 
 
  }

  onSubmit(){
    this.projectservice.updateProject(this.id, this.project).subscribe( data =>{
      this.goToProjectList();
    }
    , error => console.log(error));
  }

  goToProjectList(){
    this.router.navigate(['/projects']);
  }
}
