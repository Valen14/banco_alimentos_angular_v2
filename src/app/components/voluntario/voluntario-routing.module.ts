import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';
import { NewCarComponent } from './voluntario/cars/new-car/new-car.component';
import { BultosComponent } from './voluntario/bultos/bultos.component';
import { BultoComponent } from './voluntario/bultos/bulto/bulto.component';
import { EditCarComponent } from './voluntario/cars/edit-car/edit-car.component';


const routes: Routes = [
  {
    path: '', component: VoluntarioComponent,
    children:[
      {path: 'envios/:filter', component: EnviosComponent},
      {path: 'envios/:id/ver', component: EnvioComponent},
      {path: 'bultos/:filter', component: BultosComponent},
      {path: 'bultos/:id/ver', component: BultoComponent},            
      {path: 'cars', component: CarsComponent},
      {path: 'cars/:id', component: CarComponent},
      {path: 'cars/nuevo/:id', component: NewCarComponent},
      {path: 'cars/:id/edit', component: EditCarComponent},
      {path: 'insignas', component: InsignasComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntarioRoutingModule { }
