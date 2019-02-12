import {Component, OnInit} from '@angular/core';

import {MainMenuItem} from './main-menu-item';
import {MainMenuService} from './main-menu.service';
import {ROUTES} from './main-routes.config';
import {AuthService} from '../../pages/auth/services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public mainMenuItems: any[] = [];

  constructor(private readonly auth: AuthService, private mainMenuService: MainMenuService) {
  }

  ngOnInit(): void {
    const filter = (route: MainMenuItem) => {
      route.submenu = route.submenu.filter(filter);
      return (route.hasOwnProperty('permissions') && route.permissions.join(',').indexOf(this.auth.user.profile) !== -1)
        || !route.hasOwnProperty('permissions');
    };
console.log(filter);
    this.mainMenuItems = ROUTES.filter(filter);
  }

  toggle(event: Event, item: any, el: any) {
    event.preventDefault();

    let items: any[] = el.mainMenuItems;

    if (item.active) {
      item.active = false;
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      item.active = true;
    }
  }
}
