import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { VoluntarioAuthGuard } from './guards/voluntario-auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //dinámico
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'donante', loadChildren: () => import('./components/donante/donante.module').then(m => m.DonanteModule) },
  { path: 'voluntario', loadChildren: () => import('./components/voluntario/voluntario.module').then(m => m.VoluntarioModule) },
  { path: 'beneficiario', loadChildren: () => import('./components/beneficiario/beneficiario.module').then(m => m.BeneficiarioModule) },


  //estatico
  { path: '**', redirectTo: '/notFound', pathMatch: 'full' },
  { path: 'notFound', component: NotFoundComponent },
  //{ path: 'new-organizacion-donante', component: NewOrganizacionDonanteComponent },
  //{ path: 'modify-organizacion-donante/:idx', component: EditOrganizacionDonanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
