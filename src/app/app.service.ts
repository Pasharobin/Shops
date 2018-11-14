import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Shop } from './shop.model';

@Injectable()
export class AppService {

  shops: Shop[] = [
    {name: 'Евроопт', address: 'Минск, улица Тимирязева, 65', time: '9:00 - 21:00', coordinates: [53.92432507063849,27.509324499999956], products: [
      {name: 'молоко', description: 'молоко', price: 2.15},
      {name: 'хлеб', description: 'хлеб', price: 1.15},
      {name: 'вода', description: 'вода', price: 2.34}
    ]},
    {name: 'Виталюр', address: 'Минск, проспект Дзержинского, 104', time: '8:00 - 22:00', coordinates: [53.86173957068177,27.48018299999988], products: [
      {name: 'молоко', description: 'молоко', price: 2.15},
      {name: 'хлеб', description: 'хлеб', price: 1.15},
      {name: 'вода', description: 'вода', price: 2.34}
    ]},
    {name: 'Гиппо', address: 'Минск, проспект Независимости, 91', time: '10:00 - 23:00', coordinates: [53.923774070637116,27.610025499999924], products: [
      {name: 'молоко', description: 'молоко', price: 2.15},
      {name: 'хлеб', description: 'хлеб', price: 1.15},
      {name: 'вода', description: 'вода', price: 2.34}
    ]},
    {name: 'Корона', address: 'Минск, улица Притыцкого, 83', time: '9:00 - 22:00', coordinates: [53.90559407064872,27.45012549999997], products: [
      {name: 'молоко', description: 'молоко', price: 2.15},
      {name: 'хлеб', description: 'хлеб', price: 1.15},
      {name: 'вода', description: 'вода', price: 3.34}
    ]}
  ]

  constructor(private httpService: HttpService) { }

  getShops() {
    if (!('shops' in localStorage)) {
      localStorage.setItem('shops', JSON.stringify(this.shops));
    }
    return JSON.parse(localStorage.getItem('shops'));
  }

  updateCoordinates(shop: Shop): Observable<void> {
    let address: string = shop.address.trim().split(/[ .,]/g).filter(item => item).join('+');
    return this.httpService.getCoordinates(address).pipe(map(data => {
      shop.coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse();
      return;
    }));
  }

  saveShops(shops: Shop[]) {
    localStorage.setItem('shops', JSON.stringify(shops));
  }
}
