import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AudiobookComponent } from './audiobook/audiobook.component';
import { CoursesComponent } from './courses/courses.component';
import { LiveshowComponent } from './liveshow/liveshow.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AudioreelComponent } from './audioreel/audioreel.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'audiobook', component: AudiobookComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'liveShow', component: LiveshowComponent },
  { path: 'documentary', component: DocumentaryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    AboutComponent,
    VideosComponent,
    ProductsComponent,
    ContactComponent,
    AudiobookComponent,
    CoursesComponent,
    LiveshowComponent,
    DocumentaryComponent,
    PortfolioComponent,
    AudioreelComponent,
    SpeakingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
