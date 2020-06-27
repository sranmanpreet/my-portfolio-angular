import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NavbarService } from '../shared/services/navbar.service';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navbarAnimation', [
      state('transparent', style({
        height: '90px',
        opacity: 0.5
      })),
      state('solid', style({
        height: '80px',
        opacity: 1
      })),
      transition('transparent <=> solid', [
        animate('0.5s')
      ])
    ]),
    trigger('navbarAnimationHide', [
      state('hide', style({
        top: '-100px'
      })),
      state('show', style({
        top: '0px'
      })),
      transition('hide <=> show', [
        animate('0.5s')
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  isTransparent = true;
  previousScrollPosition = 0;
  displayNavbar = true;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.previousScrollPosition = window.pageYOffset;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    let currentScrollPosition = window.pageYOffset;
    if (window.pageYOffset < element.clientHeight) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }
    if (currentScrollPosition > 200) {
      if (this.previousScrollPosition > currentScrollPosition) {
        this.displayNavbar = true;
      } else {
        this.displayNavbar = false;
      }
      this.previousScrollPosition = currentScrollPosition;
    }
  }

}
