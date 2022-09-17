import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  searchResult() {
    this.getData(`http://www.omdbapi.com/?t=vinod`).subscribe((res) => {
      if(res){
        console.log(res);
      }
    })
  }
  getData(url: string) {
    return this.httpClient.get(url);
  }
}
