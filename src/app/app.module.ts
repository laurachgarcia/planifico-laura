import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MaterialModule} from './pages/material-components/material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ChartsModule} from 'ng2-charts';
import {CalendarModule} from 'angular-calendar';
import {AgmCoreModule} from '@agm/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DefaultLayoutComponent} from './layouts/default/default.component';
import {ExtraLayoutComponent} from './layouts/extra/extra.component';

// A2 Components
import {NavbarComponent} from './a2-components/navbar/navbar.component';
import {SidebarComponent} from './a2-components/sidebar/sidebar.component';
import {LogoComponent} from './a2-components/logo/logo.component';
import {MainMenuComponent} from './a2-components/main-menu/main-menu.component';
import {A2CardComponent} from './a2-components/card/card.component';
import {AlertComponent} from './a2-components/alert/alert.component';
import {BadgeComponent} from './a2-components/badge/badge.component';
import {BreadcrumbComponent} from './a2-components/breadcrumb/breadcrumb.component';
import {FileComponent} from './a2-components/file/file.component';
import {NIHTimelineComponent} from './a2-components/ni-h-timeline/ni-h-timeline.component';

// A2 Pages
import {PageDashboardComponent} from './pages/dashboard/dashboard.component';
import {PageDashboard2Component} from './pages/dashboard-2/dashboard-2.component';
import {PageButtonComponent} from './pages/material-components/button/button.component';
import {PageCardComponent} from './pages/material-components/card/card.component';
import {PageCheckboxComponent} from './pages/material-components/checkbox/checkbox.component';
import {PageChipsComponent} from './pages/material-components/chips/chips.component';
import {PageDialogComponent} from './pages/material-components/dialog/dialog.component';
import {DialogResultComponent} from './pages/material-components/dialog/dialog.component';
import {PageIconComponent} from './pages/material-components/icon/icon.component';
import {PageInputComponent} from './pages/material-components/input/input.component';
import {PageListComponent} from './pages/material-components/list/list.component';
import {PageMenuComponent} from './pages/material-components/menu/menu.component';
import {PageProgressBarComponent} from './pages/material-components/progress-bar/progress-bar.component';
import {PageProgressSpinnerComponent} from './pages/material-components/progress-spinner/progress-spinner.component';
import {PageRadioButtonComponent} from './pages/material-components/radio-button/radio-button.component';
import {PageSelectComponent} from './pages/material-components/select/select.component';
import {PageSliderComponent} from './pages/material-components/slider/slider.component';
import {PageSlideToggleComponent} from './pages/material-components/slide-toggle/slide-toggle.component';
import {PageSnackbarComponent} from './pages/material-components/snackbar/snackbar.component';
import {PageTabsComponent} from './pages/material-components/tabs/tabs.component';
import {PageToolbarComponent} from './pages/material-components/toolbar/toolbar.component';
import {PageTooltipComponent} from './pages/material-components/tooltip/tooltip.component';

import {PageFileComponent} from './pages/a2-components/file/file.component';
import {PageA2CardComponent} from './pages/a2-components/a2-card/a2-card.component';
import {PageAlertComponent} from './pages/a2-components/alert/alert.component';
import {PageBadgeComponent} from './pages/a2-components/badge/badge.component';
import {PageBreadcrumbComponent} from './pages/a2-components/breadcrumb/breadcrumb.component';

import {PageTypographyComponent} from './pages/typography/typography.component';
import {PageNotFoundComponent} from './pages/not-found/not-found.component';

//Extra pages

