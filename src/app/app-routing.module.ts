
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeCompComponent} from './pages/home-comp/home-comp.component';
import { CreatePostComponent } from './component/create-post/create-post.component';


const routes: Routes = [

  { path: 'create-post', component: CreatePostComponent },
  {
    path: 'home',
    component: HomeCompComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
