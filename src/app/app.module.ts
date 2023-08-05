import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const appRoutes:Routes =[ 
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'post/:id', component:PostComponent},
 
  

  
]
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
