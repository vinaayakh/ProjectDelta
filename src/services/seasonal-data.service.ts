import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { seasonalDataModel } from '../modals/seasonal-data.model';

@Injectable()
export class SeasonalDataService {
    seasonalAnime:Array<seasonalDataModel> = [];
    constructor(private _http: Http) { }

    getSeasonalAnime() {
        const year = new Date().getFullYear();
        const season = this._returnSeason();
        const url = 'https://api.jikan.moe/season/' + year + '/' + season;
        /* create new observable to return */

        return Observable.create((observer)=>{
            this._http.get(url).subscribe(response => {
                /* check if success response and return filtered data*/
                if (response.status == 200) {
                    this.seasonalAnime = response.json().season;
                    observer.next(this._applyFilter());
                } else {
                    console.log(response);
                }
            },error=>{
                console.log(error);
            });
        }) ;
    }

    private _applyFilter(){
        let filteredResponse: Array<seasonalDataModel> = this.seasonalAnime.filter((value)=>{
            return value.r18_plus == false;
        });
        return filteredResponse;
    }

    private _returnSeason() {
        const thisMonth = new Date().getMonth();
        if (0 <= thisMonth && thisMonth <= 2) {
            return 'winter';
        } else if (3 <= thisMonth && thisMonth <= 5) {
            return 'spring';
        } else if (6 <= thisMonth && thisMonth <= 8) {
            return 'summer';
        } else {
            return 'winter';
        }
    }
}