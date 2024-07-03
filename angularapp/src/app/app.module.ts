//Modules
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel'
import { MenubarModule } from 'primeng/menubar';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LivingRoomComponent } from './components/living-room/living-room.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { DiningRoomComponent } from './components/dining-room/dining-room.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { OtherComponent } from './components/other/other.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostComponent } from './components/post/post.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivingRoomComponent,
    KitchenComponent,
    BathroomComponent,
    DiningRoomComponent,
    BedroomComponent,
    OtherComponent,
    AboutComponent,
    HomeComponent,
    PostPreviewComponent,
    PostComponent,
  ],
  imports: [
    //Router
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'living', component: LivingRoomComponent},
      // {path: 'kitchen', component: KitchenComponent},
      // {path: 'bathroom', component: BathroomComponent},
      // {path: 'bedroom', component: BedroomComponent},
      {path: 'dining', component: DiningRoomComponent},
      {path: 'about', component: AboutComponent},
      {path: 'other', component: OtherComponent},
      {path: 'post/:postId', component: PostComponent}
    ]),
    //Imports
    BrowserModule, HttpClientModule, ButtonModule, CardModule, MenubarModule, ProgressSpinnerModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
