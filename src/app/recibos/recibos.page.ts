import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url.service";

import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: "app-recibos",
  templateUrl: "./recibos.page.html",
  styleUrls: ["./recibos.page.scss"]
})
export class RecibosPage implements OnInit {
  storage: any;
  nominas: any;

  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    public modalCtrl: ModalController
  ) {
    this.storage = localStorage;
  }

  ngOnInit() {
    this.fetch();
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
    
  }
  mostrarNomina(id) {
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
  }
}
