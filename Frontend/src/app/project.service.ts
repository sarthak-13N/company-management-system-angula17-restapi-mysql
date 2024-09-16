import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

 
  private baseURL = "http://localhost:8082/api/projects";

  constructor(private httpClient: HttpClient) { }
  
  getProjectList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }

  addProject(project: Project): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, project);
  }

  getProjectById(id: number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.baseURL}/${id}`);
  }


  updateProject(id: number, project: Project): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, project);
  }

  deleteProject(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}