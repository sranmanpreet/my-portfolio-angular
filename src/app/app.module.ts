import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeroComponent } from './landing/hero/hero.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { PhotosHomeComponent } from './photos/photos-home/photos-home.component';
import { ProjectsHomeComponent } from './projects/projects-home/projects-home.component';
import { CubeComponent } from './projects/animations/cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    BlogHomeComponent,
    PhotosHomeComponent,
    ProjectsHomeComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
