import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { seasonalDataModel } from '../../modals/seasonal-data.model';

@Component({
  selector: 'card-component',
  templateUrl: 'card-component.html'
})
export class CardComponent {
  @Input('details')
  animeDetails: seasonalDataModel;
  // {
  //   airing_start
  //     :
  //     "Apr 7, 2018, 17:30 (JST)",
  //   episodes
  //     :
  //     25,
  //   genre
  //     : [],
  //   image_url
  //     :
  //     "https://myanimelist.cdn-dena.com/r/334x484/images/anime/1319/92084.jpg?s=2783b88f9ffe307c1267e8cd72ea7e9d",
  //   kids
  //     :
  //     false,
  //   licensor
  //     :
  //     ["Funimation"],
  //   mal_id
  //     :
  //     36456,
  //   members
  //     :
  //     289531,
  //   producer
  //     :
  //     [],
  //   r18_plus
  //     :
  //     false,
  //   score
  //     :
  //     8.77,
  //   source
  //     :
  //     "Manga",
  //   synopsis
  //     :
  //     "Third season of Boku no Hero Academia.",
  //   title
  //     :
  //     "Boku no Hero Academia 3rd Season",
  //   url
  //     :
  //     "https://myanimelist.net/anime/36456/Boku_no_Hero_Academia_3rd_Season"
  // }

  constructor(public navCtrl: NavController) { 
    console.log(this.animeDetails);
  }


}
