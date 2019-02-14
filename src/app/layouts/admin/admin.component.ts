import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../shared-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pageTitle: any;
  rtl: boolean;
  @Input() openedSidebar: boolean;

  constructor(private _sharedService: SharedService) {
    this.rtl = false;
    this.openedSidebar = false;

    _sharedService.changeEmitted$.subscribe(
      title => {
        this.pageTitle = title;
        this.openedSidebar = false;
      }
    );
  }

  ngOnInit() { }

  getClasses() {
    return {
      'open-sidebar': this.openedSidebar,
      'rtl': this.rtl
    };
  }

  sidebarState() {
    this.openedSidebar = !this.openedSidebar;
  }
}
