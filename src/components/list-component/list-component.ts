import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeasonalDataService } from '../../services/seasonal-data.service';
import { seasonalDataModel } from '../../modals/seasonal-data.model';

@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html'
})
export class ListComponent implements OnInit {

  constructor(public navCtrl: NavController, private _seasonalData: SeasonalDataService) { }
  seasonalList: Array<seasonalDataModel>;

  ngOnInit() {
    this.getSeasonalAnime();
  }

  getSeasonalAnime() {
    this._seasonalData.getSeasonalAnime().subscribe(SeasonalResponse => {
      if (SeasonalResponse.status == 200) {
        this.seasonalList = SeasonalResponse.json().season;
        console.log(this.seasonalList);
      }else{
        console.log(SeasonalResponse);
      }
    });
  }
}