import {PageSignIn1Component} from './pages/extra-pages/sign-in-1/sign-in-1.component';
import {PageSignIn2Component} from './pages/extra-pages/sign-in-2/sign-in-2.component';
import {PageSignIn3Component} from './pages/extra-pages/sign-in-3/sign-in-3.component';
import {PageSignUp1Component} from './pages/extra-pages/sign-up-1/sign-up-1.component';
import {PageSignUp2Component} from './pages/extra-pages/sign-up-2/sign-up-2.component';
import {PageForgotComponent} from './pages/extra-pages/forgot/forgot.component';
import {PageConfirmComponent} from './pages/extra-pages/confirm/confirm.component';
import {Page404Component} from './pages/extra-pages/page-404/page-404.component';
import {Page500Component} from './pages/extra-pages/page-500/page-500.component';
import {PageAboutUsComponent} from './pages/pages-service/about-us/about-us.component';
import {PageFaqComponent} from './pages/pages-service/faq/faq.component';
import {PageTimelineComponent} from './pages/pages-service/timeline/timeline.component';
import {PageInvoiceComponent} from './pages/pages-service/invoice/invoice.component';
import {PageLineChartComponent} from './pages/charts/line-chart/line-chart.component';
import {PageBarChartComponent} from './pages/charts/bar-chart/bar-chart.component';
import {PageDoughnutChartComponent} from './pages/charts/doughnut-chart/doughnut-chart.component';
import {PageRadarChartComponent} from './pages/charts/radar-chart/radar-chart.component';
import {PagePieChartComponent} from './pages/charts/pie-chart/pie-chart.component';
import {PagePolarAreaChartComponent} from './pages/charts/polar-area-chart/polar-area-chart.component';
import {PageDynamicChartComponent} from './pages/charts/dynamic-chart/dynamic-chart.component';
import {PageCalendarComponent} from './pages/calendar/calendar.component';
import {CalendarDialogComponent} from './pages/calendar/calendar.component';
import {PageSimpleTableComponent} from './pages/tables/simple-table/simple-table.component';
import {PageBootstrapTablesComponent} from './pages/tables/bootstrap-tables/bootstrap-tables.component';
import {PageSortingTableComponent} from './pages/tables/sorting-table/sorting-table.component';
import {PageFilteringTableComponent} from './pages/tables/filtering-table/filtering-table.component';
import {PagePaginationTableComponent} from './pages/tables/pagination-table/pagination-table.component';
import {PageFormElementsComponent} from './pages/forms/form-elements/form-elements.component';
import {PageFormLayoutComponent} from './pages/forms/form-layout/form-layout.component';
import {PageFormValidationComponent} from './pages/forms/form-validation/form-validation.component';
import {PageGoogleMapComponent} from './pages/maps/google-map/google-map.component';
import {PageLeafletMapComponent} from './pages/maps/leaflet-map/leaflet-map.component';
import {PageWidgetsComponent} from './pages/widgets/widgets.component';
import {FooterComponent} from './a2-components/footer/footer.component';
import {AdditionNavbarComponent} from './a2-components/addition-navbar/addition-navbar.component';
import {ListComponent} from "./pages/users/list/list.component";
import {AddUserComponent} from "./pages/users/add-user/add-user.component";
import {EditUserComponent} from "./pages/users/edit-user/edit-user.component";
import {DeleteUserComponent} from "./pages/users/delete-user/delete-user.component";
import {ListCompaniesComponent} from './pages/companies/list-companies/list-companies.component';
import {AddCompaniesComponent} from './pages/companies/add-companies/add-companies.component';
import {EditCompaniesComponent} from './pages/companies/edit-companies/edit-companies.component';
import {ToastrModule} from "ngx-toastr";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ChartsModule,
        ToastrModule.forRoot(),
        CalendarModule.forRoot(),
        MaterialModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
        }),
        LeafletModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DefaultLayoutComponent,
        ExtraLayoutComponent,

        NavbarComponent,
        SidebarComponent,
        LogoComponent,
        MainMenuComponent,
        A2CardComponent,
        AlertComponent,
        BadgeComponent,
        BreadcrumbComponent,
        FileComponent,
        NIHTimelineComponent,

        PageDashboardComponent,
        PageDashboard2Component,
        PageButtonComponent,
        PageCardComponent,
        PageCheckboxComponent,
        PageChipsComponent,
        PageDialogComponent,
        DialogResultComponent,
        PageIconComponent,
        PageInputComponent,
        PageListComponent,
        PageMenuComponent,
        PageProgressBarComponent,
        PageProgressSpinnerComponent,
        PageRadioButtonComponent,
        PageSelectComponent,
        PageSliderComponent,
        PageSlideToggleComponent,
        PageSnackbarComponent,
        PageTabsComponent,
        PageToolbarComponent,
        PageTooltipComponent,

        PageFileComponent,
        PageA2CardComponent,
        PageAlertComponent,
        PageBadgeComponent,
        PageBreadcrumbComponent,

        PageTypographyComponent,
        PageNotFoundComponent,

        PageSignIn1Component,
        PageSignIn2Component,
        PageSignIn3Component,
        PageSignUp1Component,
        PageSignUp2Component,
        PageForgotComponent,
        PageConfirmComponent,
        Page404Component,
        Page500Component,
        PageAboutUsComponent,
        PageFaqComponent,
        PageTimelineComponent,
        PageInvoiceComponent,
        PageLineChartComponent,
        PageBarChartComponent,
        PageDoughnutChartComponent,
        PageRadarChartComponent,
        PagePieChartComponent,
        PagePolarAreaChartComponent,
        PageDynamicChartComponent,
        PageCalendarComponent,
        CalendarDialogComponent,
        PageSimpleTableComponent,
        PageBootstrapTablesComponent,
        PageSortingTableComponent,
        PageFilteringTableComponent,
        PagePaginationTableComponent,
        PageFormElementsComponent,
        PageFormLayoutComponent,
        PageFormValidationComponent,
        PageGoogleMapComponent,
        PageLeafletMapComponent,
        PageWidgetsComponent,
        FooterComponent,
        AdditionNavbarComponent,
        ListComponent,
        AddUserComponent,
        EditUserComponent,
        DeleteUserComponent,
        ListCompaniesComponent,
        AddCompaniesComponent,
        EditCompaniesComponent
    ],
    exports: [
        MaterialModule
    ],
    entryComponents: [
        DialogResultComponent, 
        CalendarDialogComponent, 
        AddUserComponent, 
        EditUserComponent, 
        DeleteUserComponent,
        AddCompaniesComponent,
        EditCompaniesComponent
    ],
    bootstrap: [AppComponent]

})

export class AppModule {

}
