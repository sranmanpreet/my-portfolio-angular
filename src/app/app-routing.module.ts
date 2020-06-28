import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { PhotosHomeComponent } from './photos/photos-home/photos-home.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { CubeComponent } from './projects/animations/cube/cube.component';
import { ExperienceHomeComponent } from './experience/experience-home/experience-home.component';
import { RecentWorksHomeComponent } from './recent-works/recent-works-home/recent-works-home.component';
import { ContactHomeComponent } from './contact/contact-home/contact-home.component';


const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'experience', component: ExperienceHomeComponent },
  { path: 'recent-works', component: RecentWorksHomeComponent },
  { path: 'projects', component: ProjectsHomeComponent, children: [
    {
      path: 'cube', component: CubeComponent
    }
  ]},
  { path: 'blog', component: BlogHomeComponent },
  { path: 'photos', component: PhotosHomeComponent },
  { path: 'contact', component: ContactHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
