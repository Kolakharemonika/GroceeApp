import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from '../admin-app/add-category.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'Home', component: HomeComponent },
  // { path: 'log-details', component: LoginDetailsComponent },

  // { path: 'Create-user', component: CreateUserComponent },

  // admin
  { path: 'Add-Category', component: AddCategoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
