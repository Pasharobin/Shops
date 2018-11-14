import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Shop } from './../shop.model';
import { AppService } from './../app.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit{

  shops: Shop[] = [];

  constructor(
    private appService: AppService,
    private router: Router
    ) { }

  ngOnInit() {
    this.shops = this.appService.getShops();
  }

  edit(i: number) {
    this.router.navigate(['/editor', i]);
  }

  addShop() {
    this.router.navigate(['/editor', -1]);
  }
}
