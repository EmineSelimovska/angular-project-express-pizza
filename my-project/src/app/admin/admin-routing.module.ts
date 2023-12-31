import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { FoodPageComponent } from '../components/pages/food-page/food-page.component';
import { CartPageComponent } from '../components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from '../components/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from '../components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PaymentPageComponent } from '../components/pages/payment-page/payment-page.component';
import { OrdersTrackPageComponent } from '../components/pages/orders-track-page/orders-track-page.component';
import { ProfileComponent } from '../components/pages/profile/profile.component';
import { NotFoundComponent } from '../components/pages/not-found/not-found.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'search/:searchName', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'profile/:id', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path: 'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  {path: 'track/:orderId', component: OrdersTrackPageComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent},

 






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
