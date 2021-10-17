import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor( @Inject(DOCUMENT) private document: Document) {}
  public  scrollChange =""

  @HostListener("window:scroll", [])onWindowScroll() {
    //.scrollTop
    if(this.document.documentElement.scrollTop>90){
      this.scrollChange ="black-important"
    }else{
      this.scrollChange ="";
    }
  }
}
