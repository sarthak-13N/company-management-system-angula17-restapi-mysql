import { Component } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-show-project-details',
  templateUrl: './show-project-details.component.html',
  styleUrls: ['./show-project-details.component.css']
})
export class ShowProjectDetailsComponent {

  
  
  id: number
  project!: Project
  constructor(private route: ActivatedRoute, private projectservice: ProjectService) { 

    this.id=0
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.project = new Project();
    this.projectservice.getProjectById(this.id).subscribe( data => {
      this.project = data;
    });
  }
}
