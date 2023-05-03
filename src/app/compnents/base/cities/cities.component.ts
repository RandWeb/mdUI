import {Component, OnInit} from '@angular/core';
import {City} from 'src/app/models/City';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  currentDate:Date = new Date();
  cities: City[] = [
    new City(1, "گچساران"),
    new City(2, "یاسوج"),
    new City(3, "شیراز"),
    new City(4, "بهبهان"),
    new City(5, "تهران"),
  ];
  salePercent:number= 2.5;

  getTrackById(index: number, city: City): number {
    return city.id;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
