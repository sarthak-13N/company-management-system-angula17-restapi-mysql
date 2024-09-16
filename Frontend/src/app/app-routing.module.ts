import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ShowProjectDetailsComponent } from './show-project-details/show-project-details.component';

  

const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"projects",component: ProjectListComponent},
  {path:"services",component: ServicesComponent},
  {path:"contactus",component: ContactusComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'updating-id/:id',component:UpdateProjectComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'details-of-project/:id',component:ShowProjectDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'add-project',component:AddProjectComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
