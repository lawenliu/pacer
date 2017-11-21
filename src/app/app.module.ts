import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { PacerDashboardComponent } from './pacer-dashboard/pacer-dashboard.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBvCzv6u0N3W6zXxjq8TZVbMgxcXqfJnII',
  authDomain: 'https://practice-pacer.firebaseio.com/',
  databaseURL: 'https://practice-pacer.firebaseio.com/',
  storageBucket: 'practice-pacer.appspot.com',
  messagingSenderId: '797224029030',
  projectId: 'practice-pacer'
};

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

//todo add related services
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TwoButtonComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    ListClientsComponent,
    PacerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
