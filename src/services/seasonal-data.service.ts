import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SeasonalDataService {
    constructor(private _http: Http){}

    getSeasonalAnime(){
        const year = new Date().getFullYear();
        const season = this._returnSeason();
        const url = 'https://api.jikan.moe/season/'+year+'/'+season;
        return this._http.get(url);
    }

    private _returnSeason(){
        const thisMonth = new Date().getMonth();
        if(0<thisMonth && thisMonth<2){
            return 'winter';
        }else if(3<thisMonth && thisMonth<5){
            return 'spring';
        }else if(6<thisMonth && thisMonth<8){
            return 'summer';
        }else{
            return 'winter';
        }
    }
}