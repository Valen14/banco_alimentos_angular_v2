import { Injectable } from '@angular/core';
import { EnvioApi, Envio, Paquete, PaqueteApi, OrganizacionBeneficiaria } from 'src/app/service/lbservice';

@Injectable({
  providedIn: 'root'
})
export class NuevoEnvioService {

  beneficiario
  paquetes=[]
  envio
  id
  constructor(private envioService: EnvioApi, private paqueteService: PaqueteApi) { }

  setEnvio(envio: any){
    this.envio=envio
  }

  setPaquetes(paquetes: any[]){
    this.paquetes=paquetes
  }

  setBeneficiario(beneId: any){
    console.log(beneId)
    this.beneficiario=beneId
  }

  createEnvio(){
    const nuevoEnvio=
      {
        descripcion: this.envio.descripcion,
        peso: this.envio.peso,
        volumen: this.envio.volumen,
        fecha_maxima: this.envio.fecha_maxima,
        fecha_disponibilidad: this.envio.fecha_disponibilidad,
        comentario_traslado: this.envio.comentario_traslado,
        fecha_asignacion: this.envio.fecha_asignacion,
        estado: this.envio.estado,
        estado_traslado: this.envio.estado_traslado,
        organizacionBeneficiariaId: this.beneficiario
      }
    
    this.envioService.create(nuevoEnvio).subscribe((envio)=>{
        this.paquetes.forEach((paq) => {
          this.paqueteService.updateAttributes(paq.id, { ...paq, envioId: envio['id']} ).subscribe((paq) => {
          })
        })
    })
    
  }

  
  getEnvio(){
    this.envioService.findById(this.id).subscribe((envio)=>{
      return envio
    })
  }
}
