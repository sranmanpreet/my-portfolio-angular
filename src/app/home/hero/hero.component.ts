import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit{

  @ViewChild("heroTitle")
  heroTitle: ElementRef;

  constructor(private navbarService: NavbarService) { }

  ngAfterViewInit(): void {
  //  this.navbarService.setHeroTitleHeight(this.heroTitle.nativeElement.clientHeight);    
  }

  ngOnInit(): void {
  }

}
