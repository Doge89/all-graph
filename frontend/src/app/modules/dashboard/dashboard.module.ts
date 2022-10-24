import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'src/app/views/dashboard/index/index.component';
import { LeftNavbarComponent } from 'src/app/components/base/left-navbar/left-navbar.component';
import { TopBarComponent } from 'src/app/components/base/top-bar/top-bar.component';

@NgModule({
  declarations: [IndexComponent, LeftNavbarComponent, TopBarComponent],
  imports: [
    CommonModule
  ],
  exports: [IndexComponent, LeftNavbarComponent, TopBarComponent]
})
export class DashboardModule { }
