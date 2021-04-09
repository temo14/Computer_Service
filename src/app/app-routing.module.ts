import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path: '', redirectTo: '/Home', pathMatch: "full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
