import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { InsertComponent } from './insert/insert.component';
import { HeaderComponent } from './header/header.component';
import { HideDivComponent } from './hide-div/hide-div.component';
import { ReactiveComponent } from './reactive/reactive.component';
// import { StudentModule } from './student/student.module';


const routes: Routes = [
  // { path: '**', component: HomeComponent },
  // { path:"", pathMatch: "full", redirectTo: "/home" },
  // { path: '', component: HeaderComponent},
  { path: 'home', component: HomeComponent },
  {path:'reactive',component:ReactiveComponent},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'table', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'insert', component: InsertComponent },
  {path:'hide', component:HideDivComponent},
  {path:'student',
// loadChildren:'./student/student.module#StudentModule'
loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ HomeComponent,
                                  AboutComponent,
                                  ServicesComponent,
                                  GalleryComponent,
                                  ContactComponent
                                     
]
