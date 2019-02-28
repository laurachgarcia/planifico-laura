import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../layouts/shared-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {DashboardService} from '../../dashboard.service';

const messages: any[] = [
  {
    from: 'Nancy',
    subject: 'HTML',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    avatar: 'assets/content/avatar-4.jpg'
  },
  {
    from: 'Mary',
    subject: 'Css',
    content: 'Lorem Ipsum has been the industrys standard',
    avatar: 'assets/content/avatar-3.jpg'
  },
  {
    from: 'Bobby',
    subject: 'Angular 2',
    content: 'It is a long established fact that a reader will be distracted by the readable content',
    avatar: 'assets/content/avatar-2.jpg'
  },
  {
    from: 'Roma',
    subject: 'Type Script',
    content: 'There are many variations of passages of',
    avatar: 'assets/content/avatar-1.jpg'
  },
  {
    from: 'Amanda',
    subject: 'PHP',
    content: 'Lorem Ipsum has been the industrys standard',
    avatar: 'assets/content/avatar-5.jpg'
  },
  {
    from: 'Tom',
    subject: 'Sql',
    content: 'There are many variations of passages of',
    avatar: 'assets/content/avatar-6.jpg'
  }
];
const folders: any[] = [
  {
    icon: 'android',
    badge: false,
    name: 'Android app',
    updated: 'March 21, 2017'
  },
  {
    icon: 'update',
    badge: false,
    name: 'Update plugins',
    updated: 'March 19, 2017'
  },
  {
    icon: 'bug_report',
    badge: false,
    name: 'Fix bugs',
    updated: 'March 22, 2017'
  },
  {
    icon: 'unarchive',
    badge: false,
    name: 'Create app design',
    updated: 'March 25, 2017'
  },
  {
    icon: 'content_copy',
    badge: 8,
    name: 'Create widgets',
    updated: 'March 16, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Documentation',
    updated: 'March 28, 2017'
  }
];

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class DashboardGeneralComponent implements OnInit {
  pageTitle = 'Dashboard';
  messages = messages;
  folders = folders;
  public form: FormGroup;
  public companies: any;
  public contracts: any;
  public graphic: any;
  public barChartData: any[] = [
    {
      data: [],
      label: 'Personas en Planta',
      borderWidth: 1,
      pointRadius: 1
    }
  ];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    responsiveAnimationDuration: 500
  };
  public barChartLabels: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  constructor(private _sharedService: SharedService,
              private service: DashboardService,
              private fb: FormBuilder) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.loadData();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      company: [null, [Validators.required]],
      contract: [null, [Validators.required]],
    });
    this.form.get('contract').disable();
    this.form.get('company').valueChanges.subscribe(() => {
      this.form.get('contract').enable();
    });
  }

  setItem(id) {
    this.service.contracts(id).subscribe((data: any) => {
      this.contracts = data;
    });
  }

  loadData() {
    this.service.companies().subscribe((company: any) => {
      this.companies = company;
    });
    this.service.graphic().subscribe((data: any) => {
      this.graphic = data;
      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    });
  }

  loadGraphic(id) {
    this.service.graphicFilter(id).subscribe((data: any) => {
      this.graphic = data;
      const clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    });
  }

}

