import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LandingComponent } from './layouts/landing/landing.component';

@NgModule({
  declarations: [NavBarComponent, LandingComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, LandingComponent, FooterComponent],
})
export class CoreModule {}
