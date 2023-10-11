import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './home/components/products/product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/components/details/product-details/product-details.component';
import { AllProductComponent } from './products/components/All-product/all-product/all-product.component';
import { LoginComponent } from './login/components/login/login/login.component';
import { RegisterComponent } from './login/components/register/register/register.component';
import { ProfileComponent } from './profile/components/profile/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductHomeComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'products', component: AllProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
