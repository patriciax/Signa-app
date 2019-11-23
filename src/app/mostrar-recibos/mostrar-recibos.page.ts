import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-mostrar-recibos',
  templateUrl: './mostrar-recibos.page.html',
  styleUrls: ['./mostrar-recibos.page.scss'],
})
export class MostrarRecibosPage implements OnInit {

  nomina_id:any
  conceptos:any
  asignaciones:any
  deducciones:any
  total:any

  constructor(private activatedRoute: ActivatedRoute,  private http: HttpClient,
    private urlService: UrlService, private router: Router) { }

  ngOnInit() {
    this.nomina_id = this.activatedRoute.snapshot.paramMap.get('id')
    this.fetch()
  } 

  goBack(){
    this.router.navigateByUrl('/recibos')
  }

  fetch(){
    this.http
      .post(this.urlService.getUrl() + "/api/mostrar/nomina", {
        nomina: this.nomina_id,
        cedula: localStorage.getItem("cedula")
      })
      .subscribe((response: any) => {
        console.log(response)
        this.conceptos = response.conceptos
        this.asignaciones = response.asignaciones
        this.deducciones = response.deducciones
        this.total = Math.round(( this.asignaciones - this.deducciones)* 100) / 100
      });
  }

}
