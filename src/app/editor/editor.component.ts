import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './../product.model';
import { AppService } from '../app.service';
import { Shop } from '../shop.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  shops: Shop[]
  shop: Shop;
  newProduct: Product = new Product();
  id: number;

  constructor(
    private appService: AppService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.shops = this.appService.getShops();
    if (this.id < 0) {
      this.shop = new Shop();
      this.shops.push(this.shop);
      this.id = this.shops.length - 1;
    } else
    this.shop = this.shops[this.id];
  }

  saveShop() {
    this.appService.updateCoordinates(this.shop).subscribe(() => {
      this.appService.saveShops(this.shops);
      this.router.navigate(['/shops'])
    });
  }

  deleteShop() {
    this.shops.splice(this.id, 1);
    this.appService.saveShops(this.shops);
    this.router.navigate(['/shops'])
  }

  deleteProduct(i: number) {
    this.shop.products.splice(i, 1);
  }

  addProduct() {
    this.shop.products.push(this.newProduct);
    this.newProduct = new Product();
  }
}
