import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'myApp'; 
  // appTitle = 'myApp'; // js way to do it no type

  constructor() { }

  ngOnInit() {
  }

}
