import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHomeComponent } from './home/components/products/product-home/product-home.component';
import { ProductSectionComponent } from './home/components/product-section/product-section/product-section.component';
import { NewletterSectionComponent } from './home/components/newletter/newletter-section/newletter-section.component';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductsModule } from './products/products.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductHomeComponent,
    ProductSectionComponent,
    NewletterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductDetailsModule,
    ProductsModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProfileModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
