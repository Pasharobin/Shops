import { Component, OnInit, Input } from '@angular/core';

import { Shop } from '../shop.model';

declare var ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() shops: Shop[]

  public map: any;

  constructor() { }

  ngOnInit() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [53.9, 27.56667],
        zoom: 11
      });

      for (let shop of this.shops) {
        let marker: any = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: shop.coordinates
          },
          properties: {
            iconCaption: shop.name
          }
        });
        this.map.geoObjects.add(marker);
      }
    });
  }


}
