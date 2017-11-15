import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent {

  constructor(private route: Router) { }

  isActive(url) {
    return url === this.route.url;
  }

}
