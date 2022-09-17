import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataFromCore();
  }

  getDataFromCore() {
    this.getDataCore().subscribe((res) =>{
      console.log("Response from API is", res);
    })   
  }

  getDataCore() {
    return this.http.get('/api/getData');
  }

}
