import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  lastScrollTop = 0;

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    let scrollOffset = $event.srcElement;
    console.log("window scroll: ", scrollOffset);
  }

  ngOnInit(): void {
  }

}
