import { Component, OnInit } from '@angular/core';
import { appRoutes } from './../../routes';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public routes = appRoutes;

  currentRoute: String;

  constructor(router: Router) {
    
    router.events.subscribe((route:any) => {

      this.currentRoute = route.url;
    });
  }

  ngOnInit() {
  }

}
