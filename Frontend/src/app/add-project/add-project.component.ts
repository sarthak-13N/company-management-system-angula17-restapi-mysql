import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Project } from '../project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  constructor(
    private projectservice: ProjectService,
    private router: Router,

  ) {

  }

  submitform!: NgForm;
  private baseURL = "http://localhost:8082/api/projects";
  project: Project = new Project();
  
  saveProject() {
    this.projectservice.addProject(this.project).subscribe(data => {
      console.log(data);
      this.goToProject();
    },
      error => console.log(error));
  }

  goToProject() {
    this.router.navigate(['/projects']);
  }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.project);


    this.saveProject();
  }


}