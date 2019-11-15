import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {UrlService} from '../services/url.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cedula:any
  storage:any
  
  // constructor(private http: HttpClient) {}
  
  constructor(private router: Router, private http: HttpClient, private urlService: UrlService){

    this.storage = localStorage
  }
  
  login(){
    
    this.http.post(this.urlService.getUrl()+"/api/login",{
      cedula: this.cedula
    } ).subscribe((response:any)=> {
      if (response.success === true) {
        localStorage.setItem("nombre", response.nombre)
        localStorage.setItem("cedula", this.cedula)
        this.router.navigateByUrl('/dashboard')
      }
    })
  }
}
