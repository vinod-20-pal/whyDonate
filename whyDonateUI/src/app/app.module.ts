import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},  
{
  path: 'home',
  component: HomeComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
  path: 'search',
  component: SearchComponent
},
];
@NgModule({
imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule               
],
exports: [RouterModule],
declarations: [
    AppComponent,  
    HomeComponent,
    LoginComponent,
    SearchComponent
],
bootstrap: [AppComponent]
})
export class AppModule {

}