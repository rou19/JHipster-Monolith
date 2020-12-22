import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ElearningSharedModule } from 'app/shared/shared.module';
import { ElearningCoreModule } from 'app/core/core.module';
import { ElearningAppRoutingModule } from './app-routing.module';
import { ElearningHomeModule } from './home/home.module';
import { ElearningEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ElearningSharedModule,
    ElearningCoreModule,
    ElearningHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ElearningEntityModule,
    ElearningAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ElearningAppModule {}
