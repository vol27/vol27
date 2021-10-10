import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 constructor( @Inject(DOCUMENT) private document: Document) {}
 public  scrollChange =""

  @HostListener("window:scroll", [])onWindowScroll() {
    //.scrollTop
    if(this.document.documentElement.scrollTop>90){
       this.scrollChange ="black-important"
    }else{
      this.scrollChange ="";
    }
    //.clientHeight
 //   console.log(this.document.documentElement.clientHeight);
    //.innerHeight
  //  console.log(window.innerHeight);
  }
}
