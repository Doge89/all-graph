import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { MenuOptionComponent } from './components/base/left-navbar/menu-option/menu-option.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OptionListComponent } from './components/base/left-navbar/option-list/option-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuOptionComponent,
    OptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
