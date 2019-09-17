import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReaderjsonService {

  constructor(public http: HttpClient) { }

    getRemoteData(){
        console.log(this.http.get('https://www.mapquestapi.com/directions/v2/route?key=ymOKYpA3xXl40O5vyf9khV4YYme10f4W&from=Pau&to=Bayonne&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=true&avoids=Toll+Road%2CLimited+Access'));
    }
}
