import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Service()
export class TeoriaService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this.getDatos();
  }

  getDatos(){
     return this.httpClient.get('https://api-vehiculos.vercel.app/api/v1/coches/get/all')
  }
}
