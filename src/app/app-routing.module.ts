import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full',
  },
  {
    path : 'home',
    component : HomeComponent,
    // canActivate : [authGuard],
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'moviedetails/:id',
    component : MoviedetailsComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
