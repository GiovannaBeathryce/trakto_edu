import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialDidaticoComponent } from './components/material-didatico/material-didatico.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListOfContentComponent } from './components/list-of-content/list-of-content.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestInterceptor } from './components/login-page/services/req.interceptor';
import { SeeAllComponent } from './components/see-all/see-all.component';
import { ContentCardFixedComponent } from './components/content-card-fixed/content-card-fixed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    MaterialDidaticoComponent,
    FooterComponent,
    ListOfContentComponent,
    ContentCardComponent,
    SeeAllComponent,
    ContentCardFixedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
