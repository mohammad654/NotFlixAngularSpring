import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DramaComponent } from './drama/drama.component';
// import { DramaComponent } from './drama/drama.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Routers
import { RouterModule, Routes } from '@angular/router';

import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { LoginComponent } from './login/login.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ActionComponent } from './action/action.component';
import { ComedyComponent } from './comedy/comedy.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { CrimeComponent } from './crime/crime.component';
import { WesternComponent } from './western/western.component';
import { HorrorComponent } from './horror/horror.component';
import { DataService } from './homepage/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './homepage/safe.pipe';
import { GenresComponent } from './genres/genres.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'all', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
//   { path: 'navbar', component: NavbarComponent },
//   { path: 'sidebar', component: SidebarComponent },
//   { path: 'footer', component: FooterComponent },
//   { path: 'action', component: ActionComponent },
//   { path: 'comedy', component: ComedyComponent },
//   { path: 'fantasy', component: FantasyComponent },
//   { path: 'crime', component: CrimeComponent },
//   { path: 'western', component: WesternComponent },
//   { path: 'horror', component: HorrorComponent },
//   { path: 'drama', component: DramaComponent },
  { path: 'movieinfo', component: MovieinfoComponent },
  { path: 'genre/:genreId', component: GenresComponent },
  { path: '**', component: HomepageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MovieinfoComponent,
    LoginComponent,
    ActionComponent,
    ComedyComponent,
    FantasyComponent,
    CrimeComponent,
    WesternComponent,
    HorrorComponent,
    SafePipe,
    GenresComponent,

  ],
  imports: [
    BrowserModule,
    CollapseModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    HttpClientModule,



  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
