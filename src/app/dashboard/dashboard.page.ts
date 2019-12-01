import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit() {
  }

  goToRecibos(){
    this.router.navigateByUrl('/recibos')

  }

  goToConstacia(){
    this.router.navigateByUrl('/constancia')

  }

}
