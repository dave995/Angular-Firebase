import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { FrontdasboardComponent } from './frontdasboard/frontdasboard.component';
import { ProduitComponent } from './component/produit/produit.component';

const routes: Routes = [
   {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'file-upload', component:FileuploadComponent},
  {path : 'categories', component:CategoriesComponent},
  {path : 'frontedashboard', component: FrontdasboardComponent},
  {path : 'produit', component: ProduitComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
