import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [AuthGuard],
  },

  // otherwise redirect to inventory
  { path: '**', redirectTo: 'inventory' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
