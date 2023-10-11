import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './header/components/navbar/navbar.component';
import { FooterComponent } from './footer/components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
