import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvioApi } from 'src/app/service/lbservice';
import { NuevoEnvioService } from 'src/app/components/admin/admin/nuevo-envio.service';

@Component({
  selector: 'app-nuevo-envio',
  templateUrl: './nuevo-envio.component.html',
  styleUrls: ['./nuevo-envio.component.css']
})
export class NuevoEnvioComponent implements OnInit {

  envioForm: FormGroup

  constructor(private router: Router, 
    private envioService:EnvioApi,
    private nuevoEnvioService: NuevoEnvioService) {
    this.envioForm = new FormGroup ({
      descripcion: new FormControl(),
      fecha_maxima: new FormControl(),
      fecha_traslado: new FormControl(),
      comentario_traslado: new FormControl(),
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    this.nuevoEnvioService.setEnvio(this.crearEnvio()) 
    this.router.navigateByUrl('admin/envios/nuevo-envio/seleccion-paquetes')  
  }

  private crearEnvio(){
    const descripcionForm= this.envioForm.get('descripcion').value
    const fechaMaximaForm= this.envioForm.get('fecha_maxima').value
    const fechaTrasladoForm= this.envioForm.get('fecha_traslado').value
    const comentarioTrasladoForm= this.envioForm.get('comentario_traslado').value
    return {
      descripcion: descripcionForm,
      peso: 0,
      volumen: [0,0],
      fecha_maxima: new Date(),
      fecha_disponibilidad: new Date(),
      comentario_traslado: comentarioTrasladoForm,
      fecha_asignacion: new Date(),
      estado: 'pendiente de asignacion'
    }
  }



}
