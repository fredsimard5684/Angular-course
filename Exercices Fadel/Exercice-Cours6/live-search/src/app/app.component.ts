import {Component, OnInit} from '@angular/core';
import {config, debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap} from "rxjs";
import {ajax} from "rxjs/ajax";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'live-search';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=Repentigny&appid=fd19bf51580278076f38473ab7652772'

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {

    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Repentigny&appid=fd19bf51580278076f38473ab7652772')
      .subscribe((data) => {
        console.log(data)
      })
    //
    // var corsOptions = {
    //   origin: true,
    //   methods: ['GET', 'PUT', 'POST'],
    //   allowedHeaders: ['X-Requested-With','Content-Type', 'Authorization']
    // };
    const searchBox = document.getElementById('search-box')!
    const typeahead = fromEvent<KeyboardEvent>(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => {
        return (<HTMLInputElement>e.target).value
      }), // transfome en observable de chaine de char
      filter(text => text.length > 2), // plus de deux caractères
      debounceTime(10), // prevenir ecriture effacement rapide
      distinctUntilChanged(), // prevenir écriture effacement du même caractère
      switchMap((text) => ajax({url: `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=fd19bf51580278076f38473ab7652772`,
      headers: [{'Access-Control-Allow-Origin' : '*'}]})) // Swtich to new observable and cancel previous
    )

    typeahead.subscribe((data) => {
      console.log(data)
    })
  }

}
