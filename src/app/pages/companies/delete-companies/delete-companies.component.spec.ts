import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCompaniesComponent } from './delete-companies.component';

describe('DeleteCompaniesComponent', () => {
  let component: DeleteCompaniesComponent;
  let fixture: ComponentFixture<DeleteCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
