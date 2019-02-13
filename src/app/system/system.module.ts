import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { CountersPageComponent } from './counters-page/counters-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NewsService } from './shared/services/news.service';
import { ServicesService } from './shared/services/services.service';
import { AppealService } from './shared/services/appeal.service';
import { CountersService } from './shared/services/counters.service';
import { AppealDetailComponent } from './mail-page/appeal-detail/appeal-detail.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { StatusPipe } from './shared/pipes/status.pipe';
import { ServiceDetailComponent } from './services-page/service-detail/service-detail.component';
import { ServiceDetailEditComponent } from './services-page/service-detail/service-detail-edit/service-detail-edit.component';
import { CounterDetailComponent } from './counters-page/counter-detail/counter-detail.component';
import { UsersService } from './shared/services/users.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PaymentsService } from './shared/services/payments.service';
import { AreaPageComponent } from './area-page/area-page.component';
import { AreaService } from './shared/services/area.service';
import { AreaDetailComponent } from './area-page/area-detail/area-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SearchFieldComponent } from './shared/components/search-field/search-field.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { SelectTypeComponent } from './shared/components/select-type/select-type.component';
import { SelectDateComponent } from './shared/components/select-date/select-date.component';
import { FirstDateComponent } from './shared/components/select-date/first-date/first-date.component';
import { SecondDateComponent } from './shared/components/select-date/second-date/second-date.component';
import { SelectStatusComponent } from './shared/components/select-status/select-status.component';
import { PaymentDetailComponent } from './payments-page/payment-detail/payment-detail.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrderDetailComponent } from './orders-page/order-detail/order-detail.component';
import { OrdersService } from './shared/services/orders.service';
import { AmountUsersGraphComponent } from './statistics-page/amount-users-graph/amount-users-graph.component';
import { TotalUsersChartComponent } from './statistics-page/total-users-chart/total-users-chart.component';
import { AmountCountersChartComponent } from './statistics-page/amount-counters-chart/amount-counters-chart.component';
import { AmountPaymentsChartComponent } from './statistics-page/amount-payments-chart/amount-payments-chart.component';
import { AmountOrdersChartComponent } from './statistics-page/amount-orders-chart/amount-orders-chart.component';
import { AmountAppealsChartComponent } from './statistics-page/amount-appeals-chart/amount-appeals-chart.component';
import { TextStatComponent } from './statistics-page/text-stat/text-stat.component';
import { AmountAppealsComponent } from './statistics-page/amount-appeals/amount-appeals.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ruLocale } from 'ngx-bootstrap/locale';
import { StatisticService } from './shared/services/statistic.service';
import { TotalValuePaymentsComponent } from './statistics-page/total-value-payments/total-value-payments.component';

defineLocale('ru', ruLocale); 

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule,
        MDBBootstrapModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        NgxMyDatePickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    declarations: [
        SystemComponent,
        HeaderComponent,
        SidebarComponent,
        SearchFieldComponent,
        NewsPageComponent,
        CountersPageComponent,
        PaymentsPageComponent,
        ServicesPageComponent,
        StatisticsPageComponent,
        MailPageComponent,
        AppealDetailComponent,
        FilterPipe,
        StatusPipe,
        ServiceDetailComponent,
        ServiceDetailEditComponent,
        CounterDetailComponent,
        AreaPageComponent,
        AreaDetailComponent,
        SelectTypeComponent,
        SelectDateComponent,
        FirstDateComponent,
        SecondDateComponent,
        SelectStatusComponent,
        PaymentDetailComponent,
        OrdersPageComponent,
        OrderDetailComponent,
        AmountUsersGraphComponent,
        TotalUsersChartComponent,
        AmountCountersChartComponent,
        AmountPaymentsChartComponent,
        AmountOrdersChartComponent,
        AmountAppealsChartComponent,
        TextStatComponent,
        AmountAppealsComponent,
        TotalValuePaymentsComponent
    ],
    exports: [],
    providers: [NewsService, ServicesService, AppealService, CountersService, UsersService, PaymentsService, AreaService, OrdersService, StatisticService]
})

export class SystemModule {}