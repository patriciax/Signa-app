import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url.service";
import { NavController } from "@ionic/angular";
import {Router} from '@angular/router';

@Component({
  selector: "app-recibos",
  templateUrl: "./recibos.page.html",
  styleUrls: ["./recibos.page.scss"]
})
export class RecibosPage implements OnInit {
  storage: any;
  nominas: any;
  conceptos: any;

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private nav: NavController,
     private router: Router

  ) {
    this.storage = localStorage;
  }

  ngOnInit() {
    this.fetch();
  }

  goBack(){
    this.router.navigateByUrl('/dashboard')
  }

  fetch() {
    this.http
      .post(this.urlService.getUrl() + "/api/recibos", {
        cedula: localStorage.getItem("cedula")
      })
      .subscribe((response: any) => {
        console.log(response);

        this.nominas = response.nominas;
      });
  }

  mostrarNomina(id) {

    this.nav.navigateForward('/mostrar-recibos/'+id)
    
  }
  /*mostrarNomina(id) {
    const mostrarRecibo = this.modalCtrl.create(MostrarRecibosPage);
    mostrarRecibo.present();
    this.http
      .post(this.urlService.getUrl() + "/api/mostrar/nomina", {
        nomina: id,
        cedula: localStorage.getItem("cedula")
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }*/
}
