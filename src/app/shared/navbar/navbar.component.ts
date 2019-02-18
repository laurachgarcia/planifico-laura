import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {App} from '../../utils/constantes/app';
import {Router} from '@angular/router';
import {AuthService} from '../../pages/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() openedSidebar = false;
  @Output() sidebarState = new EventEmitter();
  name: any;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  open(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');
  }

   close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;
     // this.authService.logout();

     for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
  }

  logout($event: Event) {
    console.log('llego aqui logout');
    console.log($event);
    $event.preventDefault();
    this.authService.logout();
    this.router.navigateByUrl('auth/login');
  }

  getList(name) {
    console.log(name);
    this.router.navigateByUrl(`/admin/${name}`);
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }

  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem('user')).name;
  }
}
