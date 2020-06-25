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
      transition('transparent => solid', [
        animate('0.5s')
      ]),
      transition('solid => transparent', [
        animate('0.5s')
      ])
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  isTransparent = true;

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset < element.clientHeight) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }
  }

}
