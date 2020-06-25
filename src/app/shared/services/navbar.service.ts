import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private heroTitleHeight: Number;

  constructor() { }

  public setHeroTitleHeight(heroTitleHeight: Number): void {
    this.heroTitleHeight = heroTitleHeight;
  }

  public getHeroTitleHeight() : Number{
    return this.heroTitleHeight;
  }
}
