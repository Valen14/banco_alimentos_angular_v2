import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntarioRoutingModule } from './voluntario-routing.module';
import { VoluntarioComponent } from './voluntario/voluntario.component';
import { EnviosComponent } from './voluntario/envios/envios.component';
import { EnvioComponent } from './voluntario/envios/envio/envio.component';
import { CarsComponent } from './voluntario/cars/cars.component';
import { CarComponent } from './voluntario/cars/car/car.component';
import { InsignasComponent } from './voluntario/insignas/insignas.component';
import { BultosComponent } from './voluntario/bultos/bultos.component';
import { BultoComponent } from './voluntario/bultos/bulto/bulto.component';



@NgModule({
  declarations: [VoluntarioComponent, EnviosComponent, EnvioComponent, CarsComponent, CarComponent, InsignasComponent, BultosComponent, BultoComponent, ],
  imports: [
    CommonModule,
    VoluntarioRoutingModule
  ]
})
export class VoluntarioModule { }
