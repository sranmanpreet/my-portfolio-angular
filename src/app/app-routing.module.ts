import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './landing/hero/hero.component';
import { PhotosHomeComponent } from './photos/photos-home/photos-home.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { CubeComponent } from './projects/animations/cube/cube.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  { path: 'projects', component: ProjectsHomeComponent, children: [
    {
      path: 'cube', component: CubeComponent
    }
  ]},
  { path: 'blog', component: BlogHomeComponent },
  { path: 'photos', component: PhotosHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
