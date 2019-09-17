import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReaderjsonService {
/*
  public data = [];
  public url = 'https://www.mapquestapi.com/directions/v2/route';
  public params = {
    key: 'ymOKYpA3xXl40O5vyf9khV4YYme10f4W',
    from: 'Pau',
    to: 'Bayonne',
    outFormat: 'json',
    ambiguities: 'ignore',
    routeType: 'fastest',
    doReverseGeocode: 'false',
    enhancedNarrative: 'false',
    avoidTimedConditions: 'true',
    avoids: 'Toll+Road%2CLimited+Access'
  };

  constructor(private http: HttpClient, private nativeHttp: HTTP, private loadingCtrl: LoadingController) { }

  async getData() {
    this.nativeHttp.get('https://www.mapquestapi.com/directions/v2/route?', {params: this.params}, {'Content-Type': 'application/json'})
    .then(data => {
      return data;
    }, err => {
      console.log('Native Call error: ', err);
    });
  }
*/
}
